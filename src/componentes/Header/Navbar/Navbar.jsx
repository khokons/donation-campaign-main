import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <div className="px-5">
      <nav className="lg:flex md:flex justify-between items-center px-10 lg:px-0 lg:py-5">
        <Logo></Logo>
        <ul className="flex gap-6 mt-6 lg:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
           Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
           Statistics
            </NavLink>
          </li>


        </ul>
      </nav>


    </div>
  );
};

export default Navbar;
