"use client";
import { ColorPicker } from "@/lib/colorPicker";
import { motion } from "framer-motion";
import Image from "next/image";
import Studyviolet from "../../public/study-violet.svg";
import Studyblue from "../../public/study-blue.svg";
import Studygreen from "../../public/study-green.svg";
import Studyorange from "../../public/study-orange.svg";
import Studyred from "../../public/study-red.svg";

const Card = () => {
  const colorPicker = new ColorPicker();
  const color = colorPicker.getRandomColor();

  const getImages = () => {
    switch (color) {
      case "violet":
        return Studyviolet;
      case "blue":
        return Studyblue;
      case "green":
        return Studygreen;
      case "orange":
        return Studyorange;
      case "red":
        return Studyred;
      default:
        return null;
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`bg-${color}-light p-6 rounded-xl shadow h-fit cursor-pointer relative overflow-hidden pl-44`}
    >
      <Image
        src={getImages()}
        className=" absolute inset-x-0 inset-y-0 -top-3 -left-10 h-60 w-60"
        alt="study"
      />
      <h2 className={`text-${color}-darker font-bold text-2xl`}>
        Lorem, ipsum dolor.
      </h2>
      <p className={`text-${color}-darker`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
        explicabo?
      </p>
      <div className="w-full flex flex-row-reverse">
        <button
          type="button"
          title="Read More"
          className={`text-${color}-darker font-semibold mt-4 rounded-xl bg-${color} p-2 `}
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
