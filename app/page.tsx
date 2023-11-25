import Card from "@/components/Card/Card";
import React from "react";

const HomePage = () => {
  const MOCK_DATA = [];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold max-w-md">Your Documents</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        laborum totam, optio ab aliquid fuga corrupti aperiam repellat, modi ad
        maxime amet dolor reprehenderit iste. Laborum nobis ab tempore dolores.
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-6 h-fit">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default HomePage;
