import { gql } from "@apollo/client";
export const GET_PERSONS = gql`
    query NewQuery {
        persons {
            nodes {
                name
                slug
            }
        }
    }
`;