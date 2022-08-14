import React from "react";
import { Products } from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.5onMpGbWKsJJPq7DWq5WPAHaEK&pid=Api&P=0"
          className="card-img "
          height="550px"
          alt="fgag"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONS ARRIVALS</h5>
            <p className="card-text fs-2 ">
CHECKOUT ALL THE TRENDS
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
