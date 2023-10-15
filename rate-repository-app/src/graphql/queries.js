import { gql } from "@apollo/client";
import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query Me($reviews: Boolean!) {
    me {
      username
      reviews @include(if: $reviews) {
        edges {
          node {
            id
            repository {
              fullName
              id
            }
            text
            rating
            createdAt
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;
