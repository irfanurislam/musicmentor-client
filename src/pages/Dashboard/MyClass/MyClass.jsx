import React, { useEffect, useState } from 'react';

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const instructorEmail = 'mdirfanurislam@gmail.com'; // Replace with the instructor's email

  useEffect(() => {
    fetch(`/myclass/${encodeURIComponent(instructorEmail)}`)
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error('Error fetching classes:', error));
  }, [instructorEmail]);

  return (
    <div>
      <h2>My Classes</h2>
      {classes.length === 0 ? (
        <p>No classes added yet.</p>
      ) : (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem._id}>
              <h3>{classItem.className}</h3>
              {/* Display other class information */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyClasses;
