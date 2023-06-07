import React from 'react';
import PopulerClass from './PopulerClass';

const PopulerClasses = () => {
    const classesData = [
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Guitar Lessons',
          description: 'Learn various guitar techniques, chords, and songs.',
        },
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Piano/Keyboard Lessons',
          description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
        },
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Singing/Vocal Classes',
          description: 'Improve your singing skills, breath control, pitch, and performance abilities.',
        },
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Drum Lessons',
          description: 'Learn drumming techniques, coordination, and different drumming styles.',
        },
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Violin Lessons',
          description: 'Master the violin and learn classical music techniques and finger placement.',
        },
        {
          classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
          title: 'Music Production/Music Technology',
          description: 'Explore the art of recording, mixing, and producing music using digital tools.',
        },
      ];
    return (
        <div className="container mx-auto grid grid-cols-2 gap-4">
      {classesData.map((classItem, index) => (
        <PopulerClass key={index} {...classItem} />
      ))}
    </div>
    );
};

export default PopulerClasses;