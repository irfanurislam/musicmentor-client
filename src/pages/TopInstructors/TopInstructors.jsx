import React from 'react';
import TopInstructor from './TopInstructor';

const TopInstructors = () => {

    const classesData = [
        {
          _id: '1',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Guitar Lessons',
          description: 'Learn various guitar techniques, chords, and songs.',
          instructor: 'John Doe',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 200,
        },
        {
          _id: '2',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
          instructor: 'Jane Smith',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 180,
        },
        {
          _id: '3',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
          instructor: 'Jane Smith',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 230,
        },
        {
          _id: '4',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
          instructor: 'Jane Smith',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 210,
        },
        {
          _id: '5',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
          instructor: 'Jane Smith',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 150,
        },
        {
          _id: '6',
          imageSrc: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
          instructor: 'Jane Smith',
          instructorImage: 'https://i.ibb.co/CWRz0jg/little.jpg',
          students: 130,
        },
        // ... Add more class data here
      ];

      // Sort classesData based on the number of students in descending order
  const sortedClassesData = classesData.sort((a, b) => b.students - a.students);

  // Select the top 6 instructors
  const topInstructors = sortedClassesData.slice(0, 6).map(classItem => ({
    _id: classItem._id,
    instructor: classItem.instructor,
    instructorImage: classItem.instructorImage,
    students: classItem.students,
  }));



    return (
        <div>
         <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Top 6 Instructors</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {topInstructors.map((instructor, index) => (
          <TopInstructor
            key={index}
            classItem={instructor}
          />
        ))}
      </div>
    </div>   
        </div>
    );
};

export default TopInstructors;