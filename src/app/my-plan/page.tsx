'use client'

import React, { useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import Link from 'next/link';
import { toast } from 'react-toastify';
import PlanCard from '../components/homepage/PlanCard';
import SaveCard from '../components/homepage/SaveCard';
import { IExercise } from '@/Type/type';

const MyPlanPage = () => {

    const { plan, setPlan } = useContext(ExerciseContext);

    const { save, setSave } = useContext(ExerciseContext);

    const [activeTab, setActiveTab] = React.useState("plan");

    const [sortBy, setSortBy] = React.useState("");

    const currentList = activeTab === "plan" ? plan : save;

    const sortedList = [...currentList].sort((a, b) => {

        if (sortBy === "duration") {
            return Number(a.duration) - Number(b.duration);
        }

        if (sortBy === "rating") {
            return Number(a.rating) - Number(b.rating);
        }

        if (sortBy === "calories") {
            return Number(a.caloriesBurned) - Number(b.caloriesBurned);
        }

        return 0;
    });

    const totalMinutes = currentList.reduce((total: number, exercise: IExercise) =>total + Number(exercise.duration),0);

    const totalCalories = currentList.reduce((total: number, exercise: IExercise) =>total + Number(exercise.caloriesBurned),0);

    const removeCard = (id: number) => {

        const removedExercise = plan.find((exercise: IExercise) => exercise.id === id);

        setPlan(plan.filter((item: IExercise) => item.id !== id));

        if (removedExercise) {
            toast.info(
                `${removedExercise.name} removed from today's plan!`
            );
        }
    };


    const removeSave = (id: number) => {

    const removedExercise = save.find((exercise: IExercise) => exercise.id === id);

    setSave(save.filter((item: IExercise) => item.id !== id));

    if (removedExercise) {
        toast.info(`${removedExercise.name} removed from saved!`);
    }
};

    return (

        <div className="container mx-auto">


            <div className="mb-6">

                <h2 className="text-2xl font-extrabold text-white">
                    MY PLAN
                </h2>

                <p className="text-gray-500 text-sm">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>


            <div className="grid grid-cols-3 gap-4 mb-6">

                <div className="bg-[#15171b] border border-[#25282e] rounded-xl p-5">

                    <p className="text-gray-500 text-sm">
                        Exercises
                    </p>

                    <h1 className="text-[#d7ff00] text-3xl font-bold">
                        {currentList.length}
                    </h1>

                </div>


                <div className="bg-[#15171b] border border-[#25282e] rounded-xl p-5">

                    <p className="text-gray-500 text-sm">
                        Minutes
                    </p>

                    <h1 className="text-white text-3xl font-bold">
                        {totalMinutes}
                    </h1>

                </div>


                <div className="bg-[#15171b] border border-[#25282e] rounded-xl p-5">

                    <p className="text-gray-500 text-sm">
                        Calories
                    </p>

                    <h1 className="text-white text-3xl font-bold">
                        {totalCalories}
                    </h1>

                </div>

            </div>



            <div className="mb-4">

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#15171b] text-white border border-[#25282e] rounded-lg px-4 py-2"
                >

                    <option value="">
                        Sort By
                    </option>

                    <option value="duration">
                        Duration
                    </option>

                    <option value="rating">
                        Rating
                    </option>

                    <option value="calories">
                        Calories
                    </option>

                </select>

            </div>



            <div className="tabs tabs-border">


                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label="My Plan"
                    defaultChecked
                    onChange={() => setActiveTab("plan")}
                />

                <div className="tab-content border-base-300 bg-base-100 p-10">

                    {
                        plan.length === 0 ? (


                            <div className="border border-dashed border-[#25282e] rounded-xl py-20 text-center">

                                <h2 className="text-white font-bold text-xl">
                                    NOTHING HERE YET
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Browse the library and add a lift to get moving.
                                </p>

                                <Link href="/workouts">

                                    <button className="mt-5 bg-[#d7ff00] text-black px-5 py-2 rounded-full font-bold">
                                        Go to workouts
                                    </button>

                                </Link>

                            </div>

                        ) : (


                            <div className="space-y-3">

                                {
                                    sortedList.map((exercise) => (

                                        <PlanCard
                                            key={exercise.id}
                                            exercise={exercise}
                                            removeCard={removeCard}
                                        />

                                    ))
                                }

                            </div>

                        )
                    }

                </div>



                <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label="Saved"
    onChange={() => setActiveTab("save")}
/>

<div className="tab-content border-base-300 bg-base-100 p-10">

    {
        save.length === 0 ? (

            <div className="border border-dashed border-[#25282e] rounded-xl py-20 text-center">

                <h2 className="text-white font-bold text-xl">
                    NO SAVED EXERCISES
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                    Save an exercise to find it here later.
                </p>

                <Link href="/workouts">

                    <button className="mt-5 bg-[#d7ff00] text-black px-5 py-2 rounded-full font-bold">
                        Go to workouts
                    </button>

                </Link>

            </div>

        ) : (

            <div className="space-y-3">

                {
                    sortedList.map((exercise) => (

                        <SaveCard
                            key={exercise.id}
                            exercise={exercise}
                            removeSave={removeSave}
                        />

                    ))
                }

            </div>

        )
    }

</div>

            </div>

        </div>
    );
};

export default MyPlanPage;