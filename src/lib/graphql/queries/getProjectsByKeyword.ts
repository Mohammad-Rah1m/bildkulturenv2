import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_KEYWORD = gql`
  query GetProjectsByKeyword ($name: [String!]!) {
   keywords(where: { name: $name }) {
    nodes {
      projects {
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
        }
      }
    }
  }
}
`;
