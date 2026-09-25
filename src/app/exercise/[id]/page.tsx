import { IExercise } from '@/Type/type';
import React from 'react';


interface IExerciseProps {
    params : Promise<{
        id: string
    }>
}


const InfoDetails = async() =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const ExerciseDetails = async({params} : IExerciseProps) => {

    const {id} = await params

    const allExercise = await InfoDetails();

    const exercise = allExercise.find((exercise:IExercise)=> String(exercise.id) === String(id)) as IExercise


    return (
        <div>
            
            

        </div>
    );
};

export default ExerciseDetails;