import { Button, ButtonGroup, Modal } from "react-bootstrap";
import { TPostProps } from "../types/poststate";
import { TPost } from "../types/post";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const PostListItem = ({ posts, deletePost, accessToken }: TPostProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<TPost | null>(null);

  const handleDeleteClick = (post: TPost) => {
    setPostToDelete(post); // Set the post to be deleted
    setShowModal(true); // Show the modal
  };

  const handleDeleteConfirm = () => {
    if (postToDelete) {
      deletePost(postToDelete.id as string);
      setShowModal(false); // Close the modal after deletion
      setPostToDelete(null); // Clear the post to delete
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPostToDelete(null); // Clear the post when modal is closed
  };

  const data = posts.map((post, index) => (
    <>
      <tr key={post.id}>
        <td>#{++index}</td>
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
              onClick={() => handleDeleteClick(post)}
              disabled={!accessToken}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    </>
  ));

  return (
    <>
      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you really want to delete the book: {postToDelete?.title}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>

      {data}
    </>
  );
};

export default PostListItem;
