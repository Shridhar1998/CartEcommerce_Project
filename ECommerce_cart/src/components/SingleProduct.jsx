import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AddContext } from "../Context/AddCartContext";


function getProduct(id) {
  return fetch(`http://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const param = useParams();
//   console.log(param);
//useContext
const {AddToCart}=useContext(AddContext)

  const { id, image, title, category, rating, price, description } = product;
  useEffect(() => {
    getProduct(param.prod_id).then((res) => setProduct(res));
  }, [param.prod_id]);

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <img src={image} alt={title} height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{category}</h4>
            <h1 className="display-5">{title}</h1>
            <p className="lead fw-bolder">
              Rating{rating && rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4 ">$ {price}</h3>
            <p className="lead">{description}</p>
            <button onClick={()=>AddToCart(product)}  className="btn btn-outline-dark px-4 py-2">
              Add to Cart
            </button>
            <NavLink to="/" className="btn btn-dark ms-2 px-3 py-2">
              Go To Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
