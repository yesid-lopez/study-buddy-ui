"use client";
import useStore from "@/state/store/store";
import React from "react";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import { motion } from "framer-motion";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";

const NewCourseModal = () => {
  const closeModal = useStore((state) => state.closeModal);
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0  bg-black  bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 py-4 sm:p-6 sm:pb-4">
                <div className="flex w-full justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    type="button"
                    title="Info"
                    className="border rounded-xl p-1 text-violet"
                  >
                    <QuestionIcon />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    type="button"
                    title="close"
                    className="border border-gray-dark rounded-xl p-1"
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </motion.button>
                </div>
                <h2 className="text-2xl font-semibold mt-4">
                  Create New Course
                </h2>
                <form className="mt-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className="font-light w-full mt-4 p-2 border border-gray rounded-md outline-violet"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="font-light w-full mt-4 p-2 border border-gray rounded-md  outline-violet"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCourseModal;
