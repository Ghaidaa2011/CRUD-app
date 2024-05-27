import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PostList from "../components/PostList";
import { actDeletePost, actGetPost } from "../app/posts/postsSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(actGetPost());
  }, [dispatch]);
  const deletePost = useCallback(
    (id: number) => {
      dispatch(actDeletePost(id));
    },
    [dispatch]
  );
  return (
    <>
      <Loading loading={loading} error={error}>
        <PostList
          posts={posts}
          deletePost={deletePost}
          isLoggedIn={isLoggedIn}
        />
      </Loading>
    </>
  );
};
export default Index;
