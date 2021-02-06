import { Title } from '@interfaces/commons';

export interface HeaderProps extends Title {
    children: JSX.Element;
    handleClick: (category: string) => void;
}
