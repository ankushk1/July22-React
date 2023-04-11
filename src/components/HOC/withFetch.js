import React, { useEffect, useState } from "react";

const withFetch = (OrigComp, route) => () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function will return data bases switch case (types)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://dummyjson.com/${route}`);
        const json = await res.json();
        setApiData(route === "users" ? json.users : json.products);
      } catch (err) {
        alert("Wrong Request");
      } finally {
        setLoading(false);
      }
    })();
  }, [route]);

  return (
    <div>
      <OrigComp apiData={apiData} loading={loading} />
    </div>
  );
};

export default withFetch;
