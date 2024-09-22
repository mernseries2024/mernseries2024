import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
