import { IsDarkTheme } from '@interfaces/commons';

export interface SocialLinksProps extends IsDarkTheme {
    list: {
        facebook: string;
        github: string;
        twitter: string;
    };
}
