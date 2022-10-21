const Four = () => {
  return (
    <div className="w-[90%] md:w-[350px] h-auto bg-eth-card p-5 rounded-xl">
      <div className=" relative ">
        <img className="rounded-xl hover:opacity-50" src="/eth.jpg" alt="" />
        <div className="flex opacity-0 overflow-hidden rounded-lg hover:opacity-100 items-center justify-center absolute top-0 w-[100%] h-[100%] bg-[#137e776c]">
          <img src="/icon-view.svg" alt="" />
        </div>
      </div>

      <div className="py-5 flex flex-col space-y-5">
        <div className="text-white hover:text-cyan-400 font-outfit text-3xl font-[700] tracking-wide">
          Equilibrium #3429
        </div>
        <div className="font-[400] font-outfit text-lg tracking-wide text-slate-400">
          Our Equilibrium collection promotes balance and calm
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <span>
              <img className="scale-150" src="/icon-ethereum.svg" alt="" />
            </span>
            <span className=" text-cyan-500 font-outfit text-xl font-extrabold">
              0.041 ETH
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <img className="scale-150" src="/eth-clock.svg" alt="" />
            </span>
            <span className="text-slate-400 text-xl">3 days left</span>
          </div>
        </div>

        <div className="h-[1px] bg-slate-700"></div>

        {/* footer section */}
        <div className="flex items-center gap-5">
          <div>
            <img
              className="w-12 h-12 border rounded-full"
              src="/eth-avatar.png"
              alt=""
            />
          </div>
          <div className="text-blue-300  text-lg tracking-wide">
            <span>Creation of </span>
            <span className="text-white hover:text-cyan-400">Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
