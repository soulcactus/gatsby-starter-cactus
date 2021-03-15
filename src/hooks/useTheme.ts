import { ChangeEvent, useState } from 'react';

const useTheme = (initialState: boolean) => {
    const [state, setter] = useState(initialState);
    const handler = (e: ChangeEvent<HTMLInputElement>) =>
        setter(e.target.checked);

    return [state, handler] as const;
};

export default useTheme;
