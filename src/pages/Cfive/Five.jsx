const Five = () => {
  return (
    <div className="bg-white w-[90%] md:w-[400px] overflow-hidden rounded-xl">
      <div>
        <img src="/illustration-hero.svg" alt="" />
        {/* <img src="../../../public/pattern-background-mobile.svg" alt="" /> */}
      </div>

      <div className="p-5 py-10 flex flex-col space-y-5 text-center">
        <div className="font-bold font-outfit text-2xl">Order Summary</div>

        <div className="font-outfit text-lg text-slate-600">
          you can now listen millions of songs,audiobooks and podcast on any
          device anywhere you like!
        </div>

        <div className="flex font-outfit justify-between p-3 bg-slate-100 items-center rounded-full">
          <div>
            <img src="/icon-music.svg" alt="" />
          </div>
          <div>
            <div>Annual Plan</div>
            <div>$59.99/year</div>
          </div>
          <div>
            <a
              className=" text-blue-600 font-bold underline underline-offset-2 decoration-2 decoration-sky-600"
              href="#"
            >
              Change
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <button className="bg-blue-600 text-xl shadow-lg rounded-full text-white p-4 font-bold font-outfit">
            Proceed to Payment
          </button>
          <button className=" font-outfit font-bold text-xl tracking-wide text-slate-600">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Five;
