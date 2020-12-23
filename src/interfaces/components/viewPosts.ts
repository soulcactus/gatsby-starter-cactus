import { ChangeEvent } from 'react';

export interface ViewPostsProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isInfiniteScroll: boolean;
}
