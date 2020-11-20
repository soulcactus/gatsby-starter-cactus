import { useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import Search from '@components/Search';
import ThemeSwitch from '@components/ThemeSwitch';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

export default function Layout(props: LayoutProps) {
    const { categories, children, title } = props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const [darkThemeState, setDarkTheme] = useState(false);

    const handleDarkTheme = useCallback((e) => {
        setDarkTheme(e.target.checked);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>
                <StyledLayout>
                    <Header title={title}>
                        <ThemeSwitch
                            darkTheme={darkThemeState}
                            handleChange={handleDarkTheme}
                        />
                    </Header>
                    {location.pathname === rootPath && (
                        <>
                            <Bio darkTheme={darkThemeState} />
                            <Category categories={categories as string[]} />
                            <Search />
                        </>
                    )}
                    <main>{children}</main>
                    <footer>©Soulcactus</footer>
                </StyledLayout>
            </div>
        </ThemeProvider>
    );
}

export const StyledLayout = styled.div`
    max-width: 78rem;
    margin: 0 auto;
`;
