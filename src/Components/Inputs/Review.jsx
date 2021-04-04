import React from 'react'

const Review = () => {
          return (
                    <div>
                              <div>
                                        <label htmlFor="">Enter Beer name</label>
                                        <input
                                                  placeholder="Beer Name"
                                                  id="name"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="brewery">Name of Brewery</label>
                                        <input
                                                  placeholder="Brewery name"
                                                  id="brewery"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="score">Enter score (?/5)</label>
                                        <input
                                                  placeholder="?/5"
                                                  id="score"
                                        />
                              </div>
                              <div>
                                        <label htmlFor="review">Enter Review</label>
                                        <br />
                                        <textarea
                                                  rows="4"
                                                  cols='50'
                                                  type="textarea"
                                                  placeholder="Review here"
                                                  id="review"
                                        />
                              </div>
                              <button>
                                        Submit
                              </button>
                    </div>
          )
}

export default Review
