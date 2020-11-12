import React from 'react';

import Header from '@components/Header';
import GlobalStyles from '@styles/global';

export default function Layout({ title, children }: any) {
    return (
        <>
            <GlobalStyles />
            <div>
                <Header title={title} />
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
}
