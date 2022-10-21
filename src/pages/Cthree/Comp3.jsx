const Comp3 = () => {
  return (
    <div className="w-[90%] md:w-[350px] bg-white h-auto rounded-2xl p-5 ">
      <div>
        <img src="../../../public/scnner.png" className="rounded-2xl" alt="" />
      </div>
      <div className="py-7 px-2 flex flex-col space-y-5">
        <div className="font-[700] text-center text-slate-700 text-2xl font-outfit">
          Improve your front-end skills by building projects
        </div>

        <div className="font-outfit font-[400] text-center text-lg text-slate-500">
          Scan the QR code to visit Frontend Mentor ad take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default Comp3;
