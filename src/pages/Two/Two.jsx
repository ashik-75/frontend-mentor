import { useState } from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";

const Two = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(true);
  };
  return (
    <div className="h-[100vh] p-5 flex items-center justify-center w-[100vw] bg-slate-600">
      {active ? <Thanks /> : <Rating handleActive={handleActive} />}
    </div>
  );
};

export default Two;
