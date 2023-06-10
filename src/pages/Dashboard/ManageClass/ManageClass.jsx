import React from 'react';
import useClass from '../../../hooks/useClass';

const ManageClass = () => {
    const [myClass] = useClass()
    return (
        <div className="overflow-x-auto">
       
         
      
          <table className="table w-full">
            <thead>
              <tr className="text-black">
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
                
              </tr>
            </thead>
            <tbody>
              {myClass.map((classItem) => (
                <tr key={classItem._id}>
                  <td className="align-middle">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem.classImage} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{classItem.className}</td>
                  <td>{classItem.instructorName}</td>
                  <td>{classItem.instructorEmail}</td>
                  <td>{classItem.seats}</td>
                  <td>${classItem.price}</td>
                  <td><button className='btn btn-warning btn-sm'>pending</button></td>
                  <td><button className='btn btn-success btn-sm'>Send</button></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    );
};

export default ManageClass;