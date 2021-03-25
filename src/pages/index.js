import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import Rooms from '../components/Rooms';
import { Grid } from '@material-ui/core';
import PageViewing from '../components/PageViewing';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const [author] = get(
      this,
      'props.data.allContentfulPerson.edges',
    );
    const rooms = get(this, 'props.data.allContentfulRooms.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={'KOROVA DIGITAL'} />
          <Hero data={author.node} />
          <div className="wrapper">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {rooms.map(({ node }, i) => (
                <Rooms
                  right={i % 2 === 0}
                  backgroundImage={`url(${node.image.file.url})`}
                  title={node.title}
                  description={node.description.description}
                  link={node.link}
                  color={node.color}
                />
              ))}
            </Grid>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <PageViewing />
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(
              maxWidth: 350
              maxHeight: 196
              resizingBehavior: SCALE
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(resizingBehavior: PAD, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulRooms(sort: { fields: [order], order: DESC }) {
      edges {
        node {
          color
          title
          subTitle
          order
          link
          image {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;
