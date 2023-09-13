import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopiCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShopiCartContext);
  const activeStyle = "underline underline-offset-4";
  const activeLink = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={activeLink}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={activeLink}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={activeLink}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={activeLink}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={activeLink}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={activeLink}>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">haroldzs@gmail.com</li>
        <li>
          <NavLink to="/my-orders" className={activeLink}>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={activeLink}>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={activeLink}>
            Sign In
          </NavLink>
        </li>
        <li>🛒 {context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
