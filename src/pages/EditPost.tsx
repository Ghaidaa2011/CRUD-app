import { useEffect } from "react";
import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { actEditPost, cleanPostInfo } from "../app/posts/postsSlice";
import WithGuard from "../utils/WithGuard";
import { addPostSchema, addPostType } from "../validations/addPostSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/form/Input";
import { Form, Button } from "react-bootstrap";

const EditPost = () => {
  const { loading, error, postInfo } = usePostDetails();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<addPostType>({
    mode: "onBlur",
    resolver: zodResolver(addPostSchema),
  });
  useEffect(() => {
    if (postInfo) {
      setValue("title", postInfo.title, { shouldValidate: true });
      setValue("description", postInfo.description, { shouldValidate: true });
    }
  }, [postInfo, setValue]);
  useEffect(() => {
    return () => {
      dispatch(cleanPostInfo());
    };
  }, [dispatch]);
  const submitForm: SubmitHandler<addPostType> = (post) =>
    dispatch(
      actEditPost({
        id: postInfo?.id,
        title: post.title,
        description: post.description,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Input
          label="Title"
          type="text"
          name="title"
          register={register}
          error={errors.title?.message}
        />
        <Input
          label="Description"
          type="text"
          name="description"
          register={register}
          error={errors.description?.message}
          as="textarea"
          rows={5}
        />
        <Loading loading={loading} error={error}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Loading>
      </Form>
    </>
  );
};
const ProtectedEditPost = WithGuard(EditPost);
export default ProtectedEditPost;
