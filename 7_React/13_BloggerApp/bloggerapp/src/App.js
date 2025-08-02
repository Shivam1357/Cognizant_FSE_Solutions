import { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('books');

  let componentToShow;
  if (view === 'books') {
    componentToShow = <BookDetails />;
  } else if (view === 'blogs') {
    componentToShow = <BlogDetails />;
  } else {
    componentToShow = <CourseDetails />;
  }

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setView('books')}>Show Books</button>
      <button onClick={() => setView('blogs')}>Show Blogs</button>
      <button onClick={() => setView('courses')}>Show Courses</button>
      <hr />
      {componentToShow}
    </div>
  );
}

export default App;
