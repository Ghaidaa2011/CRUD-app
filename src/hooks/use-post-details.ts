import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actGetPostInfo, cleanPostInfo } from "../app/posts/postsSlice";
import { useParams } from "react-router-dom";

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, postInfo } = useAppSelector((state) => state.posts);
  useEffect(() => {
    dispatch(actGetPostInfo(id));
  }, [dispatch, id]);
  useEffect(() => {
    return () => {
      dispatch(cleanPostInfo());
    };
  }, [dispatch]);
  return { loading, error, postInfo }
}
export default usePostDetails;