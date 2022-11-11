import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import NewCard from "./components/NewCard/NewCard";

function App() {
  return (
    <>
     <Navbar title="Comision 13i" bgStyle="bg-primary" />
     <div className="container d-flex align-items-center justify-content-center flex-column mt-5">
      <Card alumno="Leandro" info="Informacion del alumno" nota={6} />
      <Card alumno="Melisa" info="Informacion del alumno"/>
      <NewCard />
     </div>
    </>
  );
}

export default App;
