import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import car1 from "../../assets/imgs/Audi.png";
import bg from "../../assets/imgs/Vector.png";

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCarDetails = async () => {
    try {
      const response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
      setCar(response.data.Car);
      console.log(car);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching car details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarDetails();
  }, [id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!car) {
    return <p>Car details not found.</p>;
  }

  return (
    <section className="product-section py-5">
      <div className="container">
        <div className="row">
          <div className="breadcrumb d-flex align-items-center mt-5 mb-3 ms-4">
            <Link to="/" className="breadcrumb-link text-decoration-none me-2">
              <h4 className="text-primary">Home</h4>
            </Link>
            <Link
              to="/AllCars"
              className="breadcrumb-link text-decoration-none me-2 "
            >
              <h4 className="text-muted"> / All Cars</h4>
            </Link>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img src={car1} alt="Car" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <div className="">
              <button
                type="button"
                className=""
                style={{
                  width: "300px",
                  padding: "16px",
                  marginTop: "20px",
                  marginBottom: "40px",
                  backgroundColor: "#1572D31A", 
                  color: "#1572D3", 
                  border: "none", 
                  borderRadius: "8px", 
                  fontWeight: "bold", 
                  fontSize: "16px",
                  cursor: "pointer", 
                  transition: "background-color 0.3s ease", 
                }}
              >
                POPULAR RENTAL DEALS
              </button>

              <h1 className="">Most popular cars rental deals</h1>
            </div>
            <p>
              <strong>Name : </strong>
              {car.car}
            </p>
            <p>
              <strong>Price:</strong> {car.price}
            </p>
            <p>
              <strong>Car Color :</strong> {car.car_color}
            </p>
            <p>
              <strong>Model:</strong> {car.car_model}
            </p>
            <p>
              <strong>Description:</strong> This is a great car with amazing
              features and excellent performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCar;
