'use client'

import React from 'react';
import Link from 'next/link';
import { IExercise } from '@/Type/type';

interface SaveCardProps {
    exercise: IExercise;
    removeSave: (id: number) => void;
}

const SaveCard = ({ exercise, removeSave }: SaveCardProps) => {

    return (
        <div
            className="flex items-center gap-4 bg-[#15171b] border border-[#25282e] rounded-xl p-3"
        >


            <img
                src={exercise.image}
                alt={exercise.name}
                className="w-[110px] h-[70px] rounded-lg object-cover shrink-0"
            />



            <div className="flex-1 min-w-0">

                <h2 className="text-white text-sm font-extrabold uppercase">
                    {exercise.name}
                </h2>

                <p className="text-gray-500 text-[10px] mt-1">
                    {exercise.equipment}
                </p>


                <div className="flex items-center gap-3 mt-2 text-gray-400 text-[10px]">

                    <span>
                        ◷ {exercise.duration} min
                    </span>

                    <span>
                        🔥 {exercise.caloriesBurned} kcal
                    </span>

                    <span>
                        ☆ {exercise.rating}
                    </span>

                </div>

            </div>



            <Link href={`/exercise/${exercise.id}`}>

                <button
                    className="hidden sm:block border border-[#30343b] text-gray-300 text-[10px] px-4 py-2 rounded-full hover:border-[#d7ff00] hover:text-[#d7ff00] transition"
                >
                    View Details
                </button>

            </Link>


            <button
                onClick={() => removeSave(exercise.id)}
                className="text-gray-500 hover:text-red-400 text-lg px-1"
            >
                ×
            </button>

        </div>
    );
};

export default SaveCard;