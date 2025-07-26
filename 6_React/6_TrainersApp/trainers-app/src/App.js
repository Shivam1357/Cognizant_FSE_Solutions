import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import TrainerList from './trainerList';
import TrainerDetail from './trainerDetail';

function App() {
  return (
    <> 
      <h1>My Academy Trainers App</h1>
      <Link to={`/`}>Home</Link> |&nbsp;
      <Link to={`/trainers`}>Show Trainers</Link>
      <br/>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trainers' element={<TrainerList/>} />
        <Route path='/trainer/:id' element={<TrainerDetail/>} />
      </Routes>
    </>
  );
}

export default App;
