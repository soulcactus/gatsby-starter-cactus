import { SiteMetaData } from '@interfaces/commons';

export interface BlogIndexProps {
    data: {
        allMarkdownRemark: {
            edges: PostData[];
        };
        site: SiteMetaData;
    };
}

export interface PostData {
    node: {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            category: string;
            date: string;
            description: string;
            title: string;
        };
    };
}
