const MenuItem = ({ title, price, img }) => {
  return (
    <div className="max-w-3xl mx-auto flex justify-center items-center flex-col py-2.5 rounded-lg basis-[40%] sm:basis-1/3 shadow-xl space-y-2">
      <img
        src={img}
        alt={title}
        className="h-40 object-contain sm:object-cover md:h-full rounded-md w-full"
      />
      <h1 className="font-semibold text-center">{title}</h1>
      <h1 className="font-semibold text-center">$ {price}</h1>
    </div>
  );
};

export default MenuItem;
