import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarsList />} />
        <Route path="add" element={<AddCar />} />
        <Route path="edit/:id" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
