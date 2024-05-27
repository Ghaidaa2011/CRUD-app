import { addPostSchema, addPostType } from "../validations/addPostSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/form/Input";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actInsertPost } from "../app/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import WithGuard from "../utils/WithGuard";
import { Form, Button } from "react-bootstrap";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.posts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addPostType>({
    mode: "onBlur",
    resolver: zodResolver(addPostSchema),
  });
  const submitForm: SubmitHandler<addPostType> = (post) =>
    dispatch(
      actInsertPost({
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
  );
};
const ProtectAddPost = WithGuard(AddPost);
export default ProtectAddPost;
