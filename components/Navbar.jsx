import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavItem from "./NavItem";

import { Cart } from "./";
import { useStateContext } from "../context/stateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const MENU_LIST = [
    { text: "HOME", href: "/" },
    { text: "HEADPHONES", href: "/product/Headphones" },
    { text: "SPEAKER", href: "/product/speaker" },
    { text: "WATCH", href: "/product/iwatch" },
  ];

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link href={"/"}>
          <a>
            <h1 className="logo">AudioStore</h1>
          </a>
        </Link>
        <div className="navbar-container">
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
