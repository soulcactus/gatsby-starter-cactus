import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { MdWbSunny } from 'react-icons/md';
import { RiMoonFill } from 'react-icons/ri';

import { THEME } from '@constants/enums';
import { ThemeSwitchProps } from '@interfaces/components/themeSwitch';
import { $size } from '@styles/mixins';
import { normalBoxStyles } from '@styles/modules';

export default function ThemeSwitch(props: ThemeSwitchProps) {
    const { handleChange, isDarkTheme } = props;

    const switchTitle = `Active ${
        isDarkTheme ? THEME.LIGHT : THEME.DARK
    } Theme`;

    return (
        <>
            {isDarkTheme && (
                <Helmet
                    bodyAttributes={{
                        class: isDarkTheme ? THEME.DARK : THEME.LIGHT,
                    }}
                />
            )}
            <StyledSwitch
                aria-label={switchTitle}
                title={switchTitle}
                type="button"
            >
                <label>
                    <input onChange={handleChange} type="checkbox" />
                    <div>{isDarkTheme ? <RiMoonFill /> : <MdWbSunny />}</div>
                </label>
            </StyledSwitch>
        </>
    );
}

const StyledSwitch = styled.button`
    ${$size('var(--size-55)', 'var(--size-30)')};

    label {
        display: block;
        position: relative;
        ${$size('var(--size-percent-100)')};
        border-radius: var(--size-100);
        box-shadow: var(--box-shadow-color-7);
        cursor: pointer;
    }

    input {
        display: none;

        &:checked + div {
            left: var(--size-25);
            transition: var(--transition-left-linear);
        }
    }

    div {
        ${normalBoxStyles};
        position: absolute;
        top: var(--size-0);
        left: var(--size-0);
        ${$size('var(--size-30)')};
        border-radius: var(--size-percent-50);
        background: var(--color-main);
        font-size: var(--size-20);
        color: var(--color-sub-text-1);
        box-shadow: var(--box-shadow-color-6);
        transition: var(--transition-left-linear);
    }

    svg {
        margin: var(--margin-auto);
    }
`;
