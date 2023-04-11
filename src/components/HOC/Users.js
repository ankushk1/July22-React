import React from "react";
import ApiCompItems from "../ApiCompItems";
import withFetch from "./withFetch";

const Users = ({ loading, apiData }) => {
  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <div>
          <div className="d-flex flex-wrap justify-content-around">
            {apiData?.slice(0, 10)?.map((elem, idx) => {
              return (
                <ApiCompItems
                  key={idx}
                  image={elem?.thumbnail ?? elem?.image}
                  name={elem?.title ?? elem?.firstName}
                  description={elem?.description ?? elem?.gender}
                  price={elem?.price ?? elem?.phone}
                  birthDate={elem?.birthDate}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default withFetch(Users, "users");
