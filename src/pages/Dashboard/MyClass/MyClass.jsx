import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const MyClasses = () => {
  const [classes, setClasses] = useState([])
  const {user} = useContext(AuthContext)
  const instructorEmail = user?.email

  useEffect(() => {
    fetch(`http://localhost:5000/myclass?instructorEmail=${instructorEmail}`)
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error('Error fetching classes:', error));
  }, [instructorEmail]);

  return (
    <div className="overflow-x-auto">
    {classes.length === 0 ? (
      <p className='text-error font-bold text-3xl'>No classes added yet.</p>
    ) : (
      <table className="table">
        <thead>
          <tr className='text-black'>
            <th>
              Class Image
            </th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Total En ST</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <th>
              <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classItem.classImage} alt="Avatar" />
              </div>
            </div>
              </th>
              <td>{classItem.className}</td>
              <td>{classItem.instructorName}</td>
              <td>{classItem.instructorEmail}</td>
              <td>{classItem.seats}</td>
              <td>{classItem.price}</td>
              
              <td>0</td>
              <td>Pending</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
};

export default MyClasses;
