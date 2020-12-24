import { useCallback, useState } from 'react';

const useCategory = (initialState: number, categories: string[]) => {
    const [state, setter] = useState(initialState);

    const handler = useCallback((index) => {
        setter(index);
    }, []);

    const handlePrevious = useCallback(() => {
        if (state !== 0) {
            setter(state - 1);
        }
    }, [state]);

    const handleNext = useCallback(() => {
        if (state !== categories?.length) {
            setter(state + 1);
        }
    }, [categories, state]);

    return [state, handler, handlePrevious, handleNext] as const;
};

export default useCategory;
