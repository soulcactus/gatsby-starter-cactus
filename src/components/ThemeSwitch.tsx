import Helmet from 'react-helmet';
import { MdWbSunny } from 'react-icons/md';
import { RiMoonFill } from 'react-icons/ri';
import styled from 'styled-components';

import { THEME } from '@constants/enums';
import { ThemeSwitchProps } from '@interfaces/components/themeSwitch';
import { $size, normalBoxStyles } from '@styles/mixins';

export default function ThemeSwitch(props: ThemeSwitchProps) {
    // TODO: change props name darkTheme to isDarkTheme
    const { darkTheme, handleChange } = props;
    const switchTitle = `Active ${darkTheme ? THEME.LIGHT : THEME.DARK} Theme`;

    return (
        <>
            {darkTheme && (
                <Helmet
                    bodyAttributes={{
                        class: 'dark',
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
                    <div>{darkTheme ? <RiMoonFill /> : <MdWbSunny />}</div>
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
        box-shadow: 5px 2px 10px rgba(0, 9, 52, 0.075),
            inset 4px 4px 4px rgba(0, 9, 52, 0.25), inset 0 -3px 2px white;
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
        box-shadow: 3px 3px 5px rgba(0, 9, 52, 0.25), -2px -3px 2px white;
        font-size: 2rem;
        color: #868686;
        transition: left 200ms linear;
    }

    svg {
        margin: 0 auto;
    }
`;
