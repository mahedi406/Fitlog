import React from 'react';
import InfoCard from './InfoCard';
import { IExercise } from '@/Type/type';

const InfoDetails = async() =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const Info = async () => {

    const Datas : IExercise[] = await InfoDetails();


    return (

        <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                Datas.map((data:IExercise) => {
                    return <InfoCard data  ={data} key={data.id}></InfoCard>
                })
            }
        </div>

        </div>
    );
};

export default Info;