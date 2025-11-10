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

export const GET_PLACES = gql`
    query NewQuery {
        places {
            nodes {
                name
                slug
            }
        }
    }
`;

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