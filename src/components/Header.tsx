import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authLogout } from "../app/auth/authSlice";
import { cleanPosts } from "../app/posts/postsSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(authLogout());
    dispatch(cleanPosts());
  };
  return (
    <>
      <h1>Posts APP</h1>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-5"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Nav>
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="post/add">
              Add Post
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="flex justify-content-end"
          >
            <Nav className="flex justify-content-end">
              {!accessToken ? (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={`Welcome ${user?.firstName}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
