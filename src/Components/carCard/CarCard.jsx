import React from "react";
import car1 from "../../assets/imgs/image12.png";
import car2 from "../../assets/imgs/Audi1.png";
import car3 from "../../assets/imgs/image3.png";
import car4 from "../../assets/imgs/image11.png";
import icon1 from "../../assets/imgs/user.png";
import icon2 from "../../assets/imgs/cardoor.png";
import icon3 from "../../assets/imgs/22.png";
import icon4 from "../../assets/imgs/air.png";
import card1 from "../../assets/imgs/card1.png";
import card2 from "../../assets/imgs/card2.png";
import card3 from "../../assets/imgs/card3.png";

import HomeSection from "../HeroSection/HeroSection";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const CarCard = () => {
  const carImages = [car1, car2, car3, car4];
  return (
    <>
      <Navbar />
      <HomeSection />
      <div className="section m-t-30 mb-5 mt-5">
        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search a car"
              aria-label="Search a car"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container text-center">
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
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1572D33A")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1572D31A")}
          >
            POPULAR RENTAL DEALS
          </button>
        </div>
      </div>

      <div className="section">
        <div className="row">
          {carImages.map((image, index) => (
            <div className="col-md-3 m-" key={index}>
              <div
                style={{
                  width: "18rem",
                  padding: "24px",
                  boxShadow: "0px 12px 24px #104C8B29",
                  borderRadius: "15px",
                }}
              >
                <img src={image} className="card-img-top" />
                <div className="cardTitle mt-4 mb-1">
                  <h3>Car Name</h3>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-left mb-3 ">
                    <span className="me-1">⭐4.5 </span>
                    <span className="text-muted">(255 Reviews)</span>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="me-4">
                        <img
                          src={icon1}
                          className="align-items-center"
                          alt="Car"
                        />
                        Passenger
                      </span>
                      <span>
                        <img
                          src={icon3}
                          className="align-items-center"
                          alt="Car"
                        />
                        Auto
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="me-4">
                        <img
                          src={icon4}
                          className="align-items-center"
                          alt="Car"
                        />
                        Air Conditioning
                      </span>
                      <span>
                        <img
                          src={icon2}
                          className="align-items-center"
                          alt="Car"
                        />
                        2 Doors
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <h5 className="mb-0">Price</h5>
                    <h5 className="mb-0">
                      <strong>$2,300</strong> /day
                    </h5>
                  </div>
                  <div className="align-items-center">
                    <button className="btn btn-primary mt-4 w-100">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bt-more w-20 d-flex align-item-content justify-content-center mb-5">
          <Link to="/AllCars">
            <button className="btn btn-primary mt-4">Show all vehicles</button>
          </Link>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row bt-more w-20 d-flex align-item-content justify-content-center mb-5">
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
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#1572D33A")
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1572D31A")}
            >
              POPULAR RENTAL DEALS
            </button>

            <h1
              className="bt-more w-20 d-flex align-item-content justify-content-center mb-2"
              style={{
                fontSize: "38px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
              }}
            >
              Rent with following 3 working steps
            </h1>
          </div>
        </div>
        <div className="container  mb-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className=" h-100 text-center">
                <img
                  src={card1}
                  className="card-img-top w-50 my-5"
                  alt="Card Image 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Book your car</h5>
                  <p className="card-text">
                    Book your car and we will deliver it directly to you
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" h-100 text-center">
                <img
                  src={card2}
                  className="card-img-top w-50 my-5"
                  alt="Card Image 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Choose location</h5>
                  <p className="card-text">
                    Choose your and find your best car
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" h-100 text-center">
                <img
                  src={card3}
                  className="card-img-top w-50 my-5"
                  alt="Card Image 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Pick-up date</h5>
                  <p className="card-text">
                    Select your pick up date and time to book your car
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default CarCard;
