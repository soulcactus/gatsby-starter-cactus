import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { $size } from '@styles/mixins';
import { normalBoxStyles } from '@styles/modules';

export default function Search() {
    const [focusState, setFocus] = useState(false);
    const [keywordState, setKeyword] = useState('');
    const searchRef = useRef(null);

    const handleFocus = useCallback(() => {
        if (focusState) {
            setKeyword('');
        }

        setFocus(!focusState);
    }, [focusState]);

    const handleKeyword = useCallback((e) => {
        setKeyword(e.target.value);
    }, []);

    const handleReset = useCallback(() => {
        setKeyword('');
    }, []);

    useEffect(() => {
        if (focusState) {
            searchRef.current.focus();
        }
    }, [focusState]);

    return (
        <div>
            <StyledSearch>
                <button
                    aria-label="Toggle Search Form"
                    className={focusState ? 'opened' : null}
                    onClick={handleFocus}
                    type="button"
                >
                    <FiSearch />
                </button>
                <div>
                    <input
                        aria-label="Search Posts"
                        className={focusState ? 'opened' : null}
                        onChange={handleKeyword}
                        ref={searchRef}
                        type="text"
                        value={keywordState}
                    />
                </div>
                {!!keywordState && (
                    <button
                        aria-label="Reset Search Keyword"
                        onClick={handleReset}
                        type="button"
                    >
                        <IoIosCloseCircle />
                    </button>
                )}
            </StyledSearch>
        </div>
    );
}

const StyledSearch = styled.div`
    position: relative;
    ${$size('15.6rem', '3.6rem')};

    div {
        ${normalBoxStyles}
        ${$size('100%')};
        border-radius: 10rem;
        box-shadow: var(--box-shadow-color-1);
    }

    button {
        position: absolute;
        font-size: 1.6rem;
        color: #797979;

        &:first-child {
            top: 0.8rem;
            left: 1.2rem;
        }

        &:last-child {
            top: 0.8rem;
            right: 1rem;
        }
    }

    input {
        ${$size('15rem', '3rem')};
        margin: 0 auto;
        padding: 0.2rem 2.5rem 0 2.8rem;
        border-radius: 10rem;
        background: #f8f8f8;
        box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175),
            inset 0 -0.4rem 0.2rem white;
        box-sizing: border-box;
        font-size: 1.4rem;
        color: #797979;
    }
`;
