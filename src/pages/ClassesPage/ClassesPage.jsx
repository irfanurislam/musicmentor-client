import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch class data from the database and update the state
    fetchClasses();
  }, []);

  const fetchClasses = () => {
    // Simulated API call to fetch class data
    const classData = [
      {
        id: 1,
        image: 'class1.jpg',
        name: 'Class 1',
        instructor: 'John Doe',
        seats: 5,
        price: 10,
      },
      {
        id: 2,
        image: 'class2.jpg',
        name: 'Class 2',
        instructor: 'Jane Smith',
        seats: 0,
        price: 15,
      },
      // Add more class objects as needed
    ];

    setClasses(classData);
  };

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
          <img src={classItem.image} alt={classItem.name} className="w-12 h-12" />
        </td>
        <td>{classItem.name}</td>
        <td>{classItem.instructor}</td>
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
      <h1 className="text-3xl font-bold mb-4">Approved Classes</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2">
              Image
            </th>
            <th scope="col" className="px-4 py-2">
              Name
            </th>
            <th scope="col" className="px-4 py-2">
              Instructor
            </th>
            <th scope="col" className="px-4 py-2">
              Available Seats
            </th>
            <th scope="col" className="px-4 py-2">
              Price
            </th>
            <th scope="col" className="px-4 py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{renderClasses()}</tbody>
      </table>
    </div>
    </div>
  );
}

export default ClassesPage;