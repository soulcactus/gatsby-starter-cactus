import styled, { ThemeProvider } from 'styled-components';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

export default function Layout(props: LayoutProps) {
    const { categories, children, title } = props;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>
                <StyledWrapper>
                    <Header title={title} />
                    <Bio />
                    <Category categories={categories as string[]} />
                    <main>{children}</main>
                    <footer>©Soulcactus</footer>
                </StyledWrapper>
            </div>
        </ThemeProvider>
    );
}

export const StyledWrapper = styled.div`
    max-width: 90rem;
    margin: 0 auto;
`;
