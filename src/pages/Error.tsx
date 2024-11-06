import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

interface RouteError {
  statusText: string;
  message: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button
              variant="link"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
