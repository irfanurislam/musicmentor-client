import React from 'react';
import Slider from '../Slider/Slider';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import TopInstructors from '../../TopInstructors/TopInstructors';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerClasses></PopulerClasses>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;