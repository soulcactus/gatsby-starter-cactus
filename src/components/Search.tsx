import styled from '@emotion/styled';
import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

import { useInput } from '@hooks/index';
import { $size } from '@styles/mixins';
import { normalBoxStyles } from '@styles/modules';

export default function Search() {
    const searchRef = useRef(null);
    const [keywordState, handleKeyword, handleResetKeyword] = useInput('');

    return (
        <div>
            <StyledSearch>
                <div>
                    <label htmlFor="search">
                        <FiSearch />
                    </label>
                    <input
                        aria-label="Search Posts"
                        id="search"
                        onChange={handleKeyword}
                        ref={searchRef}
                        type="text"
                        value={keywordState}
                    />
                    {!!keywordState && (
                        <button
                            aria-label="Reset Search Keyword"
                            onClick={handleResetKeyword}
                            type="button"
                        >
                            <IoIosCloseCircle />
                        </button>
                    )}
                </div>
            </StyledSearch>
        </div>
    );
}

const StyledSearch = styled.div`
    position: relative;
    ${$size('var(--size-156)', 'var(--size-36)')};

    div {
        ${normalBoxStyles}
        ${$size('var(--size-percent-100)')};
        border-radius: var(--size-100);
        box-shadow: var(--box-shadow-color-1);
    }

    // TODO: style module
    label {
        position: absolute;
        top: var(--size-11);
        left: var(--size-12);
        font-size: var(--size-16);
        color: var(--color-sub-text-1);
    }

    button {
        position: absolute;
        top: var(--size-8);
        right: var(--size-10);
        font-size: var(--size-16);
        color: var(--color-sub-text-1);
    }

    input {
        ${$size('var(--size-150)', 'var(--size-30)')};
        margin: var(--margin-auto);
        border-radius: var(--size-100);
        padding: var(--size-2-25-0-28);
        background: transparent;
        font-size: var(--size-14);
        color: var(--color-sub-text-1);
        box-sizing: border-box;
        box-shadow: var(--box-shadow-color-4);
    }
`;
