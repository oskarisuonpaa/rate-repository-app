import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    fullName
    description
    forksCount
    id
    language
    ownerAvatarUrl
    reviewCount
    stargazersCount
    ratingAverage
  }
`;
