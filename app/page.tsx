import React from "react";

const page = () => {
  return (
    <>
      <div className="h-80 w-80 bg-green-light p-4">
        <div className="h-40 w-40 bg-green">
          <div className="h-20 w-20 bg-green-dark" />
        </div>
        <h1 className="text-green-darker font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-green-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          vero.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-semibold text-2xl">Lorem ipsum dolor sit.</h2>
        <label htmlFor="input">Lorem, ipsum dolor.</label>
        <input
          id="input"
          title="example"
          className="bg-gray h-10 rounded-xl w-80 p-4 focus:outline-green"
          placeholder="Lorem, ipsum."
        />
        <button title="button" type="button" className="bg-violet-darker">
          Button
        </button>
      </div>
    </>
  );
};

export default page;
