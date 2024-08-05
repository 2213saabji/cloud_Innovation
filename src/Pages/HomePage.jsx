import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <nav className="navbar" style={{
        display: 'flex',
        direction: 'column',
        alignItems: 'center',
        whiteSpace:"50px"
      }}>
        <h1 className="navbar-title" style={{marginLeft:"10px", marginRight:"10px"}}>MovieLibrary</h1>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" style={{marginLeft:"10px", marginRight:"10px"}}>Home</Link>
          <Link to="/login" className="navbar-link" style={{marginLeft:"10px", marginRight:"10px"}}>Login</Link>
        </div>
      </nav>
      <div style={{
        display: 'flex',
        direction: 'column',
      }}>
      <SideBar />
      <MovieList />
      </div>
    </div>
  );
};

export default HomePage;
