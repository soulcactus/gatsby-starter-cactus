import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

import * as VIEWPOSTS from '@constants/viewPosts';
import { normalBoxStyles } from '@styles/modules';

// TODO: add interface
export default function Pagination(props) {
    const { currentPage, handleChange, posts } = props;

    return (
        <StyledPagination>
            <ReactPaginate
                forcePage={Number(currentPage) - 1}
                marginPagesDisplayed={0}
                nextLabel="next"
                onPageChange={handleChange}
                pageCount={posts.length / VIEWPOSTS.POST_COUNT}
                pageRangeDisplayed={4}
                previousLabel="prev"
            />
        </StyledPagination>
    );
}

const StyledPagination = styled.div`
    ul {
        ${normalBoxStyles};
    }
`;
