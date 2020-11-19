import { DarkTheme } from '@interfaces/commons';

export interface SocialLinksProps extends DarkTheme {
    list: {
        facebook: string;
        github: string;
        twitter: string;
    };
}
