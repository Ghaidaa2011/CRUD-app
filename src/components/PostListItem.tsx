import { Button, ButtonGroup } from "react-bootstrap";
import { TPostProps } from "../types/poststate";
import { TPost } from "../types/post";
import { Link, useNavigate } from "react-router-dom";

const PostListItem = ({ posts, deletePost, isLoggedIn }: TPostProps) => {
  const navigate = useNavigate();
  const deleteHandler = (post: TPost) => {
    if (window.confirm(`Do you really wanna delete book: ${post.title}`)) {
      deletePost(post.id);
    }
  };
  const data = posts.map((post, inx) => (
    <tr key={post.id}>
      <td>#{inx++}</td>
      <td>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="success"
            onClick={() => navigate(`post/${post.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteHandler(post)}
            disabled={!isLoggedIn}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{data}</>;
};
export default PostListItem;
