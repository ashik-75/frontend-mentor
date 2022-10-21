const Rating = ({ handleActive }) => {
  return (
    <div className="w-[100%] md:w-[400px] flex flex-col space-y-7 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 h-1/2 p-5 md:p-7">
      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
        <img src="../../../public/icon-star.svg" alt="" />
      </div>
      <div className="text-white text-4xl font-bold font-overpas">
        How did we do?
      </div>
      <div className="text-slate-400 font-overpas text-md">
        Please let us know how we did with your support request.All feddback is
        appreciate to help us improve our offering!
      </div>
      <div className="flex justify-between">
        <button className="bg-slate-700 hover:bg-slate-200 hover:text-slate-700 text-slate-400 px-5 font-bold py-[12px] rounded-full flex items-center justify-center">
          1
        </button>
        <button className="bg-slate-700 hover:bg-slate-200 hover:text-slate-700 text-slate-400 px-5 font-bold py-[12px] rounded-full flex items-center justify-center">
          2
        </button>
        <button className="bg-slate-700 hover:bg-slate-200 hover:text-slate-700 text-slate-400 px-5 font-bold py-[12px] rounded-full flex items-center justify-center">
          3
        </button>
        <button className="bg-slate-700 hover:bg-slate-200 hover:text-slate-700 text-slate-400 px-5 font-bold py-[12px] rounded-full flex items-center justify-center">
          4
        </button>
        <button className="bg-slate-700 hover:bg-slate-200 hover:text-slate-700 text-slate-400 px-5 font-bold py-[12px] rounded-full flex items-center justify-center">
          5
        </button>
      </div>

      <button
        onClick={handleActive}
        className=" bg-orange-500 hover:bg-slate-200 hover:text-slate-700 p-4 uppercase text-white font-bold font-overpas tracking-widest rounded-full"
      >
        submit
      </button>
    </div>
  );
};

export default Rating;
