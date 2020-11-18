import { useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import ThemeSwitch from '@components/ThemeSwitch';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

export default function Layout(props: LayoutProps) {
    const { categories, children, title } = props;
    const [darkThemeState, setDarkTheme] = useState(false);

    const handleDarkTheme = useCallback((e) => {
        setDarkTheme(e.target.checked);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>
                <StyledWrapper>
                    <Header title={title}>
                        <ThemeSwitch
                            darkTheme={darkThemeState}
                            handleChange={handleDarkTheme}
                        />
                    </Header>
                    <Bio darkTheme={darkThemeState} />
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
