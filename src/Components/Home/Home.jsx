import React from 'react';
import Logout from '../Authentication/Logout.jsx';
import Recipe from '../Inputs/Recipe.jsx';

const Home = () => {

    return (
        <div>
            Welcome to the home page
            <Logout />
            <Recipe />
        </div>
    )
}

export default Home
