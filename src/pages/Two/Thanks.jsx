const Thanks = () => {
  return (
    <div className="w-[100%] md:w-[400px]  flex flex-col justify-center items-center space-y-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 h-1/2 p-7">
      <div className="">
        <img src="../../../public/thank.svg" alt="" />
      </div>
      <button className="bg-slate-700 px-4 text-md tracking-wide text-orange-500 py-2 rounded-full">
        You selected 4 out of 5
      </button>
      <div className="text-white text-4xl font-bold font-overpas">
        Thank you!
      </div>
      <div className="text-slate-400 font-overpas text-md text-center">
        We appreciate you taking the time to give a rating.if you ever need more
        support,don't hesitate to get in touch!{" "}
      </div>
    </div>
  );
};

export default Thanks;
