import { gql } from "@apollo/client";

export const SEARCH_PROJECTS = gql`
  query SearchProjects($searchTerm: String!) {
    projects(where: { search: $searchTerm }) {
      nodes {
        id
        title
        slug
        featuredImage{
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

