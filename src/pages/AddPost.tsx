import { addPostSchema, addPostTypeSchema } from "../validations/addPostSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/ui/Input";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actInsertPost } from "../app/posts/postsSlice";
import { useNavigate } from "react-router-dom";
// import Loading from "../components/Loading";
import WithGuard from "../utils/WithGuard";
import { Form, Button, Spinner } from "react-bootstrap";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading /*error */ } = useAppSelector((state) => state.posts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addPostTypeSchema>({
    mode: "onBlur",
    resolver: zodResolver(addPostSchema),
  });
  const submitForm: SubmitHandler<addPostTypeSchema> = (post) => {
    const id = Math.floor(Math.random() * 500).toString();
    dispatch(
      actInsertPost({
        id: id,
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
  };
  return (
    // <Loading loading={loading} error={error}>
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
      <Button variant="primary" type="submit">
        {loading === "idle" || loading === "pending" ? (
          <>
            <Spinner animation="border" size="sm"></Spinner> Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </Form>
    // </Loading>
  );
};
const ProtectAddPost = WithGuard(AddPost);
export default ProtectAddPost;
