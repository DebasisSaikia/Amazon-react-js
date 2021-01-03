import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase/firebase";

const Header = () => {
 const [{cart,user}]= useStateValue();

const login=()=>{
  if(user){
    auth.signOut();
  }
}

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.postimg.cc/wTqQ55Dh/logo2.png"
          alt="logo"
        />
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_inputBox"
          placeholder="Mobile,Summer wear,HouseHolds etc...."
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* Right nav */}

      <div className="header_right">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_option1">Hello {user?.email}</span>
            <span className="header_option2">{user?'Sign Out':'Sign in'}</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option1">Amazon</span>
            <span className="header_option2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionCart">
            <ShoppingCartIcon className="text-warning" />
            <span className="header_option2 header_cartCount ">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
