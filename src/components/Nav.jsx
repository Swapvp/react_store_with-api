import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);

  let uniqueCategories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  uniqueCategories = [...new Set(uniqueCategories)];

  const randomColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()}, ${Math.random()})`;
  };

  // console.log(randomColor());

  return (
    <nav className="w-1/4 bg-slate-300 h-screen p-4">
      <Link
        to=""
        className="border-2 border-red-300 px-3 py-1 hover:bg-red-300 hover:rounded-lg"
        href="#"
      >
        Add Product
      </Link>
     
      <hr className="my-4 w-3/4 mx-auto" />
      <h1 className="text-2xl text-left font-semibold">Category Filters</h1>
      <div className="w-3/4">
        {uniqueCategories.map((cats, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${cats}`}
              className="text-left my-2 inline-block w-full"
            >
              <span
                style={{ backgroundColor: randomColor() }}
                className="w-3 h-3 mx-2 rounded-full inline-block"
              ></span>
              {cats}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
