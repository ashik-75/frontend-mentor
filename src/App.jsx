import { Route, Routes } from "react-router-dom";
import Cfive from "./pages/Cfive/Cfive";
import Cfour from "./pages/Cfour/Cfour";
import Cthree from "./pages/Cthree/Cthree";
import Homepage from "./pages/Homepage";
import One from "./pages/One/One";
import Two from "./pages/Two/Two";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mentor/1" element={<One />} />
        <Route path="/mentor/2" element={<Two />} />
        <Route path="/mentor/3" element={<Cthree />} />
        <Route path="/mentor/4" element={<Cfour />} />
        <Route path="/mentor/5" element={<Cfive />} />
      </Routes>
    </>
  );
};

export default App;
