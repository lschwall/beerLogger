import React from 'react';
import { useHistory } from 'react-router-dom';
import Logout from '../Authentication/Logout.jsx';

const Home = () => {

          return (
                    <div>
                              Welcome to the home page
                              <Logout />
                    </div>
          )
}

export default Home
