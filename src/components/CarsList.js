import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const response = await axios.get(
      "https://rent-cars-api.herokuapp.com/admin/car"
    );
    setCars(response.data);
    console.log(response.data);
  };

  const deleteCars = async(carId) => {
    try {
      await axios.delete(`https://rent-cars-api.herokuapp.com/admin/car/${carId}`);
      getCars();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <hr/>
      <div className="columns is-multiline mt-2">
        {cars.map((car) => (
          <div className="column is-one-quarter" key={car.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={car.image} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{car.name}</p>
                    <p className="subtitle is-6">Rp.{car.price}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${car.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteCars(car.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
