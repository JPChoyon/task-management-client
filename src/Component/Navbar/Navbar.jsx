import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>

      <NavLink to={"/"}>
        <li>
          <a>Membership</a>
        </li>
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <a>Contact Us</a>
        </li>
      </NavLink>
      <NavLink to={"/dashboard"}>
        <li>
          <a>Dashboard</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#ffbaba]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="font-bold text-xl">
            T M S
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
