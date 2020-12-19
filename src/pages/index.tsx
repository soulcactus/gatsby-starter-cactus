import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PostPreview from '@components/PostPreview';
import SEO from '@components/SEO';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const categories = Array.from(
        new Set(posts.map((item) => item.node.frontmatter.category).sort()),
    );

    return (
        <Layout categories={categories} title={siteTitle}>
            <SEO title="All posts" />
            <PostPreview posts={posts} />
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(truncate: true)
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        date(formatString: "MMMM DD, YYYY")
                        description
                        thumbnail {
                            childImageSharp {
                                fixed(width: 125, height: 125) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        title
                    }
                }
            }
        }
    }
`;
