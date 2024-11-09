import { Navigate } from "react-router-dom";
import useLogin from "../hooks/use-Login";
import FormInput from "../components/ui/FormInput";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>User Login</h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              You need to log in to view this content
            </Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please log in.
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <FormInput
              label="Email"
              name="email"
              register={register}
              error={formErrors.email?.message}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              register={register}
              error={formErrors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Login;
