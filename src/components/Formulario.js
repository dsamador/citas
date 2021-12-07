import {useState} from 'react';
export default function Formulario() {

    const [cita, actualizarCita] = useState({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    //Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return (
        <>
            <h2>Crear cita</h2>
            <form action="">
                <label htmlFor="">Nombre de mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                
                <label htmlFor="">Nombre del propietario</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del propietario de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label htmlFor="">Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}  
                    value={fecha}                
                />

                <label htmlFor="">Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}                  
                    value={hora}
                />

                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                ></button>
            </form>
        </>
    )
}

