import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/starbuckslogo.webp";
import Cart from "../../assets/cart.svg";
import { memo } from "react";
import { Link } from "react-router-dom";
function Header({ length = 0, cartToggle = () => {} }) {
  return (
    <Navbar className="" color="dark" dark>
      <Link to="/">
        <NavbarBrand>
        <img
          alt="starbucks"
          src={logo}
          style={{
            height: 60,
            width: 60,
          }}
        />
    </NavbarBrand>
      </Link>
      <Link to="/cart">
      <div className="cart">
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
      </Link>
    </Navbar>
  );
}

export default memo(Header);

Header.propTypes = {
  length: Number,
  cartToggle: Function,
};
