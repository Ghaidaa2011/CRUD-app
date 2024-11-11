import { Badge } from "react-bootstrap";
import usePostDetails from "../hooks/use-post-details";

const Details = () => {
  const { postInfo } = usePostDetails();
  return (
    <>
      <div className="mb-3">
        <h3>
          <Badge bg="secondary" className="me-3">
            Title:{" "}
          </Badge>
          {postInfo?.title}
        </h3>
      </div>
      <h3>
        <Badge bg="secondary" className="me-3">
          Description:
        </Badge>
        {postInfo?.description}
      </h3>
    </>
  );
};
export default Details;
