import { gql } from "@apollo/client";

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      title
      content
      projectFields {
        id
        year
        description
        beschreibung
        germanTitle
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
          translations{
            germanTerm
          }
        }
      }
      places {
        nodes {
          name
          slug
          translations{
            germanTerm
          }
        }
      }
      keywords {
        nodes {
          name
          slug
          translations{
            germanTerm
          }
        }
      }  
    }
  }
`;
