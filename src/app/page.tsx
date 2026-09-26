import React from 'react';
import Banner from './components/homepage/Banner';
import Info from './components/homepage/info';

const HomePage = () => {
  return (
     <div>
            <Banner></Banner>

            <div className='container mx-auto mt-7 mb-5'>
                
            <h1 className='font-extrabold text-3xl'>THE LIBRARY</h1>
            <h3 className='font-extralight'>Twelve lifts covering every major muscle group.</h3>

            
            </div>
            
            <Info></Info>
        </div>
  );
};

export default HomePage;