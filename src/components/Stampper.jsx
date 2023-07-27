import React from 'react'
import Button from './Button'

const Stampper = () => {
  return (
    <form className="stampper">
    <h3>Your Progress 100%</h3>

    <div className="inp-lbl">
      <label htmlFor="total-duration">Total Duration: </label>
      <input type="text" name="total-duration" />
    </div>

    <div className="inp-lbl">
      <label htmlFor="you-watched">You watched: </label>
      <input type="text" name="you-watched" />
    </div>

    <div className="inp-lbl">
      <label htmlFor="you-left">You left: </label>
      <input type="text" name="you-left" />
    </div>

    <Button>Update Data</Button>
  </form>
  )
}

export default Stampper
