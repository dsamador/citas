import {useState} from 'react';

export default function Formulario({crearCita}) {

    const [cita, actualizarCita] = useState({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Cuando se envia el formulario
    const submitCita = (e)=>{
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
        hora.trim() === '' || sintomas.trim() === '')
        {
            actualizarError(true)
        }
        //Eliminar el mensaje de error previo
        actualizarError(false);

        //Asignar un ID
        cita.id = JSON.stringify(new Date());
        console.log(cita)

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });

    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return (
        <>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Debes llenar todos los campos del formulario</p> : null}
            <form 
                onSubmit={submitCita}
            >
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
                >Enviar</button>
            </form>
        </>
    )
}

