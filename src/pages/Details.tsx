import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";

const Details = () => {
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
