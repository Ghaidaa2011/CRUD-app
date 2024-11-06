import { useEffect } from "react";
import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";
import { useAppDispatch } from "../app/hooks";
import { cleanPostInfo } from "../app/posts/postsSlice";

const Details = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(cleanPostInfo());
    };
  }, [dispatch]);
  const { loading, error, postInfo } = usePostDetails();
  return (
    <>
      <Loading loading={loading} error={error}>
        <p>Title: {postInfo?.title}</p>
        <p>Description: {postInfo?.description}</p>
      </Loading>
    </>
  );
};
export default Details;
