import React from 'react';

export default function CourseDetails() {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - {course.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
