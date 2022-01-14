import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Login from './Login';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <div>
        <NavBar />
        {/* <Signup />
        <Login /> */}
      </div>
      <Outlet />
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
};

export default App;
