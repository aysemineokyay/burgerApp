/* eslint-disable react/prop-types */
const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center border rounded-md pb-5 shadow-lg hover:scale-105 cursor-pointer ">
      <img src={image} className="w-[400px] h-[400px] " alt="" />
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="text-md">{content}</p>
      <p>{price} ₺</p>
    </div>
  );
};

export default MenuItem;
