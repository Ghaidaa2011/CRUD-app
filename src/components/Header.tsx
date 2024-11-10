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
      <h1>CRUD APP</h1>
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
    // <div className="header">
    //   <h1>CRUD APP</h1>
    //   <ul className="nav">
    //     <li>
    //       <NavLink to="/" end>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="post/add">Add Post</NavLink>
    //     </li>
    //     {!accessToken ? (
    //       <>
    //         <li className="login">
    //           <Link to="/login">Login</Link>
    //         </li>
    //         <li className="register">
    //           <Link to="/signup">Signup</Link>
    //         </li>
    //       </>
    //     ) : (
    //       <>
    //         <li>
    //           <NavDropdown title="Welcome" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
    //           </NavDropdown>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </div>
  );
};

export default Header;
