import { MenuItem } from "../components/MenuItem";
import { Data } from "../helpers/Data";

const Menu = () => {
  return (
    <div>
      <h1 className="text-lg">Burgerlerimiz</h1>
      <div className="flex flex-wrap">
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
