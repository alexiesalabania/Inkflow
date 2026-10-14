import { productStore } from '@/lib/productStore';
import { useEffect, useMemo, useSyncExternalStore } from 'react';

export const LOW_STOCK_LIMIT = 10;

export default function useProducts() {
    const state = useSyncExternalStore(productStore.subscribe, productStore.getSnapshot, productStore.getSnapshot);

    // Always refresh when a page mounts, so navigating Dashboard <-> Products is never stale.
    useEffect(() => {
        productStore.refresh();
    }, []);

    const stats = useMemo(() => {
        const p = state.products;
        return {
            total: p.length,
            active: p.filter((x) => x.status === 'Active').length,
            value: p.reduce((sum, x) => sum + x.price * x.stock, 0),
            low: p.filter((x) => x.stock > 0 && x.stock < LOW_STOCK_LIMIT).length,
        };
    }, [state.products]);

    return {
        products: state.products,
        loaded: state.loaded,
        loading: state.loading,
        error: state.error,
        stats,
        createProduct: productStore.create,
        updateProduct: productStore.update,
        deleteProduct: productStore.remove,
        refresh: productStore.refresh,
    };
}
