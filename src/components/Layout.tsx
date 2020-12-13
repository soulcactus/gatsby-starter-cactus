import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitch';
import { useTheme } from '@hooks/index';
import { LayoutProps } from '@interfaces/components/layout';
import globalStyles from '@styles/global';
import theme from '@styles/theme';

export default function Layout(props: LayoutProps) {
    const { categories, children, title } = props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const [themeState, handleTheme] = useTheme(false);

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <link
                    href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Helmet>
            <Global styles={globalStyles} />
            <StyledLayout>
                <div>
                    <Header title={title}>
                        <ThemeSwitch
                            handleChange={handleTheme}
                            isDarkTheme={themeState}
                        />
                    </Header>
                    <Bio isDarkTheme={themeState} />
                    {location.pathname === rootPath && (
                        <Category categories={categories as string[]} />
                    )}
                    <main>{children}</main>
                    <footer>©Soulcactus</footer>
                </div>
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
