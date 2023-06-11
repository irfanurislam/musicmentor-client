import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const MyClasses = () => {
  const [classes, setClasses] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/myclass?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error('Error fetching classes:', error));
  }, []);

  return (
    <div className="overflow-x-auto">
    {classes.length === 0 ? (
      <p className="text-error font-bold text-3xl">No classes added yet.</p>
    ) : (
      <table className="table w-full">
        <thead>
          <tr className="text-black">
            <th>Class Image</th>
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
              <td className="align-middle">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classItem.classImage} alt="Avatar" />
                  </div>
                </div>
              </td>
              <td className="align-middle">{classItem.className}</td>
              <td className="align-middle">{classItem.name}</td>
              <td className="align-middle">{classItem.email}</td>
              <td className="align-middle">{classItem.seats}</td>
              <td className="align-middle">{classItem.price}</td>
              <td className="align-middle">0</td>
              <td className="align-middle">Pending</td>
              <td className="align-middle">
                <button className="btn btn-ghost btn-xs">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
};

export default MyClasses;
