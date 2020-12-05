import { Global, ThemeProvider } from '@emotion/react';
import { useCallback, useState } from 'react';

import Category from '@components/Category';
import Header from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitch';
import { LayoutProps } from '@interfaces/components/layout';
import globalStyles from '@styles/global';
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
            <Global styles={globalStyles} />
            <div>
                <div>
                    <Header title={title}>
                        <ThemeSwitch
                            darkTheme={darkThemeState}
                            handleChange={handleDarkTheme}
                        />
                    </Header>
                    {location.pathname === rootPath && (
                        <Category categories={categories as string[]} />
                    )}
                    <main>{children}</main>
                    <footer>©Soulcactus</footer>
                </div>
            </div>
        </ThemeProvider>
    );
}

// export const StyledLayout = styled.div`
//     width: auto;
//     max-width: 78rem;
//     margin: 0 auto;
//
//     ${mediaQueries('xs')`
//         width: calc((100% - 4rem));
//     `}
// `;
