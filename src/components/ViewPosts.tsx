import styled from '@emotion/styled';
import { ImInfinite, ImPagebreak } from 'react-icons/im';

import { ViewPostsProps } from '@interfaces/components/viewPosts';
import { $size } from '@styles/mixins';
import { justifiedBoxStyles } from '@styles/modules';

export default function ViewPosts(props: ViewPostsProps) {
    const { handleChange, isInfiniteScroll } = props;

    return (
        <StyledViewPosts>
            <StyledViewPostsLabel
                htmlFor="infiniteScroll"
                isInfiniteScroll={isInfiniteScroll}
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
    width: 7rem;
`;

export const StyledViewPostsLabel = styled.label<{ isInfiniteScroll: boolean }>`
    display: flex;
    align-items: center;
    ${$size('3rem')};
    line-height: 1.5rem;
    font-size: 1.8rem;
    color: #797979;
    border-radius: 0.5rem;
    box-shadow: ${(props) =>
        props.isInfiniteScroll
            ? '0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075), inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175), inset 0 -0.4rem 0.2rem white'
            : ' 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.25), -0.3rem -0.3rem 0.3rem white'};
    cursor: pointer;

    &:active {
        box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175),
            inset 0 -0.4rem 0.2rem white;
    }

    input {
        display: none;
    }

    svg {
        margin: 0 auto;
    }
`;
