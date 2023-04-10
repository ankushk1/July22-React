import { useEffect, useState } from "react";

export const useForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return {
    formValues,
    handleFormChange
  };
};

export const useFetch = (url, route, type = "") => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function will return data bases switch case (types)

  useEffect(() => {
    (async () => {
      try {
        if (type === "comments") {
          const res = await fetch(`${url}/${route}`);
          const json = await res.json();
          setApiData(json.comments);
        } else {
          const res = await fetch(`${url}/${route}`);
          const json = await res.json();
          setApiData(route === "users" ? json.users : json.products);
        }
      } catch (err) {
        console.log(err);
        alert("Wrong Request");
      } finally {
        setLoading(false);
      }
    })();
  }, [route]);

  return { apiData, loading };
};

export const useDarkMode = () => {
  const [mode, setMode] = useState("light");

  const handleModeChange = (type) => {
    type === "light" ? setMode("light") : setMode("dark");
  };

  return { mode, handleModeChange };
};
