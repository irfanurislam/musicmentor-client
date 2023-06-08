import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
   fetch('http://localhost:5000/myclass')
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setClasses(data)
   })
  }, []);



  const handleSelect = (classId) => {
    // Handle the selection of a class
    console.log(`Selected class with ID: ${classId}`);
  };

  const renderClasses = () => {
    return classes.map((classItem) => (
      <tr
        key={classItem.id}
        className={`${classItem.seats === 0 ? 'bg-red-700' : ''}`}
      >
        <td>
        <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classItem.classImage} alt={classItem.className} />
                  </div>
                </div>
        </td>
        <td>{classItem.className}</td>
        <td>{classItem.instructorName}</td>
        <td>{classItem.seats}</td>
        <td>${classItem.price}</td>
        <td>
          <button
            className="btn btn-primary"
            disabled={classItem.seats === 0}
            onClick={() => handleSelect(classItem.id)}
          >
            Select
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className='my-28'>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">All Classs</h1>
      <table className="table w-full">
      <thead>
          <tr className="text-black">
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{renderClasses()}</tbody>
      </table>
    </div>
    </div>
  );
}

export default ClassesPage;