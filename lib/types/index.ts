export interface UserType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

export interface PostType {
  id: string;
  image: string;
  likes: number;
  link: string;
  publishDate: string;
  tags: string[];
  text: string;
  owner: UserType;
}
