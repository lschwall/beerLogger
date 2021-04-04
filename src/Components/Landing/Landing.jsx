import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
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
                              <div className="parent">
                                        <div>

                                                  <Link
                                                            to="/login"
                                                  >
                                                            <button>
                                                                      Login
                                                            </button>
                                                  </Link>
                                        </div>
                                        <div>
                                                  <Link
                                                            to="/signup"
                                                  >
                                                            <button>
                                                                      Sign Up
                                                            </button>
                                                  </Link>
                                        </div>
                              </div>
                    </div>
          )
}

export default Landing
