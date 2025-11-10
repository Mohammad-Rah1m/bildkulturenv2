import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_PLACES = gql`
  query GetProjectsByPlaces ($name: [String!]!) {
   places(where: { name: $name }) {
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
