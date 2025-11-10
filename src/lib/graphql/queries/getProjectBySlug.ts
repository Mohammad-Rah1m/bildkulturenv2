import { gql } from "@apollo/client";

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      title
      content
      projectFields {
        year
        description
        image {
          node {
            sourceUrl
            altText
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      persons {
        nodes {
          name
          slug
        }
      }
      places {
        nodes {
          name
          slug
        }
      }
      keywords {
        nodes {
          name
          slug
        }
      }  
    }
  }
`;
