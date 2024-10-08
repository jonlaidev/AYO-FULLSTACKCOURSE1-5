import React from 'react';
import Course from './Course';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 100, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 1, id: 3 }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;