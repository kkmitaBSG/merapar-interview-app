import { CommentType, PostType, PromiseType, UserType } from "../constants";
import comments from "./comments.json";
import posts from "./posts.json";
import users from "./users.json";

const generateDelayTime = () => Math.random() * 1500 + 100;

export const getComments = () =>
  new Promise<PromiseType<CommentType>>((resolve) =>
    setTimeout(() => resolve(comments), generateDelayTime())
  );
export const getPosts = () =>
  new Promise<PromiseType<PostType>>((resolve) =>
    setTimeout(() => resolve(posts), generateDelayTime())
  );
export const getUsers = () =>
  new Promise<PromiseType<UserType>>((resolve) =>
    setTimeout(() => resolve(users), generateDelayTime())
  );
