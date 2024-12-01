import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  const { search, pathname } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category != "undefined") getProductCategory();
  }, [category, products]);

  return products ? (
    <>
      {pathname != "/" ||
        (search.length > 0 && (
          <Link
            className="border-2 absolute left-[33%] top-[2%] border-red-300 px-3 py-1 hover:bg-red-300 hover:rounded-lg"
            to={"/"}
          >
            Home
          </Link>
        ))}

      <div className="bg-zinc-100 h-screen w-full flex justify-center gap-6">
        <Nav />
        <div className="w-[75%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto mt-20 justify-center">
          {filteredProducts &&
            filteredProducts.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={`/details/${product.id}`}
                  className="bg-white border-2 w-72 h-auto p-4"
                >
                  <div className=" h-48 w-full ">
                    <img
                      className="w-full h-full object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-xl ">$ {product.price}</p>
                    <p className="text-gray-400 text-xs">{product.category}</p>
                  </div>
                  <div>
                    <h2 className="text-left my-2 font-semibold text-lg">
                      {product.title}
                    </h2>
                  </div>
                  <div className="my-2">
                    <p className="font-normal text-md">
                      Rating{" "}
                      <span className="text-md font-semibold">
                        {product.rating.rate}
                      </span>
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
