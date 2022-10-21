import { useEffect, useState } from "react";
const getSize = () => {
  const { innerWidth, innerHeight } = window;

  return { innerWidth, innerHeight };
};
const OneCard = () => {
  const [dimension, setDimension] = useState(getSize());
  useEffect(() => {
    const updateDimention = () => {
      setDimension(getSize());
    };

    window.addEventListener("resize", updateDimention);

    return () => {
      window.removeEventListener("resize", updateDimention);
    };
  }, []);
  return (
    <div className="w-[90%] md:w-[700px] md:flex h-auto bg-white rounded-2xl overflow-hidden">
      <div>
        <img
          className="h-full"
          src={
            dimension.innerWidth > 500
              ? "/image-product-desktop.jpg"
              : "/image-product-mobile.jpg"
          }
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col space-y-5">
        <div className="font-mont uppercase text-slate-500 tracking-[10px]">
          Perfume
        </div>

        <div className="font-fraun text-4xl">
          Gabrielle Essence Eau De Parfum
        </div>

        <div className="font-mont text-lg text-slate-400">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className="flex gap-5 items-center">
          <span className="font-fraun text-3xl text-teal-500">$149.99</span>
          <del className="font-mont text-slate-500">$169.99</del>
        </div>

        <button className="bg-teal-700 hover:bg-teal-800 flex items-center justify-center gap-4 p-4 rounded-full">
          <span>
            <img src="/icon-cart.svg" alt="" />
          </span>
          <span className="font-bold font-mont text-white text-xl">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default OneCard;
