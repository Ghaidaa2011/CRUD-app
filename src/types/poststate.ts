import { TPost } from "../types/post";

export type TPostProps = {
  posts: TPost[];
  deletePost: (id: number) => void;
  isLoggedIn: boolean;
};
