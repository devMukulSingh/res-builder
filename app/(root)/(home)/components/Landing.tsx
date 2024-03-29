"use client";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-20 justify-center basis-2/3 ">
        <section className="space-y-5">
          <h1 className="text-4xl font-bold">Hi Candidate,</h1>
          <h1 className="text-2xl">
            RANGAM will help you in building an AI-enabled
          </h1>
          <h1 className="text-2xl">
            resume and finding a properly suitable job.
          </h1>
        </section>
        <button
          onClick={() => {}}
          className="px-5 py-2 w-52 text-white rounded-md bg-red-500"
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Landing;
