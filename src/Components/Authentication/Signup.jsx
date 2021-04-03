import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import user from '../../../server/db/models/user';

//first_name, last_name, user_name, user_password, email

const Signup = () => {
          const history = useHistory();
          const [first, setFirst] = useState('');
          const [last, setLast] = useState('');
          const [username, setUsername] = useState('');
          const [password, setPass] = useState('');
          const [email, setEmail] = useState('');

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
                    <div>
                              <div>
                                        <label htmlFor="first">Enter first name</label>
                                        <input
                                                  placeholder="First Name"
                                                  onChange={(e) => { setFirst(e.target.value) }}
                                                  id="first"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="last">Enter last name</label>
                                        <input
                                                  placeholder="Last Name"
                                                  onChange={(e) => { setLast(e.target.value) }}
                                                  id="last"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="username">Enter a username (be creative!)</label>
                                        <input
                                                  placeholder="Username"
                                                  onChange={(e) => { setUsername(e.target.value) }}
                                                  id="username"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="password">Enter Password (8 characters minimum)</label>
                                        <input
                                                  placeholder="Password"
                                                  onChange={(e) => { setPass(e.target.value) }}
                                                  id="password"
                                                  type="password"
                                        />
                                        <input type="checkbox" onClick={showPassword} />Show Password
                              </div>
                              <div>
                                        <label htmlFor="email">Enter valid email</label>
                                        <input
                                                  placeholder="Email"
                                                  onChange={(e) => { setEmail(e.target.value) }}
                                                  id="email"
                                        />
                              </div>
                              <button onClick={handleRegistration}>
                                        Register
                              </button>
                    </div>
          )
}

export default Signup
