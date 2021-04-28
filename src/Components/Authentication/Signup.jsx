import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles/signup.scss'

//first_name, last_name, user_name, user_password, email

const Signup = () => {
    const history = useHistory();
    const [first, setFirst] = useState(null);
    const [last, setLast] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPass] = useState(null);
    const [email, setEmail] = useState(null);

    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const params = {
        firstName: first,
        lastName: last,
        password,
        email,
        username
    }

    const handleCredentialsChecker = () => {
        for (let p in params) {
            if (p.value === null) {
                window.alert('missing item')
            } else {
                handleRegistration();
            }
        }
    }

    const handleRegistration = () => {
        axios.post('/user/register', params)
            .then(({ data }) => {
                let token = data.token
                localStorage.setItem('token', token)
                history.push('/home')
            })
            .catch(err => console.warn(err))
    }

    return (
        <div className="signup">
            <h1>
                Sign up for Recipe Manager
            </h1>
            <p>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => { setFirst(e.target.value) }}
                    id="first"
                    required
                />
            </p>
            <p>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => { setLast(e.target.value) }}
                    id="last"
                    required
                />
            </p>
            <p>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    id="username"
                    required
                />
            </p>
            <p id="flex-paragraph">
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => { setPass(e.target.value) }}
                    id="password"
                    required
                />
                {/* <input type="checkbox" onClick={showPassword} /> */}
            </p>
            <p>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    id="email"
                    required
                />
            </p>
            <p className="submit">
                <input
                    type="submit"
                    name="commit"
                    value="Sign up"
                    onClick={handleRegistration}
                />
            </p>
            <p className="login-option">
                <Link to="/login">
                    Already have an account?
                </Link>
            </p>
        </div>
    )
}

export default Signup
