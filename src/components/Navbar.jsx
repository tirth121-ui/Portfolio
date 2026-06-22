import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#07111f] border border-slate-700 rounded-2xl mx-5 mt-5 px-8 py-4">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Port<span className="text-blue-500">Folio.</span>
        </h1>

        <ul className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Education
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Contact
          </NavLink>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;