import { ChangeEvent, useState } from 'react';

const useRadio = (initialState: string) => {
    const [state, setter] = useState(initialState);
    const handler = (e: ChangeEvent<HTMLInputElement>) => setter(e.target.id);

    return [state, handler] as const;
};

export default useRadio;
