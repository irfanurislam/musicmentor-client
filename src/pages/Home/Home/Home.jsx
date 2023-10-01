import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import TopInstructors from '../../TopInstructors/TopInstructors';
import Level from '../Level/Level';
import ClipLoader from "react-spinners/ClipLoader";
import Banner from '../Banner';
import ScrollToTop from 'react-scroll-to-top';
import ShowVideo from '../ShowVideo/ShowVideo';
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
                 {/* <div style={{ marginTop: "150vh" }} /> */}
                <ScrollToTop smooth color="#ce0d50"/>
                 <Level></Level>
                 <ShowVideo></ShowVideo>
                </>
            }
           
        </div>
    );
};

export default Home;