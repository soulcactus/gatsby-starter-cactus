import { useCallback, useState } from 'react';

const useInput = (initialState: string) => {
    const [state, setter] = useState(initialState);

    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);

    const handleReset = useCallback(() => {
        setter('');
    }, []);

    return [state, handler, handleReset] as const;
};

export default useInput;
