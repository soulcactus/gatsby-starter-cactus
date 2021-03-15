import { ChangeEvent, useState } from 'react';

const useInput = (initialState: string) => {
    const [state, setter] = useState(initialState);

    const handler = (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    const handleReset = () => {
        setter('');
    };

    return [state, handler, handleReset] as const;
};

export default useInput;
