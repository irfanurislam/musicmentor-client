import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import TopInstructors from '../../TopInstructors/TopInstructors';
import Level from '../Level/Level';
import ClipLoader from "react-spinners/ClipLoader";
import Banner from '../Banner';
const Home = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])

    return (
        <div>
            {
                loading ? <div className='text-center'> <ClipLoader  color={"#cf1515"} loading={loading} size={50} /></div>
                :<>
                {/* <Slider></Slider> */}
                <Banner></Banner>
                 <PopulerClasses></PopulerClasses>
                 <TopInstructors></TopInstructors>
                 <Level></Level>
                </>
            }
           
        </div>
    );
};

export default Home;