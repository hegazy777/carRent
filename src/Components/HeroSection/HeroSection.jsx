import React from 'react';
import car4 from "../../assets/imgs/car21.png";
import Anapp from "../../assets/imgs/image 2.png";
import AppApp from "../../assets/imgs/image 3.png";
import fram from "../../assets/imgs/Frame.png";

const HomeSection = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
       
        <div className="col-md-6">
          <h2>Find, book and  <br></br>rent a car Easily</h2>
          <p>
          Get a car wherever and whenever you need it with your IOS and Android device.</p>
          <div className="d-flex">
            <img
              src={Anapp}
              alt="Image 1"
              className="img-fluid me-3"
            />
            <img
              src={AppApp}
              alt="Image 2"
              className="img-fluid"
            />
          </div>
        </div>

        
        <div className="col-md-6"  style={{backgroundImage: `url(${fram})`,backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center",
          }}>
          <img
            src={car4}
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
