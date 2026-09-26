'use client';
import React, { createContext, ReactNode, useState } from 'react';
import { IExercise } from '@/Type/type';

interface ExerciseContextType {
    plan: IExercise[];
    setPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    save: IExercise[];
    setSave: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>({
    plan: [],
    setPlan: () => {},
    save: [],
    setSave: () => {}
})


const ExerciseProvider = ({children}:{children: ReactNode}) => {

    const [plan, setPlan] = useState<IExercise[]>([]);
    const [save, setSave] = useState<IExercise[]>([]);

    const sharedData = {
        plan, setPlan, save, setSave
    }

    return (
        <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
    );
};


export default ExerciseProvider;