import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-start justify-end bg-[url('./assets/banneryeni.jpg')] bg-no-repeat bg-center bg-cover w-full h-[90vh] ">
      <div className="bg-red-600 p-2 rounded-lg text-white m-10 ">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
