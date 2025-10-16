import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      nodes {
        title
        slug
        featuredImage {
        node {
          id
          sourceUrl
          altText
        }
      }
        projectFields {
          year
          description
        }
      }
    }
  }
`;
