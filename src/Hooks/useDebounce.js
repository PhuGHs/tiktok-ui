import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay); // handle variable contains the id of setTimeout function
        return () => clearTimeout(handler);
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
