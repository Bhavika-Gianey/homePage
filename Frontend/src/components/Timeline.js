
import React, {useEffect, useState} from 'react';
// import '../../App.css';

export  function Achievements() {

  const [achievements, setAchievements] = useState([{
    
    name: '', 
    month: '',
    year: '', 
    description: ''
    


  }])

  

  useEffect(() => {
    fetch('http://localhost:8080/achievements')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setAchievements(jsonRes))
  },[])

  return (
    <div className="container">
      {achievements.map(achievement => (
      <div>
        <h1>{achievement.name}</h1>
        {/* whatever accordingly */}
      </div>
      ))}
    </div>
  )
}


export  function Events() {

  const [events, setEvents] = useState([{
    
    name: '', 
    date: '',
    month: '',
    year: '',
    day: '',
    time: '',
    venue: ''
  }])

  useEffect(() => {
    fetch('http://localhost:8080/events')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setEvents(jsonRes))
  })

  return (
    <div className="container">
      {events.map(event => (
      <div>
        <h1>{event.name}</h1>
        
      </div>
      ))}
    </div>
  )
}
