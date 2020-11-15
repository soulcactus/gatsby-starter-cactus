import { Title } from '@interfaces/commons';

export interface LayoutProps extends Title {
    categories?: (string | unknown)[];
    children: JSX.Element | JSX.Element[];
}
