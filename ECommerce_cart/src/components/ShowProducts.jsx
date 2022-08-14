import React from "react";

function ShowProducts({ filter }) {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
        <button className="btn btn-outline-dark">All</button>
        <button className="btn btn-outline-dark ms-2">Men's Clothing</button>
        <button className="btn btn-outline-dark ms-2">Womnes's Clothing</button>
        <button className="btn btn-outline-dark ms-2">Jwellery </button>
        <button className="btn btn-outline-dark ms-2">Electronics </button>
      </div>
      {filter?.map((prod) => {
        return (
          <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" style={{ width: "18rem" }} key={prod.id} >
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{prod.title.substring(0,12)}...</h5>
                  <p className="card-text lead fw-bold ">$ {prod.price}</p>
                  <a href="#" className="btn btn-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ShowProducts;
