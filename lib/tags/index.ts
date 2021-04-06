import gql from "graphql-tag";

export const USER = gql`
  query getUser($id: String!) {
    user(id: $id) {
      id
      title
      firstName
      lastName
      email
      picture
    }
  }
`;

export const POST = gql`
  query getPost($id: String!) {
    post(id: $id) {
      id
      image
      likes
      link
      publishDate
      tags
      text
      owner {
        id
        title
        firstName
        lastName
        email
        picture
      }
    }
  }
`;

export const POSTS = gql`
  query getPosts($page: Int, $limit: Int) {
    posts(page: $page, limit: $limit) {
      data {
        id
        image
        likes
        link
        publishDate
        tags
        text
        owner {
          id
          title
          firstName
          lastName
          email
          picture
        }
      }
      total
      page
      limit
      offset
    }
  }
`;
