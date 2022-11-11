import React from 'react';

const Navbar = ({title, bgStyle}) => {
  //PROPS -> ESTRUCTURAR LAS PROPS

  //{} -> DESESTRUCTURANDO
  // const { title } = props;

  //Comparacion if else con ternario
// {
//     if(bgStyle) {
//       // accion
//     } else if() {
//       //accion 2
//     }

//     bgStyle 
//     ? //accion
//     : //accion2
// }

  return (
    <nav className={`navbar ${bgStyle ? bgStyle : `bg-light`}`}>
      <div className="container-fluid">
        <span className="navbar-brand">{title}</span>
      </div>
    </nav>
  )
}

export default Navbar;
