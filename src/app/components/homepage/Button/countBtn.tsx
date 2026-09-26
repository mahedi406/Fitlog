'use client';
import { ExerciseContext } from '@/app/context/ExerciseContext';
import React, { useContext } from 'react';

const CountBtnSave = () => {

    const {save} = useContext(ExerciseContext);
    return (
        <div>
            {save.length}
        </div>
    );
};

export default CountBtnSave;