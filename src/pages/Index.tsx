import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PostList from "../components/PostList";
import { actDeletePost, actGetPost, cleanPosts } from "../app/posts/postsSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const { accessToken } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(actGetPost());
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(cleanPosts());
    };
  }, [dispatch]);

  const deletePost = (id: string) => {
    dispatch(actDeletePost(id));
  };
  return (
    <>
      <Loading loading={loading} error={error}>
        <PostList
          posts={posts}
          deletePost={deletePost}
          accessToken={accessToken}
        />
      </Loading>
    </>
  );
};
export default Index;
