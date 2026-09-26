'use client'
import { ExerciseContext } from '@/app/context/ExerciseContext';
import React, { useContext } from 'react';

const CountPlanBtn = () => {

    const {plan} = useContext(ExerciseContext);
    return (
        <div>
            {plan.length}
        </div>
    );
};

export default CountPlanBtn;