import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/context";

export default function Navbar() {
  const { user } = useContext(MyContext);
  return (
    <nav class="fixed top-0 right-10">
      <ul>
        <li>
          {" "}
          <NavLink to="/search"> Search </NavLink>{" "}
        </li>

        <li>
          {" "}
          <NavLink to="/"> Home </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/artists"> Artists </NavLink>
        </li>
        <li>
          <NavLink to="/albums"> Albums </NavLink>
        </li>
        {/* // if user is admin show the crate artist link */}
        {user ? (
          <li>
            <NavLink to="/createartist"> Create Artist </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login"> Login </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
