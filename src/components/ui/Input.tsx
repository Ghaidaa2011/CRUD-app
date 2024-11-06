import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  type?: string;
  register: UseFormRegister<TFieldValues>;
  error?: string;
  as?: React.ElementType;
  rows?: number;
};
const Input = <TFieldValues extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  as,
  rows,
}: TInputProps<TFieldValues>) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      {/* Title */}
      <Form.Label>{label}</Form.Label>
      <Form.Control
        //"text"
        type={type}
        //register //"title"
        {...register(name)}
        //errors.title?.message
        isInvalid={error ? true : false}
        as={as}
        rows={rows}
      />
      <Form.Control.Feedback type="invalid">
        {/* errors.title?.message */}
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
export default Input;
