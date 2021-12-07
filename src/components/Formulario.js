

export default function Formulario() {
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
                />
                
                <label htmlFor="">Nombre del propietario</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del propietario de la mascota"
                />

                <label htmlFor="">Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"                    
                />

                <label htmlFor="">Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"                    
                />

                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                >

                </textarea>

            </form>
        </>
    )
}

