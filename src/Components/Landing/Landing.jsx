import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Login from '../Authentication/Login.jsx'
import './landing.scss'

const Landing = () => {
    const history = useHistory()
    useEffect(() => {
        if (!localStorage.token) {
            return;
        }
        history.push('/home')
    })
    return (
        <div>
            <Login />
        </div>
    )
}

export default Landing
