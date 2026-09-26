'use client'

import { ExerciseContext } from '@/app/context/ExerciseContext';
import { IExercise } from '@/Type/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveBtn = ({ exercise }: { exercise: IExercise }) => {

    const { save, setSave } = useContext(ExerciseContext);

    const handleSave = () => {

        const alreadySaved = save.some(item => item.id === exercise.id);

        if (alreadySaved) {
            toast.error(`${exercise.name} Already Added to Save List!`);
            return;
        }

        setSave([...save, exercise]);

        toast.success(`${exercise.name} Added Successfully!`);
    };

    return (
        <div>
            <button
                onClick={handleSave}
                className="border border-[#343942] hover:bg-[#181b20] text-gray-300 text-xs px-5 py-3 rounded-lg transition"
            >
                ♡ Save for later
            </button>
        </div>
    );
};

export default SaveBtn;