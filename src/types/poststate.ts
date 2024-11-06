import { TPost } from "../types/post";

export type TPostProps = {
  posts: TPost[];
  deletePost: (id: string) => void;
  isLoggedIn: boolean;
};
