import { useCallback, useEffect, useRef, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

import { $size } from '@styles/mixins';

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

    const handleKeyword = useCallback(
        (e) => {
            setKeyword(focusState ? e.target.value : '');
        },
        [focusState],
    );

    const handleReset = useCallback(() => {
        setKeyword('');
    }, []);

    useEffect(() => {
        if (focusState) {
            searchRef.current.focus();
        }
    }, [focusState]);

    return (
        <StyledSearch>
            <div>
                <button
                    aria-label="Toggle Search Form"
                    className={focusState ? 'opened' : null}
                    onClick={handleFocus}
                    type="button"
                >
                    <FiSearch />
                </button>
                <input
                    aria-label="Search Posts"
                    className={focusState ? 'opened' : null}
                    onChange={handleKeyword}
                    ref={searchRef}
                    type="text"
                    value={keywordState}
                />
                {!!keywordState && (
                    <button
                        aria-label="Reset Search Keyword"
                        onClick={handleReset}
                        type="button"
                    >
                        <CgClose />
                    </button>
                )}
            </div>
        </StyledSearch>
    );
}

const StyledSearch = styled.div`
    position: relative;
    height: 2.5rem;
    margin: 0 0 4rem;
    text-align: right;

    div {
        position: absolute;
        right: 0;
        min-width: 2.5rem;
    }

    button {
        position: absolute;
        ${$size('2.5rem')};

        &:first-child {
            left: 0;
            border-radius: 50%;
            padding: 0 0 0 0.1rem;
            background: #171c28;
            line-height: 1.2rem;
            font-size: 1.8rem;
            color: white;

            &.opened {
                padding: 0;
                background: inherit;
                color: #171c28;
            }
        }

        &:last-child {
            right: 0;
            padding: 0.2rem 0 0;
        }
    }

    input {
        ${$size('0', '2.5rem')};
        border: 0;
        padding: 0 0 0 2.5rem;
        background: transparent;
        font-size: 1.4rem;

        &.opened {
            width: 18rem;
            border-bottom: 0.1rem solid #171c28;
            transition: width 200ms ease-in;
        }
    }
`;
