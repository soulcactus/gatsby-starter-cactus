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
                        class: isDarkTheme ? 'dark' : 'light',
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
    ${$size('5.5rem', '3rem')};

    label {
        display: block;
        position: relative;
        ${$size('100%')};
        border-radius: 10rem;
        background: ${(props) => props.theme.backgrounds.light};
        box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.25),
            inset 0 -0.4rem 0.2rem white;
        cursor: pointer;
    }

    input {
        display: none;

        &:checked + div {
            left: 2.5rem;
            transition: left 200ms linear;
        }
    }

    div {
        ${normalBoxStyles};
        position: absolute;
        top: 0;
        left: 0;
        ${$size('3rem')};
        border-radius: 50%;
        background: ${(props) => props.theme.backgrounds.light};
        box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.25),
            -0.3rem -0.3rem 0.3rem white;
        font-size: 2rem;
        color: #797979;
        transition: left 200ms linear;
    }

    svg {
        margin: 0 auto;
    }
`;
