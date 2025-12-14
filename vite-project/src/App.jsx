import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Lyaut from "./Lyaut/Lyaut";
import Shop from "./components/Shop";
import PlantCare from "./components/PlantCare";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lyaut/>}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="PlantCare" element={<PlantCare />} />
          <Route path="Blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
