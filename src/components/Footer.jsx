import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="flex flex-col bg-red-600 p-5 items-center gap-5">
      <div className="flex gap-10 text-white">
        <FacebookIcon viewBox="0 0 24 24" className="hover:scale-150 " />
        <InstagramIcon className="hover:scale-150" />
        <TwitterIcon className="hover:scale-150 " />
      </div>
      <p className="text-white">Tüm hakları saklıdır | BurgerYiyelim</p>
    </div>
  );
};

export default Footer;
