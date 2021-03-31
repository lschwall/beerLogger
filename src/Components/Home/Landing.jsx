import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
          return (
                    <div>
                              <Link
                                        to="/login"
                              >
                                        <button>
                                                  Login
                                        </button>
                              </Link>
                              <Link
                                        to="/signup"
                              >
                                        <button>
                                                  Signup
                                        </button>
                              </Link>
                    </div>
          )
}

export default Landing
