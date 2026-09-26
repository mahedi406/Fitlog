import React from 'react';
import Banner from '../components/homepage/Banner';
import Info from '../components/homepage/info';

const WorkoutPage = () => {
    return (
        <div>
            <Banner></Banner>

             <div className='container mx-auto mt-7 mb-5'>
                
            <h1 className='font-extrabold text-3xl'>THE LIBRARY</h1>
            <h3 className='font-extralight mb-5'>Twelve lifts covering every major muscle group.</h3>

            
            <Info></Info>
            
            </div>

            
        </div>
    );
};

export default WorkoutPage;