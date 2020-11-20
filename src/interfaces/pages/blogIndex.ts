import { PostData, SiteMetaData } from '@interfaces/commons';

export interface BlogIndexProps {
    data: {
        allMarkdownRemark: {
            edges: PostData[];
        };
        site: SiteMetaData;
    };
}
