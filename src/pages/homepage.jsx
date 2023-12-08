// src/HomePage.js
import React from 'react';
import Login from '../components/login';
import Register from '../components/regist';


const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Your Homepage</h1>
      </header>
      <main>
      <div className="w-25 text-end d-none d-lg-block">
            <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#Login">Login</button>
            <Login />
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSignIn">Sign-up</button>
            <Register/>
          </div>
      </main>
    </div>
  );
};

export default HomePage;





