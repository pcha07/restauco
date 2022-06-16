import Wraps from "../assets/wraps.jpg";
import Bowls from "../assets/bowl-category.jpg";
import Drinks from "../assets/drinks-category.jpg";
import { GiSandwich } from "react-icons/gi";
import { useState } from "react";
import { sampleData } from "../data/data";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("wraps");
  console.log(menuCategory);

  return (
    <section className="w-full bg-white flex flex-col items-center mt-16 space-y-6">
      <div className="flex flex-col items-center justify-center space-y-2 w-[70%]">
        <h1 className="text-black text-3xl font-bold text-center">
          Best way to eat healthy food
        </h1>
        <p className="text-center">
          Our menu is filled with healthy, yet mouth watering dishes
        </p>
      </div>

      {/* Menu categories */}
      <div className="max-w-[85%] mx-auto flex  sm:flex-nowrap items-center justify-center space-x-4 p-2.5">
        {/* Wraps */}
        <div
          className={`rounded-lg flex flex-col items-center justify-center basis-[30%] shadow-xl space-y-2 cursor-pointer hover:scale-105 transition ease-in-out p-2 ${
            menuCategory === "wraps" && "bg-black text-white"
          }`}
          onClick={() => setMenuCategory("wraps")}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={Wraps}
              alt="sandwiches"
              className="rounded-md w-full object-contain"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="font-semibold text-lg">Wraps</h1>
          </div>
        </div>
        {/* Bowls */}
        <div
          className={`rounded-lg flex flex-col items-center justify-center basis-[30%] shadow-xl space-y-2 cursor-pointer hover:scale-105 transition ease-in-out p-2 ${
            menuCategory === "bowls" && "bg-black text-white"
          }`}
          onClick={() => setMenuCategory("bowls")}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={Bowls}
              alt="sandwiches"
              className="rounded-md w-full object-contain"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="font-semibold text-lg">Bowls</h1>
          </div>
        </div>
        {/* Drinks */}
        <div
          className={`rounded-lg flex flex-col items-center justify-start basis-[30%] shadow-xl space-y-2 cursor-pointer hover:scale-105 transition ease-in-out  p-2 ${
            menuCategory === "drinks" && "bg-black text-white"
          }`}
          onClick={() => setMenuCategory("drinks")}
        >
          <div className="flex items-center justify-center">
            <img
              src={Drinks}
              alt="drinks"
              className="rounded-md w-full object-contain"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="font-semibold text-lg">Drinks</h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-start items-start sm:items-stretch flex-wrap p-2.5 sm:gap-3">
        {sampleData.map(
          (item) =>
            item.category === menuCategory && (
              <MenuItem
                key={item.title}
                title={item.title}
                price={item.price}
                img={item.img}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Menu;
