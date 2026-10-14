/**
 * Single source of truth for products on the client.
 *
 * Both the Dashboard and Products pages read from this store, so any
 * add / edit / delete is reflected on both instantly. The database (via
 * /api/products) remains the real source of truth:
 *   - after every mutation we update the store AND tell other tabs
 *     (BroadcastChannel) to refetch,
 *   - we also refetch when the tab regains focus.
 */
import axios from 'axios';

const API = '/api/products';
const CHANNEL = 'inkflow-products';

let state = { products: [], loaded: false, loading: false, error: null };
const listeners = new Set();

const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel(CHANNEL) : null;

function setState(patch) {
    state = { ...state, ...patch };
    listeners.forEach((l) => l());
}

// API row  ->  UI product
export function fromApi(row) {
    return {
        id: row.id,
        name: row.product,
        category: row.category ?? 'General',
        price: Number(row.price) || 0,
        stock: Number(row.stock) || 0,
        status: row.status ?? 'Active',
        description: row.description ?? '',
    };
}

// UI product  ->  API payload
function toApi(p) {
    return {
        product: p.name,
        category: p.category,
        price: p.price,
        stock: p.stock,
        status: p.status,
        description: p.description || null,
    };
}

// Turn an axios error into something the UI can show.
function toError(err) {
    const res = err?.response;
    const e = new Error(res?.data?.message || err.message || 'Something went wrong');
    // Map Laravel's { product: [...] } to the UI field name `name`.
    const raw = res?.data?.errors || {};
    e.errors = Object.fromEntries(
        Object.entries(raw).map(([k, v]) => [k === 'product' ? 'name' : k, Array.isArray(v) ? v[0] : v]),
    );
    return e;
}

export const productStore = {
    subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },
    getSnapshot: () => state,

    async refresh() {
        if (state.loading) return;
        setState({ loading: true });
        try {
            const { data } = await axios.get(API, { headers: { Accept: 'application/json' } });
            setState({ products: data.map(fromApi), loaded: true, loading: false, error: null });
        } catch (err) {
            setState({ loading: false, error: 'Could not load products.' });
        }
    },

    async create(values) {
        try {
            const { data } = await axios.post(API, toApi(values), { headers: { Accept: 'application/json' } });
            setState({ products: [fromApi(data), ...state.products] });
            channel?.postMessage('changed');
        } catch (err) {
            throw toError(err);
        }
    },

    async update(id, values) {
        try {
            const { data } = await axios.put(`${API}/${id}`, toApi(values), {
                headers: { Accept: 'application/json' },
            });
            setState({ products: state.products.map((p) => (p.id === id ? fromApi(data) : p)) });
            channel?.postMessage('changed');
        } catch (err) {
            throw toError(err);
        }
    },

    async remove(id) {
        try {
            await axios.delete(`${API}/${id}`, { headers: { Accept: 'application/json' } });
            setState({ products: state.products.filter((p) => p.id !== id) });
            channel?.postMessage('changed');
        } catch (err) {
            throw toError(err);
        }
    },
};

// Cross-tab + focus sync (registered once).
if (typeof window !== 'undefined') {
    channel?.addEventListener('message', () => productStore.refresh());
    window.addEventListener('focus', () => state.loaded && productStore.refresh());
}
