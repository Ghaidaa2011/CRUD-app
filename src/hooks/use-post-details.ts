import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actGetPostInfo } from "../app/posts/postsSlice";
import { useParams } from "react-router-dom";

const usePostDetails = ()=> {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, postInfo } = useAppSelector((state) => state.posts);
  useEffect(() => {
    dispatch(actGetPostInfo(id));
  }, [dispatch, id]);
  return {loading, error, postInfo}
}
export default usePostDetails;