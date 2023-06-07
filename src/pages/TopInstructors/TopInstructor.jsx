import React from 'react';
import { Link } from 'react-router-dom';

const TopInstructor = ({classItem}) => {
  const {  title, description, instructor, instructorImage,students } = classItem
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={instructorImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex items-center mt-4">
          <img className="w-10 h-10 rounded-full mr-2" src={instructorImage} alt={instructor} />
       
         <p className="text-gray-700 text-sm">{instructor}</p>
          <p className="text-gray-700 text-sm text-end ml-5"> Students : {students}</p>
        
        </div>
        <div className='card-actions justify-end my-2'>
          <Link to='/instructor'>
            <button className='btn btn-primary btn-md'> all instructor</button>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default TopInstructor;