import React, {useEffect, useState} from 'react';
import './section2.css';

export  function UEvents() {


  let newDate = new Date()
let dt = newDate.getDate();
let mnth = newDate.getMonth() + 1;
let yr = newDate.getFullYear();

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
    }).then((jsonRes) => {
      setEvents(jsonRes)})
  })

  

  events.sort(function (a, b) {
  return b.year - a.year || b.month - a.month|| b.date - a.date|| a.time - b.time;
});

  

  

  // events.sort(sortByProperty("month"));

  // events.sort(sortByProperty("date"));

    
   
  

  return (
    <div className="container">
      
      
          <div className="col-4 ">
            <div className='col col-s-6'>
               <h1 className="titlehead"><b>EVENTS</b></h1>
               <div className="event">
                  <ul className="eventsUl">

                  
                 {events.map(event => (
                  
                   
               
                    
                    

                    <li className="inline list">
                        <div className="time col-l-2">
                          <h3> {event.date} <br/><span>{event.month} </span><br/><span>{event.year} </span></h3>
                        </div>
                        <div className="details">
                          <div className="name col-l-7">
                            <h3>{event.name}</h3>
                            <i className="fas fa-clock"> {event.time} Hrs</i>
                          </div>
                          <div className="join col-l-3">
                            <a href="#">Join</a>
                          </div>
                        </div>
                    </li>
                    
                    
                    
                    ))}
                    
                       </ul>
                    </div>
            </div>
            </div>









             
            

          
        </div>
  
  );
}


// export  function PEvents() {


//   let newDate = new Date()
// let dt = newDate.getDate();
// let mnth = newDate.getMonth() + 1;
// let yr = newDate.getFullYear();

//   const [events, setEvents] = useState([{

//     name: '',
//     date: '',
//     month: '',
//     year: '',
//     day: '',
//     time: '',
//     venue: ''
//   }])

//   useEffect(() => {
//     fetch('http://localhost:8080/events')
//     .then(res => {
//       if(res.ok) {
//         return res.json()
//       }
//     }).then(jsonRes => setEvents(jsonRes))
//   })

    

  

//   return (
//     <div className="container">
      
      
        






//                    <div className="col-4 ">
//             <div className='col col-s-6'>
//                <h3>Past Events</h3>
//                  {events.map(event => (
//                <div className="event">
//                   <ul>
//                     <li className="inline">
//                         <div className="time col-l-2">
//                           <h3> {event.date} <br/><span>{event.month} </span></h3>
//                         </div>
//                         <div className="details">
//                           <div className="name col-l-7">
//                             <h3>{event.name}</h3>
//                             <i className="fas fa-clock"> {event.time}</i>
//                           </div>
//                           <div className="join col-l-3">
//                             <a href="#">Join</a>
//                           </div>
//                         </div>
//                     </li>
               
//                   </ul>
//                </div>
//             ))}
//             </div>
//             </div>



             
            

          
//         </div>
  
//   );
// }
