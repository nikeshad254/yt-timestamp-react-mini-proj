import React, { useEffect, useState } from 'react'
import Button from './Button'

const Stampper = ({video, updateData}) => {
  // console.log(video)
  const [total, setTotal] = useState(video.total_time)
  const [watched, setWatched] = useState(video.time_stamp)

  useEffect(() => {
    setTotal(video.total_time)
    setWatched(video.time_stamp)
  }, [video.total_time, video.time_stamp])

  function handleSubmit(e){
    e.preventDefault()
    // console.log(total, watched)
    
    const data = {
      total_time: total,
      time_stamp: watched,
    };
    updateData(data)
  }

  function formatTime(minutes) {
    // console.log(minutes)
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;
  }

  function stringToTime(str){
    // 10:00
    const [hours1, minutes1] = str.split(":").map(Number);
    const totalMinutes = hours1 * 60 + minutes1;
    // console.log("time: ", totalMinutes)
    return totalMinutes
  }

  function subtractTimes(time1, time2) {
  
    // Convert both times to minutes.
    const totalMinutes1 = stringToTime(time1);
    const totalMinutes2 = stringToTime(time2);
    let diff = totalMinutes1 - totalMinutes2;
  
    return formatTime(diff);
  }
  

  return (
    <form className="stampper" onSubmit={handleSubmit}>
    <h3>Your Progress 100% on {video.title}</h3>

    <div className="inp-lbl">
      <label htmlFor="total-duration">Total Duration: </label>
      <input type="text" name="total-duration" value={total} onChange={(e) => setTotal(e.target.value)} placeholder='enter as 20:00' />
    </div>

    <div className="inp-lbl">
      <label htmlFor="you-watched">You watched: </label>
      <input type="text" name="you-watched" value={watched} onChange={e => setWatched(wt => stringToTime(e.target.value)>stringToTime(total)? wt : (e.target.value.length<1)? "00:00": e.target.value )} placeholder='enter as 20:00'  />
    </div>

    <div className="inp-lbl">
      <label htmlFor="you-left">You left: </label>
      <input type="text" name="you-left" placeholder={subtractTimes(total, watched)}  disabled />
    </div>

    <Button>Update Data</Button>
  </form>
  )
}

export default Stampper
