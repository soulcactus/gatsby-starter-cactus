import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import Header from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitch';
import { LayoutProps } from '@interfaces/components/layout';
import globalStyles from '@styles/global';
import { justifiedBoxStyles } from '@styles/modules';
import theme from '@styles/theme';

// TODO: add interface
export default function Layout(props) {
    const { children, handleCategory, handleTheme, isDarkTheme, title } = props;
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
                <Header handleClick={handleCategory} title={title}>
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
    width: var(--size-percent-100);
    max-width: var(--size-740);
    margin: var(--margin-auto);
    padding: var(--size-0-20);
`;

export const StyledToolbar = styled.div`
    ${justifiedBoxStyles}
`;

export const StyledFooter = styled.footer`
    padding: var(--size-35-0);
    text-align: center;
    font-size: var(--size-12);
`;
