import gql from "graphql-tag";
import { PostType, UserFullType, UserType } from "@lib/types";

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

export interface UserData {
  user: UserType;
}

export interface UserVar {
  id: string;
}

export const USERFULL = gql`
  query getUser($id: String!) {
    user(id: $id) {
      id
      title
      firstName
      lastName
      gender
      email
      phone
      picture
      registerDate
      dateOfBirth
      location {
        city
        country
      }
    }
  }
`;

export interface UserFullData {
  user: UserFullType;
}

export const USERS = gql`
  query getUsers($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      data {
        id
        title
        firstName
        lastName
        email
        picture
      }
      total
      page
      limit
      offset
    }
  }
`;

export interface UsersData {
  users: {
    data: UserType[];
    limit: number;
    offset: number;
    page: number;
    total: number;
  };
}

export interface UsersVar {
  page: number;
  limit?: number;
}

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

export interface Posts {
  data: PostType[];
  limit: number;
  offset: number;
  page: number;
  total: number;
}

export interface PostsData {
  posts: Posts;
}

export interface PostsVar {
  page: number;
  limit?: number;
}

export const POSTSBYUSER = gql`
  query getPostsByUser($userId: String!, $page: Int, $limit: Int) {
    postsByUser(userId: $userId, page: $page, limit: $limit) {
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

export interface PostsByUserData {
  postsByUser: Posts;
}

export interface PostsByUserVar extends PostsVar {
  userId: string;
}
