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
        <button
          title="button"
          type="button"
          className="bg-violet-darker text-white px-6 py-4 w-fit font-semibold rounded-xl hover:bg-opacity-90 active:bg-violet-darker "
        >
          Button
        </button>
        <div className="p-4 shadow bg-orange-light rounded-xl text-orange-darker">
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quisquam tenetur similique placeat enim dicta inventore non sunt?
            Fugit, a!
          </p>
          <button
            type="button"
            className="bg-orange px-4 py-2 rounded-xl hover:bg-opacity-90 active:bg-orange"
          >
            <strong>Lorem ipsum</strong>
          </button>
        </div>
        <div className="p-4 shadow bg-blue-light rounded-xl text-blue-darker">
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quisquam tenetur similique placeat enim dicta inventore non sunt?
            Fugit, a!
          </p>
          <button
            type="button"
            className="bg-blue px-4 py-2 rounded-xl hover:bg-opacity-90 active:bg-blue"
          >
            <strong>Lorem ipsum</strong>
          </button>
        </div>
        <div className="p-4 shadow bg-red-light rounded-xl text-red-darker">
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quisquam tenetur similique placeat enim dicta inventore non sunt?
            Fugit, a!
          </p>
          <button
            type="button"
            className="bg-red px-4 py-2 rounded-xl hover:bg-opacity-90 active:bg-red"
          >
            <strong>Lorem ipsum</strong>
          </button>
        </div>
        <div className="p-4 shadow bg-green-light rounded-xl text-green-darker">
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quisquam tenetur similique placeat enim dicta inventore non sunt?
            Fugit, a!
          </p>
          <button
            type="button"
            className="bg-green px-4 py-2 rounded-xl hover:bg-opacity-90 active:bg-green"
          >
            <strong>Lorem ipsum</strong>
          </button>
        </div>
        <div className="p-4 shadow bg-violet-light rounded-xl text-violet-darker">
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quisquam tenetur similique placeat enim dicta inventore non sunt?
            Fugit, a!
          </p>
          <button
            type="button"
            className="bg-violet px-4 py-2 rounded-xl hover:bg-opacity-90 active:bg-violet"
          >
            <strong>Lorem ipsum</strong>
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
