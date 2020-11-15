import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '@components/Layout';
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
            <>
                {posts.map((item) => {
                    const node = item.node;
                    const { excerpt, frontmatter } = node;
                    const { slug } = node.fields;
                    const { date, description, title } = frontmatter;

                    return (
                        <article key={slug}>
                            <header>
                                <h3>
                                    <Link to={slug}>{title ?? slug}</Link>
                                </h3>
                                <small>{date}</small>
                            </header>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: description || excerpt,
                                    }}
                                />
                            </section>
                        </article>
                    );
                })}
            </>
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
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        category
                    }
                }
            }
        }
    }
`;
