import { ChangeEvent } from 'react';

import { IsDarkTheme } from '@interfaces/commons';

export interface ThemeSwitchProps extends IsDarkTheme {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
