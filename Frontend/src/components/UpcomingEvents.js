import React, {useEffect, useState} from 'react';
import './Section1.css';

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



  //Logic - Your UI was great!! We need to show just the upcoming events so for that we will fetch the list of events which satisfy following logic....if event's date - today's date >= 0 then show them else dont. Google for more details.

  return (
    <div className="container">
      {events.map(event => (
        <div className="row">
          <div className="col-8 col-s-12">
            <div className="col">
              <h1> About Us </h1>
            </div>
            <div className=' col col-12'>
                <p >For most people, the sky is the limit. For us, the sky is our home.”
      The Aero-modelling Club at IIT BHU, Varanasi since its inception has expanded exponentially with the introduction of innovative technologies, be it the IC engine planes, the autonomous drones or other awesome flying models. We fabricate, fix, and fly to satiate our passion. Our phenomenal stunts will readily capture your attention towards our hobby of aeromodelling - to fabricate a splendid flying machine of your own and soar high in the sky.</p>
            </div>
          </div>
          <div className="col-4 ">
            <div className='col col-s-6'>
               <h3>Upcoming Events</h3>
               <div className="event">
                  <ul>
                    <li className="inline">
                        <div className="time col-l-2">
                          <h3> {event.date} <br/><span>{event.month} </span></h3>
                        </div>
                        <div className="details">
                          <div className="name col-l-7">
                            <h3>{event.name}</h3>
                            <i className="fas fa-clock"> {event.time}</i>
                          </div>
                          <div className="join col-l-3">
                            <a href="#">Join</a>
                          </div>
                        </div>
                    </li>
                    <li className="inline">
                        <div className="time col-l-2">
                          <h3> {event.date} <br/><span>{event.month} </span></h3>
                        </div>
                        <div className="details">
                          <div className="name col-l-7">
                            <h3>{event.name}</h3>
                            <i className="fas fa-clock"> {event.time}</i>
                          </div>
                          <div className="join col-l-3">
                            <a href="#">Join</a>
                          </div>
                        </div>
                    </li>
                    <li className="inline">
                        <div className="time col-l-2">
                          <h3> {event.date} <br/><span>{event.month} </span></h3>
                        </div>
                        <div className="details">
                          <div className="name col-l-7">
                            <h3>{event.name}</h3>
                            <i className="fas fa-clock"> {event.time}</i>
                          </div>
                          <div className="join col-l-3">
                            <a href="#">Join</a>
                          </div>
                        </div>
                    </li>
                    <li className="inline">
                        <div className="time col-l-2">
                          <h3> {event.date} <br/><span>{event.month} </span></h3>
                        </div>
                        <div className="details">
                          <div className="name col-l-7">
                            <h3>{event.name}</h3>
                            <i className="fas fa-clock"> {event.time}</i>
                          </div>
                          <div className="join col-l-3">
                            <a href="#">Join</a>
                          </div>
                        </div>
                    </li>
                  </ul>
               </div>
            </div>

              <div className='col col-s-6'>
                 <h3>Past Events</h3>
                 <div className="event">
                    <ul>
                      <li className="inline">
                          <div className="time col-l-2">
                            <h3> {event.date} <br/><span>{event.month} </span></h3>
                          </div>
                          <div className="details">
                            <div className="name col-l-7">
                              <h3>{event.name}</h3>
                              <i className="fas fa-clock"> {event.time}</i>
                            </div>
                            <div className="join col-l-3">
                              <a href="#">Join</a>
                            </div>
                          </div>
                      </li>
                      <li className="inline">
                          <div className="time col-l-2">
                            <h3> {event.date} <br/><span>{event.month} </span></h3>
                          </div>
                          <div className="details">
                            <div className="name col-l-7">
                              <h3>{event.name}</h3>
                              <i className="fas fa-clock"> {event.time}</i>
                            </div>
                            <div className="join col-l-3">
                              <a href="#">Join</a>
                            </div>
                          </div>
                      </li>
                      <li className="inline">
                          <div className="time col-l-2">
                            <h3> {event.date} <br/><span>{event.month} </span></h3>
                          </div>
                          <div className="details">
                            <div className="name col-l-7">
                              <h3>{event.name}</h3>
                              <i className="fas fa-clock"> {event.time}</i>
                            </div>
                            <div className="join col-l-3">
                              <a href="#">Join</a>
                            </div>
                          </div>
                      </li>
                      <li className="inline">
                          <div className="time col-l-2">
                            <h3> {event.date} <br/><span>{event.month} </span></h3>
                          </div>
                          <div className="details">
                            <div className="name col-l-7">
                              <h3>{event.name}</h3>
                              <i className="fas fa-clock"> {event.time}</i>
                            </div>
                            <div className="join col-l-3">
                              <a href="#">Join</a>
                            </div>
                          </div>
                      </li>
                    </ul>
                 </div>
                </div>

          </div>
        </div>
      // <div>
      //   <h1>{event.name}</h1>
      //
      // </div>
      ))}
    </div>
  );
}
