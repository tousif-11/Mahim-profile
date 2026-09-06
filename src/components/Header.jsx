import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `transition:colors duration-100 ${
      isActive
        ? "text-blue-400 font-bold border-lg rounded-lg bg-blue-400/15 border-1 border-blue-400 px-2 py-1"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <nav className="border-b bg-pink-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex items-center justify-center min-h-16">

          {/* Navbar */}
          <ul className="flex items-center justify-center gap-9 font-semibold text-sm">
            
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/achievement" className={navLinkClass}>
                Achievement
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;