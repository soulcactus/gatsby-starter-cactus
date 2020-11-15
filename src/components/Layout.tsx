import React from 'react';
import styled from 'styled-components';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import GlobalStyles from '@styles/global';

export default function Layout({ categories, children, title }: any) {
    return (
        <>
            <GlobalStyles />
            <div>
                <StyledWrapper>
                    <Header title={title} />
                    <Bio />
                    <Category categories={categories} />
                    <main>{children}</main>
                    <footer>©Soulcactus</footer>
                </StyledWrapper>
            </div>
        </>
    );
}

export const StyledWrapper = styled.div`
    max-width: 90rem;
    margin: 0 auto;
`;
