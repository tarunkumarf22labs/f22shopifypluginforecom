import { useEffect, useState } from "preact/hooks";

const baseURL =
  "https://kiranastore-upload-backend-f22labs.onrender.com/products/";
function useFetch() {
  const [value, setval] = useState({});

  async function Fetchquestion() {
    try {
      const data = await fetch(baseURL);
      const val = await data.json();
      if (typeof value === "object") setval(val);
    } catch (error) {}
  }

  useEffect(() => {
    Fetchquestion();
  }, []);

  return value;
}

export default useFetch;
