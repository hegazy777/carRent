import React from "react";
import logo from "../../assets/imgs/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#051C34",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <img src={logo} />{" "}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{ color: "#fff", textDecoration: "none" }}
              ></i>
              25566 Hc 1, Glenallen, Alaska, 99588, USA
            </div>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <i
                className="fas fa-phone"
                style={{ color: "#fff", textDecoration: "none" }}
              ></i>
              +603 4784 273 12
            </div>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <i
                className="fas fa-envelope"
                style={{ color: "#fff", textDecoration: "none" }}
              ></i>
              rentcars@gmail.com
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>Our Product</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Career
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Car
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Features
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Priceline
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>Resources</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Download
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Guides{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Partner Network
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Cruises
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Developer
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>About Rentcars</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Why choose us
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Our Story
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Investor Relations{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Partner Network
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Press Center
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Advertise
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
          <h3>Follow Us</h3>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              display: "flex",
              gap: 24,
            }}
          >
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                <i className="fab fa-facebook"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                <i className="fab fa-instagram"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                <i className="fab fa-youtube"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
