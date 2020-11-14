import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import GlobalStyles from '@styles/global';

export default function Layout({ title, children }: any) {
    return (
        <>
            <GlobalStyles />
            <div>
                <StyledWrapper>
                    <Header title={title} />
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
