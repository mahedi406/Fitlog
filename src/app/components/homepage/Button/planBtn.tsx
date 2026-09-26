'use client'

import { ExerciseContext } from '@/app/context/ExerciseContext';
import { IExercise } from '@/Type/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanBtn = ({ exercise }: { exercise: IExercise }) => {

    const { plan, setPlan } = useContext(ExerciseContext);

    const handleRemove = () =>{
        setPlan(plan.filter(iteam => iteam.id !== id));
    }

    const handlePlan = () => {

        const alreadyAdded = plan.some(item => item.id === exercise.id);

        if (alreadyAdded) {
            toast.error(`${exercise.name} Already Added to Today's Plan!`);
            return;
        }

        setPlan([...plan, exercise]);

        toast.success(`${exercise.name} Added to Today's Plan!`);
    };

    return (
        <div>
            <button
                onClick={handlePlan}
                className="bg-[#d7ff00] hover:bg-[#c8f000] text-black font-bold text-xs px-5 py-3 rounded-lg transition"
            >
                ▣ Add to today's plan
            </button>
        </div>
    );
};

export default PlanBtn;