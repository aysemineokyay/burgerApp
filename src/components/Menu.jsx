import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center my-10">Burgerlerimiz</h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 mb-5">
        {Data.map((item, index) => {
          return (
            <MenuItem
              key={index}
              image={item.image}
              name={item.name}
              content={item.content}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
