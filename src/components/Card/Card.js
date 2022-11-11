import React, { useEffect, useState } from 'react';

const Card = ({alumno, info, nota}) => {
  const [status, setStatus] = useState();
  const [newNota, setNewNota] = useState();
  

  const calcularNota = () => {
    if(nota >= 6) {
      setStatus("Aprobado");
    } else if(nota < 6) {
      setStatus("Desaprobado");
    } else {
      setStatus("Ausente")
    }
  }

  const handleChange = (e) => {
    setNewNota(e.target.value);
  }

  useEffect(() => {
    const calcularNota2 = () => {
      if(newNota >= 6) {
        setStatus("Aprobado");
      } else {
        setStatus("Desaprobado");
      }
    }
    calcularNota2();
  },[newNota]);
  

  return (
    <div className="card" style={{width: '50vw'}}>
      <div className="card-body">
        <h5 className="card-title">{alumno}</h5>
        <p className="card-text">{info}</p>
        {
          nota
          ? <div className="w-100 text-end">
              <button className="btn btn-primary" onClick={calcularNota}>Calcular nota: {status}</button>
            </div>
          : <div className="d-flex justify-content-between">
              <input className="form-control w-25" type="text" placeholder="Ingrese la nota" onChange={(e) => handleChange(e)} />
              <span>{status}</span>
            </div>
        }
        
      </div>
    </div>
  )
}

export default Card;
