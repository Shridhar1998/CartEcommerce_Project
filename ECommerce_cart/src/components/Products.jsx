import React, { useEffect, useState } from "react";
import ShowProducts from "./ShowProducts";

function Getdata() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

export function Products() {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    setloading(true);
    Getdata().then((res) => {
      
      setData(res);
      setfilter(res);
      console.log("agdg",res)
      setloading(false);
    });
    return () => {
      componentMounted = false;
    };
  }, []);
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-l2 mb-5">
            <h1 className="display-6 fw-bolder text-center ">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <h3>loading...</h3>
          ) : (
            <ShowProducts setfilter={setfilter} data={data} filter={filter} />
          )}
        </div>
      </div>
    </div>
  );
}
