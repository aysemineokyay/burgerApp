import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-600 px-5 py-2">
      <div className="">
        <img src={BurgerLogo} className="w-30 h-20" alt="" />
      </div>
      <div className="flex gap-20 text-white px-20 ">
        <Link to="/" className="hover:text-slate-200">
          Anasayfa
        </Link>
        <Link to="/menu" className="hover:text-slate-200">
          Menu
        </Link>
        <Link to="/aboutUs" className="hover:text-slate-200">
          Hakkımızda
        </Link>
        <Link to="/contact" className="hover:text-slate-200">
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
