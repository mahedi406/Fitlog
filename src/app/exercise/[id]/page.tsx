import PlanBtn from '@/app/components/homepage/Button/planBtn';
import SaveBtn from '@/app/components/homepage/Button/saveBtn';
import { IExercise } from '@/Type/type';
import React from 'react';

interface IExerciseProps {
  params: Promise<{
    id: string;
  }>;
}

const InfoDetails = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const ExerciseDetails = async ({ params }: IExerciseProps) => {
  const { id } = await params;

  const allExercise = await InfoDetails();

  const exercise = allExercise.find(
    (exercise: IExercise) => String(exercise.id) === String(id)
  ) as IExercise;

  return (
    <div className="min-h-screen bg-[#0b0d10] p-4 md:p-6 lg:p-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#0f1115] border border-[#25282e] rounded-2xl overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6 p-5">

            <div>
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-[400px] lg:h-[560px] object-cover rounded-xl"
              />
            </div>


            <div className="flex flex-col py-2 lg:py-0">

              <div className="flex gap-2 mb-3">

                {exercise.muscleGroups.map((muscle, index) => (
                  <span
                    key={index}
                    className="bg-[#d7ff00] text-black text-[10px] font-bold px-3 py-1 rounded-full"
                  >
                    {muscle}
                  </span>
                ))}

              </div>


              <h1 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                {exercise.name}
              </h1>


              <p className="text-gray-400 text-sm leading-5 mt-2 max-w-xl">
                {exercise.description}
              </p>


              <div className="bg-[#15181e] border border-[#25282e] rounded-xl mt-5 overflow-hidden">

                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Equipment
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.equipment}
                  </span>

                </div>


                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Difficulty
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.difficulty}
                  </span>

                </div>

                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Sets
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.sets}
                  </span>

                </div>


                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Reps
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.reps}
                  </span>

                </div>


                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Duration
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.duration} min
                  </span>

                </div>


                <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#25282e]">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Calories
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.caloriesBurned} kcal
                  </span>

                </div>

                <div className="flex justify-between items-center px-5 py-3.5">

                  <span className="text-gray-500 text-[10px] font-semibold uppercase">
                    Rating
                  </span>

                  <span className="text-gray-300 text-xs">
                    {exercise.rating}
                  </span>

                </div>

              </div>


              <div className="mt-6">

                <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-3">
                  Instructions
                </h3>

                <div className="space-y-3">

                  {exercise.instructions.map((instruction, index) => (

                    <div
                      key={index}
                      className="flex gap-3 text-gray-400 text-xs leading-5"
                    >

                      <span className="text-gray-500 min-w-[15px]">
                        {index + 1}.
                      </span>

                      <p>
                        {instruction}
                      </p>

                    </div>

                  ))}

                </div>

              </div>


              <div className="flex flex-wrap gap-3 mt-6">

                <PlanBtn exercise = {exercise}></PlanBtn>

                <SaveBtn exercise={exercise}></SaveBtn>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ExerciseDetails;