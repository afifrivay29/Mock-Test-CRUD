import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<CarsList />} />
        <Route path="/admin/car" element={<AddCar />} />
        <Route path="/admin/car/:id" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
