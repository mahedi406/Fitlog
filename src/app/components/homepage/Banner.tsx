import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="px-5 lg:px-10 py-8 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto bg-[#15171C] rounded-3xl border border-gray-800 px-8 md:px-14 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          <div className="space-y-6">

            <p className="text-lime-400 text-xs font-bold tracking-[3px] uppercase">
              Workout Library
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold uppercase leading-[0.95] text-white max-w-2xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-8">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the week's work add up.
            </p>

            <button className="bg-lime-400 text-black font-bold uppercase px-6 py-3 rounded-md hover:bg-lime-300 transition">
              Browse Workouts
            </button>

          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={banner}
              alt="Workout"
              className="w-[300px] md:w-[400px] lg:w-[450px] h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;