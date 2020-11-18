import Helmet from 'react-helmet';
import styled from 'styled-components';

import { ThemeSwitchProps } from '@interfaces/components/themeSwitch';

export default function ThemeSwitch(props: ThemeSwitchProps) {
    const { darkTheme, handleChange } = props;

    return (
        <>
            {darkTheme && (
                <Helmet
                    bodyAttributes={{
                        class: 'dark',
                    }}
                />
            )}
            <StyledSwitch>
                <label>
                    <input onChange={handleChange} type="checkbox" />
                    <div />
                </label>
            </StyledSwitch>
        </>
    );
}

const StyledSwitch = styled.div`
    label {
        cursor: pointer;

        input {
            display: none;

            & + div {
                border-radius: 50%;
                width: 36px;
                height: 36px;
                box-shadow: inset 14px -14px 0 0 #212f3d;
                transform: scale(1) rotate(-2deg);
                transition: box-shadow 0.4s ease 0s, transform 0.3s ease 0.1s;

                &:before {
                    content: '';
                    width: inherit;
                    height: inherit;
                    border-radius: inherit;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transition: background 0.2s ease;
                }

                &:after {
                    content: '';
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin: -4px 0 0 -4px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    box-shadow: 0 -23px 0 white, 0 23px 0 white, 23px 0 0 white,
                        -23px 0 0 white, 15px 15px 0 white, -15px 15px 0 white,
                        15px -15px 0 white, -15px -15px 0 white;
                    transform: scale(0);
                    transition: all 0.2s ease;
                }
            }

            &:checked + div {
                box-shadow: inset 28px -28px 0 0 #212f3d;
                transform: scale(0.5) rotate(0deg);
                transition: transform 0.2s ease 0.1s, box-shadow 0.1s ease 0s;

                &:before {
                    background: white;
                    transition: background 0.2s ease 0.05s;
                }

                &:after {
                    transform: scale(1.5);
                    transition: transform 0.4s ease 0.1s;
                }
            }
        }
    }
`;
