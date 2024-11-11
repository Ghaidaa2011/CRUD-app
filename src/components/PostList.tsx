import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";
import { TPostProps } from "../types/poststate";
import { Link } from "react-router-dom";

const PostList = ({ posts, deletePost, accessToken }: TPostProps) => {
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
            accessToken={accessToken}
          />
        </tbody>
      </Table>
      {posts.length > 0 ? (
        <tr>
          <td colSpan={3}>Number of posts {posts.length}</td>
        </tr>
      ) : (
        "You don't have any posts yet"
      )}
      {!accessToken && (
        <>
          There are no posts, please <Link to="/login">login </Link>to show your
          posts
        </>
      )}
    </>
  );
};
export default PostList;
