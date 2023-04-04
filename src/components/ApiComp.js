import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import ApiCompItems from "./ApiCompItems";

const ApiComp = () => {
  const [apiData, setApiData] = useState([]);

  const [select, setSelect] = useState("products");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://dummyjson.com/${select}`);
      const json = await res.json();
      setApiData(select === "products" ? json.products : json.users);
      setLoading(false);
    })();
  }, [select]);

  return (
    <div className="my-3 mx-2">
      {console.log("render")}

      {loading ? (
        <div className="d-flex">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn  btn-lg btn-primary me-2"
              onClick={() => setSelect("products")}
            >
              Products
            </button>
            <button
              className="btn  btn-lg btn-success "
              onClick={() => setSelect("users")}
            >
              Users
            </button>
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            {apiData?.slice(0, 10)?.map((elem, idx) => {
              return (
                <ApiCompItems
                  key={idx}
                  image={elem?.thumbnail ?? elem?.image}
                  name={elem?.title ?? elem?.firstName}
                  description={elem?.description ?? elem?.gender}
                  price={elem?.price ?? elem?.phone}
                  birthDate = {elem?.birthDate}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ApiComp;
