import { navigate } from 'gatsby-link';
import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';

import * as STORAGES from '@constants/storages';

const usePage = (initialState: string | string[]) => {
    const [state, setter] = useState(initialState);

    const handler = useCallback(({ selected }) => {
        setter(`${selected + 1}`);
    }, []);

    useEffect(() => {
        const handlePageMove = function () {
            const parsedSearch = queryString.parse(location.search);

            const isViewWithPagination = JSON.parse(
                localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
            );

            if (isViewWithPagination) {
                setter(parsedSearch.page ?? '1');
                parsedSearch.page = parsedSearch.page ?? '1';
            } else {
                delete parsedSearch.page;
            }

            navigate(`?${queryString.stringify(parsedSearch)}`, {
                replace: true,
            });
        };

        window.addEventListener('popstate', handlePageMove);

        return () => window.removeEventListener('popstate', handlePageMove);
    }, []);

    useEffect(() => {
        const isViewWithPagination = JSON.parse(
            localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
        );

        if (isViewWithPagination) {
            const parsedSearch = queryString.parse(location.search);

            if (state !== parsedSearch.page) {
                parsedSearch.page = state;
                navigate(`?${queryString.stringify(parsedSearch)}`);
            }
        }
    }, [state]);

    return [state, handler] as const;
};

export default usePage;
