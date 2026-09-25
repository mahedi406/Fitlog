import React from 'react';
import { IExercise } from '@/Type/type';
import Image from 'next/image';

const InfoCard = ({data} : {data:IExercise}) => {
    return (
       <div className="bg-[#15171b] border border-[#25282e] rounded-xl overflow-hidden">

  <img
    src={data.image}
    alt={data.name}
    className="w-full h-[130px] object-cover"
  />

  <div className="p-4">

    <div className="flex gap-2 mb-3">
      {data.muscleGroups.map((muscle, index) => (
        <span
          key={index}
          className="bg-[#d7ff00] text-black text-[9px] font-bold px-2 py-1 rounded-full"
        >
          {muscle}
        </span>
      ))}
    </div>

    <h2 className="text-white text-sm font-extrabold uppercase">
      {data.name}
    </h2>

    <p className="text-gray-500 text-[10px] mt-1">
      {data.equipment}
    </p>

    <div className="border-t border-[#25282e] my-3"></div>

    <div className="flex justify-between text-gray-500 text-[9px]">
      <span>◷ {data.duration}</span>
      <span>● {data.caloriesBurned} kcal</span>
      <span>☆ {data.rating}</span>
    </div>

  </div>

</div>

    );
};

export default InfoCard;