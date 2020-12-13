import { useCallback, useState } from 'react';

const useTheme = (initialState: boolean) => {
    const [state, setter] = useState(initialState);

    const handler = useCallback((e) => {
        setter(e.target.checked);
    }, []);

    return [state, handler] as const;
};

export default useTheme;
