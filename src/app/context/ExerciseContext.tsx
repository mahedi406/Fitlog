'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const ExerciseContext = createContext({})


const ExerciseProvider = ({children}:{children: ReactNode}) => {

    const [plan, setPlan] = useState([]);
    const [save, setSave] = useState([]);

    const sharedData = {
        plan, setPlan, save, setSave
    }

    return (
        <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
    );
};

export default ExerciseProvider;