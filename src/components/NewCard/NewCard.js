import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";


const NewCard = () => {
  //A traves de props modificar la url de la api para poder traer distintos alumnos
  const [alumno, setAlumno] = useState({});

  useEffect(() => {
    axios.get(baseUrl)
    .then((response) => {
      setAlumno(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="card" style={{width: '50vw'}}>
    <div className="card-body">
      <h5 className="card-title">{alumno.title}</h5>
      <p className="card-text">{alumno.body}</p>
    </div>
  </div>
  )
}

export default NewCard;