import { useEffect, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  const handleToggle = () => {
    if (toggle) {
      localStorage.setItem("dark-mode", false);
    } else {
      localStorage.setItem("dark-mode", true);
    }

    setToggle((dt) => !dt);
  };

  useEffect(() => {
    console.log({ toggle, local: localStorage.getItem("dark-mode") });
    if (JSON.parse(localStorage.getItem("dark-mode"))) {
      console.log("dark mode");
      document.documentElement.classList.add("dark");
    } else {
      console.log("light mode");
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <div className="p-5 bg-pink-200 flex justify-between dark:bg-cyan-700">
      <div>toggle</div>

      <div>
        <button
          onClick={handleToggle}
          className="bg-teal-700 font-bold tracking-wider px-6 py-2 rounded-md text-white"
        >
          {toggle ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
