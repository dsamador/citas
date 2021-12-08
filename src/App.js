import {useState} from 'react';

import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y guarde la nueva
  const crearCita = (cita)=> {
    guardarCitas([...citas, cita]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = (id)=> {
    guardarCitas(citas.filter(cita => cita.id !== id));
  }

  //Mensaje condicional


  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{citas.length <= 0 ? 'No hay citas para mostrar' : 'Administra tus citas'}</h2>
            {citas.map(cita=>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
