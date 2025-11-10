import { gql } from "@apollo/client";

export const SEARCH_BY_TAXONOMY = gql`
  query SearchByTaxonomy($term: [String], $taxonomy: TaxonomyEnum!) {
    projects(
      where: {
        taxQuery: {
          relation: AND
          taxArray: [
            { taxonomy: $taxonomy, terms: $term, field: SLUG }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
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
