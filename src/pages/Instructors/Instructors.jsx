import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Instructors = () => {
  // Fetch instructor data from the database
  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      music: [
        { id: 1, musicName: 'Jazz' },
        { id: 2, musicName: 'Hip Hop' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      music: [
        { id: 3, musicName: 'Salsa' },
        { id: 4, musicName: 'Bollywood' }
      ]
    }
    // Add more instructors as needed
  ];

  return (
    <div className="container mx-auto p-8">
   

    <div className="overflow-x-auto">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left">Image</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Email</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Classes</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td className="px-4 py-2">
                <img
                  src="https://i.ibb.co/Lg56rFT/extra-Volunteer.png"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{instructor.name}</td>
              <td className="px-4 py-2">{instructor.email}</td>
              <td className="px-4 py-2">
                {instructor.music && instructor.music.length > 0 ? (
                  <>
                    <p>Number of Music: {instructor.music.length}</p>
                    <ul>
                      {instructor.music.map((music) => (
                        <li key={music.id}>{music.musicName}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <span>No music listed</span>
                )}
              </td>
              <td className="px-4 py-2">
                <Link to={`/instructors/${instructor.id}/classes`} className="btn btn-primary">
                  See Classes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Instructors;
