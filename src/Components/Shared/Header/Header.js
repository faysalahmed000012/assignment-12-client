import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import noUser from "../../../assets/image/no-user-image-icon-3.jpg";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const navItems = (
    <>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/myPortfolio">My Portfolio</Link>
      </li>
    </>
  );
  return (
    <div className=" mx-3">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-y-2"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            ElectroFirm
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 gap-x-2">{navItems}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={user?.user?.photoURL || noUser} alt="" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-y-2"
              >
                <li>
                  <button
                    onClick={() => navigate("/myprofile")}
                    class="justify-between"
                  >
                    Profile
                  </button>
                </li>

                <li>
                  <button onClick={() => signOut(auth)}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn uppercase"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
