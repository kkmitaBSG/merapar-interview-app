export const caseOptions = {
  CommentsByAuthor: {
    name: "Comments by Author",
    value: "CommentsByAuthor",
  },
  CommentsByPosts: {
    name: "Comments by posts",
    value: "CommentsByPosts",
  },
  PostsByAuthor: {
    name: "Posts by author",
    value: "PostsByAuthor",
  },
};

export interface CommentType {
  id: number;
  body: string;
  post_id: number;
  user_id: number;
}

export interface PostType {
  id: number;
  user_id: number;
  title: string;
}

export interface UserType {
  id: number;
  name: string;
}

export interface PromiseType<T> {
  data: T[];
}

export interface DataType {
  comments: CommentType[];
  posts: PostType[];
  users: UserType[];
}
