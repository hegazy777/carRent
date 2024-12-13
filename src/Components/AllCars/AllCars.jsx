import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import icon1 from "../../assets/imgs/user.png";
import icon2 from "../../assets/imgs/cardoor.png";
import icon3 from "../../assets/imgs/22.png";
import icon4 from "../../assets/imgs/air.png";
import car4 from "../../assets/imgs/image11.png";

const AllCars = () => {
  const [cars, setCars] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 8;

  // Pagination logic
  const pageCount = Math.ceil(cars.length / carsPerPage);
  const offset = currentPage * carsPerPage;
  const currentCars = cars.slice(offset, offset + carsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getCars = async () => {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars/");
      setCars(response.data.cars);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div className="breadcrumb d-flex align-items-center mt-5 mb-3 ms-4">
        <Link to="/" className="breadcrumb-link text-decoration-none me-2">
          <h4 className="text-primary">Home</h4>
        </Link>
        <h4 className="text-muted">/ All Cars</h4>
      </div>
      <div className="section m-t-30 mb-5 mt-20">
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
          <h1 className="text-align-center">Most popular cars rental deals</h1>
        </div>
      </div>

      <div className="section">
        <div className="row">
          {currentCars.map((cars, index) => (
            <div className="col-md-3 m-" key={index}>
              <div
                className=""
                style={{
                  width: "18rem",
                  padding: "24px",
                  boxShadow: "0px 12px 24px #104C8B29",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={car4}
                  className="card-img-top"
                  alt="Car"
                />
                <div className="cardTiltle mt-4 mb-1">
                  <h3>{cars.car}</h3>
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

        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"} 
          />
        </div>
      </div>
    </>
  );
};

export default AllCars;


