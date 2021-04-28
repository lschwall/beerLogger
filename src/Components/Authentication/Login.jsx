import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './styles/login.scss';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');

    // handles all login functionality
    const params = { username, password }
    const handleLoginCredentials = () => {
        axios.post(`/user/login`, params)
            .then(({ data }) => {
                if (data === 'non-user') {
                    window.alert('Please Register')
                    history.push('/signup')
                } else {
                    let token = data
                    localStorage.setItem('token', token)
                    history.push('/home')
                }
            })
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        if (!localStorage.token) {
            return;
        }
        history.push('/home')
    })

    return (
        <div className="login">
            <h1>
                Login to Recipe Manager
            </h1>
            <p>
                <input
                    type="text"
                    name="login"
                    placeholder="Username"
                    onChange={(e) => { setUsername(e.target.value) }}
                />
            </p>
            <p>
                <input
                    type="password"
                    name="login"
                    placeholder="Password"
                    onChange={(e) => { setPass(e.target.value) }}
                />
            </p>
            <p className="submit">
                <input
                    type="submit"
                    name="commit"
                    value="Login"
                    onClick={handleLoginCredentials}
                />
            </p>
            <p className="signup-option">
                <Link to="/signup">
                    Create Account
                </Link>
            </p>
        </div>
    )
}

export default Login
