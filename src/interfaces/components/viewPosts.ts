import { HandleChangeInputElement } from '@interfaces/commons';

export interface StyledViewPostsLabelArgs {
    isInfiniteScroll: boolean;
}

export interface ViewPostsProps
    extends HandleChangeInputElement,
        StyledViewPostsLabelArgs {}
