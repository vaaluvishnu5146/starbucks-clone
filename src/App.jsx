import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/404/404";
import Posts from "./pages/Posts/Posts";

function App() {

  function renderLinks() {
    return <ul>
    <li>
        <Link to={'/login'}>Login</Link>
    </li>
    <li>
        <Link to={'/signup'}>Signup</Link>
    </li>
    <li>
        <Link to={'/'}>Shop</Link>
    </li>
    <li>
        <Link to={'/cart'}>Cart</Link>
    </li>
   </ul>
  } 

  return (
     <div>
      <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={() => <Cart />} />
            <Route path="/posts" Component={() => <Posts />} />
            <Route path="*" Component={PageNotFound} />
    </Routes>
     </div>
  );
}

export default App;
