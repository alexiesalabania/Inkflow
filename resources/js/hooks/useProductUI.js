import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Modal / toast state for the product screens.
 * form:   null | { product: null }  (create)  | { product: {...} } (edit)
 * target: product pending deletion, or null
 */
export default function useProductUI() {
    const [form, setForm] = useState(null);
    const [target, setTarget] = useState(null);
    const [toast, setToast] = useState(null);
    const timer = useRef();

    const showToast = useCallback((message) => {
        setToast(message);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setToast(null), 2500);
    }, []);

    useEffect(() => () => clearTimeout(timer.current), []);

    return {
        form,
        target,
        toast,
        showToast,
        openNew: () => setForm({ product: null }),
        openEdit: (product) => setForm({ product }),
        closeForm: () => setForm(null),
        askDelete: (product) => setTarget(product),
        closeDelete: () => setTarget(null),
    };
}
