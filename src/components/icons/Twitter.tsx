import styled from 'styled-components';

export default function Twitter() {
    return (
        <svg
            height="25"
            viewBox="0 0 30 30"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <StyledTwitter>
                <circle cx="15" cy="15" r="15" />
                <path d="M12.3,22.9c6.7,0,10.3-5.5,10.3-10.3c0-0.2,0-0.3,0-0.5c0.7-0.5,1.3-1.1,1.8-1.9c-0.6,0.3-1.3,0.5-2.1,0.6c0.7-0.4,1.3-1.2,1.6-2c-0.7,0.4-1.5,0.7-2.3,0.9C20.9,9,20,8.6,18.9,8.6c-2,0-3.6,1.6-3.6,3.6c0,0.3,0,0.6,0.1,0.8c-3-0.2-5.7-1.6-7.5-3.8c-0.3,0.5-0.5,1.2-0.5,1.8c0,1.3,0.6,2.4,1.6,3c-0.6,0-1.2-0.2-1.6-0.5c0,0,0,0,0,0c0,1.8,1.2,3.2,2.9,3.5c-0.3,0.1-0.6,0.1-1,0.1c-0.2,0-0.5,0-0.7-0.1c0.5,1.4,1.8,2.5,3.4,2.5c-1.2,1-2.8,1.5-4.5,1.5c-0.3,0-0.6,0-0.9-0.1C8.3,22.3,10.2,22.9,12.3,22.9" />
            </StyledTwitter>
        </svg>
    );
}

const StyledTwitter = styled.g`
    circle {
        fill: ${(props) => props.theme.colors.twitter};
    }

    path {
        fill: ${(props) => props.theme.colors.white};
    }
`;
