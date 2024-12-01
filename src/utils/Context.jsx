import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [product, setProduct] = useState();

  const getProducts = async () => {
    try {
      const { data } = await axios("/Products");
      setProduct(data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productContext.Provider value={[product, setProduct]}>
      {children}
    </productContext.Provider>
  );
};

export default Context;
