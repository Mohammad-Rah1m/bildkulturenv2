import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_PERSON = gql`
  query GetProjectsByPerson ($name: [String!]!) {
   persons(where: { name: $name }) {
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
