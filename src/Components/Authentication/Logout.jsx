import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
          const history = useHistory();

          //handles all logout functionality
          const handleLogout = () => {
                    localStorage.clear();
                    history.push('/');
          }
          return (
                    <div>
                              <button onClick={handleLogout}>
                                        Logout
                              </button>
                    </div>
          )
}

export default Logout
