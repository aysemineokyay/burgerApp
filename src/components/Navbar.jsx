import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-600 px-5 py-2">
      <div className="">
        <img src={BurgerLogo} className="w-30 h-20" alt="" />
      </div>
      <div className="flex gap-10  text-white">
        <Link to="/">Anasayfa</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/aboutUs">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
};

export default Navbar;
