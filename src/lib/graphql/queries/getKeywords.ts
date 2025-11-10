import { gql } from "@apollo/client";
export const GET_KEYWORDS = gql`
    query NewQuery {
        keywords {
            nodes {
                name
                slug
            }
        }
    }
`;