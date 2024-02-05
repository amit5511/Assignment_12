import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { UserCircleIcon, LoginIcon, LogoutIcon, HomeIcon, ShoppingCartIcon, PlusIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const { isLoggedIn, isAdmin, LogoutUser } = useAuth();

  return (
    <div className="bg-blue-400">
      <div className="container mx-auto flex justify-between py-4 px-2">
        <div>
          <NavLink to="/" className="text-white font-bold">SansMart</NavLink>
        </div>

        <nav>
          <ul className="flex gap-5">
            {/* Conditional rendering of AddItem option for admins */}
            {isLoggedIn && isAdmin && (
              <li className="hidden sm:inline">
                <NavLink to="/addproduct" className="text-white flex items-center">
                  <PlusIcon className="h-5 w-5" />
                  <span className="ml-1">AddItem</span>
                </NavLink>
              </li>
            )}

            {/* Always visible options */}
            <li className="hidden sm:inline">
              <NavLink to="/" className="text-white">Home</NavLink>
            </li>
            <li className="hidden sm:inline">
              <NavLink to="#" className="text-white">Cart</NavLink>
            </li>
            <li className="hidden sm:inline">
              <NavLink to="/addproduct" className="text-white">AddItem</NavLink>
            </li>

            {/* Conditional rendering of Logout button when logged in */}
            {isLoggedIn && (
              <li className="hidden sm:inline">
                <button onClick={LogoutUser} className="text-white flex items-center">
                  <LogoutIcon className="h-5 w-5" />
                  <span className="ml-1">Logout</span>
                </button>
              </li>
            )}

            {/* Conditional rendering of Login and Register links when logged out */}
            {!isLoggedIn && (
              <>
                <li className="hidden sm:inline">
                  <NavLink to="/login" className="text-white flex items-center">
                    <LoginIcon className="h-5 w-5" />
                    <span className="ml-1">Login</span>
                  </NavLink>
                </li>
                <li className="hidden sm:inline">
                  <NavLink to="/register" className="text-white flex items-center">
                    <UserCircleIcon className="h-5 w-5" />
                    <span className="ml-1">Register</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Icons for small screens */}
            {isLoggedIn && (
              <li className="sm:hidden">
                <NavLink to="/" className="text-white flex items-center">
                  <HomeIcon className="h-5 w-5" />
                </NavLink>
              </li>
            )}
            <li className="sm:hidden">
              <NavLink to="/cart" className="text-white flex items-center">
                <ShoppingCartIcon className="h-5 w-5" />
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className="sm:hidden">
                <NavLink to="/addproduct" className="text-white flex items-center">
                  <PlusIcon className="h-5 w-5" />
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="sm:hidden">
                <NavLink to="/" className="text-white flex items-center">
                  <LogoutIcon className="h-5 w-5" />
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className="sm:hidden">
                <NavLink to="/login" className="text-white flex items-center">
                  <LoginIcon className="h-5 w-5" />
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className="sm:hidden">
                <NavLink to="/register" className="text-white flex items-center">
                  <UserCircleIcon className="h-5 w-5" />
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
