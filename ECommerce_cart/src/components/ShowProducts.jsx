import React from "react";
import { NavLink } from "react-router-dom";

function ShowProducts({ setfilter, filter, data }) {
  // console.log(data)

function filterProduct(cat){
const updatedFilter= data.filter(e=>e.category==cat)
console.log(updatedFilter)
setfilter(updatedFilter)
}


  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
        <button
          className="btn btn-outline-dark"
          onClick={() => setfilter(data)}
        >
          All
        </button>
        <button  className="btn btn-outline-dark ms-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark ms-2" onClick={()=>{filterProduct("women's clothing")}}>Womnes's Clothing</button>
        <button className="btn btn-outline-dark ms-2" onClick={()=>{filterProduct("jewelery")}}>Jwellery </button>
        <button className="btn btn-outline-dark ms-2" onClick={()=>{filterProduct("electronics")}}>Electronics </button>
      </div>
      {filter?.map((prod) => {
        return (
          <>
            <div className="col-md-3 mb-4" key={prod.id}>
              <div
                className="card h-100 text-center p-4"
                style={{ width: "18rem" }}
                key={prod.id}
              >
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {prod.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold ">$ {prod.price}</p>
                  <NavLink to={`/products/${prod.id}`} className="btn btn-dark">
                    Buy Now
                  </NavLink>
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
