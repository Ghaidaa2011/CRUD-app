import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";
import { TPostProps } from "../types/poststate";

const PostList = ({ posts, deletePost, isLoggedIn }: TPostProps) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <PostListItem
            posts={posts}
            deletePost={deletePost}
            isLoggedIn={isLoggedIn}
          />
        </tbody>
      </Table>
    </>
  );
};
export default PostList;
