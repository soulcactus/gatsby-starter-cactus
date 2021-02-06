import { ChangeEvent } from 'react';

import { Title } from '@interfaces/commons';

export interface LayoutProps extends Title {
    categories?: (string | unknown)[];
    children: JSX.Element | JSX.Element[];
    // TODO: check optional
    handleCategory?: (category: string) => void;
    handleTheme?: (e: ChangeEvent<HTMLInputElement>) => void;
    isDarkTheme?: boolean;
}
