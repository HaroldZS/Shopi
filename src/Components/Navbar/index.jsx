import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShopiCartContext } from "../../Context";

const Navbar = () => {
  const { count, setSearchByCategory, signOut, setSignOut } =
    useContext(ShopiCartContext);
  const activeStyle = "underline underline-offset-4";
  const activeLink = ({ isActive }) => (isActive ? activeStyle : undefined);

  const handleSignOut = () => {
    localStorage.setItem("sign-out", JSON.stringify(true));
    setSignOut(true);
  };

  const parsedSignOut = JSON.parse(localStorage.getItem("sign-out"));
  const isUserSignOut = signOut || parsedSignOut;

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory()}
            className={activeLink}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => setSearchByCategory("clothes")}
            className={activeLink}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory("electronics")}
            className={activeLink}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => setSearchByCategory("furniture")}
            className={activeLink}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => setSearchByCategory("toys")}
            className={activeLink}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/other"
            onClick={() => setSearchByCategory("others")}
            className={activeLink}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        {isUserSignOut ? (
          <li>
            <NavLink
              to="/sign-in"
              className={activeLink}
              onClick={() => handleSignOut()}
            >
              Sign in
            </NavLink>
          </li>
        ) : (
          <>
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
              <NavLink
                to="/sign-in"
                className={activeLink}
                onClick={() => handleSignOut()}
              >
                Sign out
              </NavLink>
            </li>
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
              <div>{count}</div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
