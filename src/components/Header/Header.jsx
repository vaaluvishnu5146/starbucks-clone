import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/starbuckslogo.webp";
import Cart from "../../assets/cart.svg";
import { memo } from "react";

function Header({ length = 0, cartToggle = () => {} }) {
  return (
    <Navbar className="" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="starbucks"
          src={logo}
          style={{
            height: 60,
            width: 60,
          }}
        />
      </NavbarBrand>
      <div className="cart" onClick={cartToggle}>
        <span className="count-bubble text-center">{length}</span>
        <img
          alt="cart"
          src={Cart}
          style={{
            height: 35,
            width: 35,
          }}
        />
      </div>
    </Navbar>
  );
}

export default memo(Header);

Header.propTypes = {
  length: Number,
  cartToggle: Function,
};
