export const debounce = (func: () => void, delay: number) => {
    let timeout: number;
    return () => {
        clearTimeout(timeout);
        timeout = window.setTimeout(func, delay);
    };
}