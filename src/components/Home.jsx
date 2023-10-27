import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-start justify-end bg-[url('./assets/banneryeni.jpg')] bg-no-repeat bg-center bg-cover w-full h-[90vh] ">
      <div className="bg-red-600 hover:cursor-pointer py-2 px-5 rounded-lg text-white m-10  before:ease relative overflow-hidden border border-red-600  shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-red-600 hover:before:-translate-x-40">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
