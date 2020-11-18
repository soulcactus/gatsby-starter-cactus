import { ChangeEvent } from 'react';

import { DarkTheme } from '@interfaces/commons';

export interface ThemeSwitchProps extends DarkTheme {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
