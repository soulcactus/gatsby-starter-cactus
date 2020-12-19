import styled from '@emotion/styled';
import { ImInfinite } from 'react-icons/im';
import { $size } from '@styles/mixins';

export default function InfiniteScroll(props) {
    const { isInfiniteScroll } = props;

    return (
        <StyledInfiniteScroll isInfiniteScroll={true}>
            <ImInfinite />
        </StyledInfiniteScroll>
    );
}

export const StyledInfiniteScroll = styled.button<{
    isInfiniteScroll: boolean;
}>`
    ${$size('3rem')};
    line-height: 1.5rem;
    font-size: 1.8rem;
    color: #797979;
    border-radius: 0.5rem;
    box-shadow: ${(props) =>
        props.isInfiniteScroll
            ? '0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075), inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175), inset 0 -0.4rem 0.2rem white'
            : ' 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.25), -0.3rem -0.3rem 0.3rem white'};

    &:active {
        box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175),
            inset 0 -0.4rem 0.2rem white;
    }
`;
