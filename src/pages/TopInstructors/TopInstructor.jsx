import React from 'react';
import { Link } from 'react-router-dom';

const TopInstructor = ({classItem}) => {
  const {   instructorName, instructorImage,students,className } = classItem
    return (
        <div className='my-10'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={instructorImage} alt={instructorName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mentor:{instructorName}</div>
        <div className="flex items-center mt-4">
       
         <p className="text-gray-700 text-sm"> Music: {className}</p>
          <p className="text-gray-700 text-sm text-end ml-5"> Enroll : {students}</p>
        
        </div>
        <div className='card-actions justify-center my-2'>
          <Link to='/instructors'>
            <button className='btn btn-primary btn-sm'>Details</button>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default TopInstructor;