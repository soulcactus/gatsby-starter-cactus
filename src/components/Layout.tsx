import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import Header from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitch';
import { LayoutProps } from '@interfaces/components/layout';
import globalStyles from '@styles/global';
import theme from '@styles/theme';
import { justifiedBoxStyles } from '@styles/modules';

export default function Layout(props: LayoutProps) {
    const { children, handleTheme, isDarkTheme, title } = props;
    // const rootPath = `${__PATH_PREFIX__}/`;

    return (
        <ThemeProvider theme={theme}>
            <Helmet
                bodyAttributes={{
                    class: 'light',
                }}
            >
                <link
                    href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Helmet>
            <Global styles={globalStyles} />
            <StyledLayout>
                <Header title={title}>
                    <ThemeSwitch
                        handleChange={handleTheme}
                        isDarkTheme={isDarkTheme}
                    />
                </Header>
                {children}
                <StyledFooter>©Soulcactus</StyledFooter>
            </StyledLayout>
        </ThemeProvider>
    );
}

export const StyledLayout = styled.div`
    width: 100%;
    max-width: 74rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const StyledToolbar = styled.div`
    ${justifiedBoxStyles}
`;

export const StyledFooter = styled.footer`
    padding: 3.5rem 0;
    text-align: center;
    font-size: 1.2rem;
    color: #333;
`;
