import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-zinc-50 flex justify-center items-center">
      {/* <h1 className="text-4xl font-semibold">Loading...</h1> */}
      <img
        className=" w-96"
        src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
        alt=""
      />
    </div>
  );
};

export default Loading;
