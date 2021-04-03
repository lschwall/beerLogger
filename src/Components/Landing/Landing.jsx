import React from 'react'
import { Link } from 'react-router-dom';
import './landing.scss'

const Landing = () => {
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
