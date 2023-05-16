import Login from "./Login.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* here we will have the icon first */}
      <div className="inputInHomepage">
        <button>Search</button>
      </div>

      <div className="navigationIntoOtherPages">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
