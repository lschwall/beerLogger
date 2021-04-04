import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
                    <div>
                              <div className="parent">
                                        <div>
                                                  <div>
                                                            <label htmlFor="username">Enter Username</label>
                                                  </div>
                                                  <div>
                                                            <input
                                                                      placeholder="username"
                                                                      id="username"
                                                                      onChange={(e) => { setUsername(e.target.value) }}
                                                            />
                                                  </div>
                                        </div>
                                        <div>
                                                  <div>
                                                            <label htmlFor="password">Enter Password</label>
                                                  </div>
                                                  <div>
                                                            <input
                                                                      placeholder="password"
                                                                      type="password"
                                                                      id="password"
                                                                      onChange={(e) => { setPass(e.target.value) }}
                                                            />
                                                  </div>
                                        </div>
                                        <div>
                                                  <button onClick={handleLoginCredentials}>
                                                            Submit
                                                  </button>
                                        </div>
                              </div>
                    </div>
          )
}

export default Login
