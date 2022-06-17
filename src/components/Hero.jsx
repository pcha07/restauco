import Food from "../assets/asianfood.jpeg";
import Dining from "../assets/dining.jpeg";

const Hero = () => {
  return (
    <section id="menu" className="flex flex-col lg:flex-row items-center justify-evenly w-full lg:justify-between bg-orange-100 py-3 mt-14">
      <div className="flex flex-col items-center justify-center p-2 basis-[45%]">
        <h1 className="text-black font-bold text-4xl">Get Comfy</h1>
        <h1 className="text-black font-bold text-3xl">Order In</h1>

        <img
          src={Food}
          alt=""
          className="w-[90%] object-contain mt-4 rounded-lg"
        />
        <button className="mt-10 bg-black p-3 text-white font-semibold cursor-pointer hover:text-red-500 hover:scale-105 transition ease-in-out rounded-lg w-[75%]">
          Order Online
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-2 basis-[45%]">
        <h1 className="text-black font-bold text-4xl">Experience Dining</h1>
        <h1 className="text-black font-bold text-3xl">At its finest</h1>

        <img
          src={Dining}
          alt=""
          className="w-[90%] object-contain mt-4 rounded-lg"
        />
        <button className="mt-10 bg-black p-3 text-white font-semibold cursor-pointer hover:text-red-500 hover:scale-105 transition ease-in-out rounded-lg w-[75%]">
          Reserve Table
        </button>
      </div>
    </section>
  );
};

export default Hero;
