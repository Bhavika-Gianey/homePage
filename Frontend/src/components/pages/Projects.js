import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import '../../App.css';

export default function Projects() {

  const [projects, setProjects] = useState([{
    
    title: '', 
    type: '',
    imageUrl: '',
    description: '',
    longDescription: '',
    userId: '',
    sanitizedHtml: ''
  }])

  useEffect(() => {
    fetch('http://localhost:8080/projects')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setProjects(jsonRes))
  },[])

  return (
    <div className="container">
      {projects.map(project => (
      <div>
        <h1>{project.title}</h1>

        {/* id for detail page  */}
        <h1>{project._id}</h1> 
        
        <img src={project.imageUrl} alt="" srcset=""/>
        <h2>{project.description}</h2>
        {/* <div dangerouslySetInnerHTML={{__html:project.sanitizedHtml}}> */}

          <Link to={'/'+project._id}><button>Details</button></Link>
          
        {/* </div> */}
      </div>
      ))}
    </div>
  )
}
