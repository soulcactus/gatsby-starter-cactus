import { ChangeEvent } from 'react';

import { Title } from '@interfaces/commons';

export interface LayoutProps extends Title {
    categories?: (string | unknown)[];
    children: JSX.Element | JSX.Element[];
    handleTheme?: (e: ChangeEvent<HTMLInputElement>) => void;
    isDarkTheme?: boolean;
}
