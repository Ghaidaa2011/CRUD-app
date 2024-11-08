import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="post/add">Add Post</NavLink>
        </li>
        <li className="login">
          <Link to="post/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
