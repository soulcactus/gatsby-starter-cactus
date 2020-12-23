import { useCallback, useState } from 'react';

const useRadio = (initialState: string) => {
    const [state, setter] = useState(initialState);
    const handler = useCallback((e) => setter(e.target.id), []);

    return [state, handler] as const;
};

export default useRadio;
