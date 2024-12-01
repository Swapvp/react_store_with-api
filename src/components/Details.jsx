import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <>
      <Link
        className="border-2 absolute left-[3%] top-[2%] border-red-300 px-3 py-1 hover:bg-red-300 hover:rounded-lg"
        to={"/"}
      >
        Home
      </Link>
      <div className="container mx-auto  h-screen w-9/12 p-[10%] flex gap-1 items-center ">
        <div className="w-1/2">
          <img className="h-auto w-[70%]" src={product.image} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-left my-4 font-semibold text-3xl">
            {product.title}
          </h2>
          <p className="text-md my-3 ">{product.category}</p>
          <p className="font-semibold text-2xl my-3 text-red-500">
            ${product.price}
          </p>
          <p className="text-gray-400 text-lg">{product.description}</p>
          <button className="py-2 px-6 border-2 border-green-300 my-4 hover:bg-green-500 font-semibold text-lg rounded-lg hover:text-white">
            Add
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Details;
