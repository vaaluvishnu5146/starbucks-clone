import Header from "../../components/Header/Header";
import Logo from '../../assets/starbuckslogo.webp';

export default function PageNotFound() {
  return (
    <div>
    <Header />
    <img className="logo" src={Logo} alt="starbucks logo" />
    <h4>Page Not Found</h4>
    </div>
  )
}
