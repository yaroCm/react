import React,{Fragment,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({citas,setCitas}) => {
    const [error, setError] = useState(false)
    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const handleChange= e =>{
        console.log(e.target.value);
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }
    const {mascota,propietario,fecha,hora,sintomas}=cita;

    const submitCita= e =>{
        e.preventDefault();

        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()===''|| hora.trim()==='' || sintomas.trim()===''   ){
            setError(true);
            return;
        }
        setError(false);
        cita.id=uuidv4();

        setCitas([
            ...citas,
            cita
        ]);

        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });




    }
    
    

    return (  
        <Fragment>
            <h2>Crear cita</h2>
            {error? <p className="alerta-error">Todos los campos son obligatorios</p>:''}

            <form onSubmit={submitCita}>
                <label>Nombre de la mascota*</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño*</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha*</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora*</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas*</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Form;