import styled from 'styled-components';

export default function Facebook() {
    return (
        <svg
            height="25"
            viewBox="0 0 30 30"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <StyledFacebook>
                <path d="M30,15c0-8.3-6.7-15-15-15S0,6.7,0,15c0,7.5,5.5,13.7,12.7,14.8V19.3H8.8V15h3.8v-3.3c0-3.8,2.2-5.8,5.7-5.8c1.6,0,3.4,0.3,3.4,0.3v3.7h-1.9c-1.9,0-2.4,1.2-2.4,2.3V15h4.2l-0.7,4.3h-3.5v10.5C24.5,28.7,30,22.5,30,15z" />
                <path d="M20.8,19.3l0.7-4.3h-4.2v-2.8c0-1.2,0.6-2.3,2.4-2.3h1.9V6.2c0,0-1.7-0.3-3.4-0.3c-3.4,0-5.7,2.1-5.7,5.8V15H8.8v4.3h3.8v10.5c0.8,0.1,1.5,0.2,2.3,0.2s1.6-0.1,2.3-0.2V19.3H20.8z" />
            </StyledFacebook>
        </svg>
    );
}

const StyledFacebook = styled.g`
    path {
        &:first-child {
            fill: ${(props) => props.theme.colors.facebook};
        }

        &:last-child {
            fill: ${(props) => props.theme.colors.white};
        }
    }
`;
