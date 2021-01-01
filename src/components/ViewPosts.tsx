import styled from '@emotion/styled';
import { ImInfinite, ImPagebreak } from 'react-icons/im';

import {
    StyledViewPostsLabelArgs,
    ViewPostsProps,
} from '@interfaces/components/viewPosts';
import { $size } from '@styles/mixins';
import { justifiedBoxStyles, normalBoxStyles } from '@styles/modules';

export default function ViewPosts(props: ViewPostsProps) {
    const { handleChange, isInfiniteScroll } = props;

    return (
        <StyledViewPosts>
            <StyledViewPostsLabel
                htmlFor="infiniteScroll"
                isInfiniteScroll={isInfiniteScroll}
                tabIndex={0}
            >
                <input
                    id="infiniteScroll"
                    name="viewPosts"
                    onChange={handleChange}
                    type="radio"
                    checked={isInfiniteScroll}
                />
                <ImInfinite />
            </StyledViewPostsLabel>
            <StyledViewPostsLabel
                htmlFor="pagination"
                isInfiniteScroll={!isInfiniteScroll}
                tabIndex={0}
            >
                <input
                    id="pagination"
                    name="viewPosts"
                    onChange={handleChange}
                    type="radio"
                    checked={!isInfiniteScroll}
                />
                <ImPagebreak />
            </StyledViewPostsLabel>
        </StyledViewPosts>
    );
}

export const StyledViewPosts = styled.div`
    ${justifiedBoxStyles};
    width: var(--size-70);
`;

export const StyledViewPostsLabel = styled.label<StyledViewPostsLabelArgs>`
    ${normalBoxStyles};
    ${$size('var(--size-30)')};
    border-radius: var(--size-5);
    line-height: var(--size-15);
    font-size: var(--size-18);
    color: var(--color-sub-color-1);
    box-shadow: ${(props) =>
        props.isInfiniteScroll
            ? 'var(--box-shadow-color-4)'
            : 'var(--box-shadow-color-6)'};
    cursor: pointer;

    &:active {
        box-shadow: var(--box-shadow-color-4);
    }

    input {
        display: none;
    }

    svg {
        margin: var(--margin-auto);
    }
`;
