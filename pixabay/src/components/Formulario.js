import React from 'react';
import { useState } from 'react/cjs/react.development';
import Error from './Error';


const Formulario = ({setSearch}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const searchImage=e=>{
        
        e.preventDefault();

        if(value.trim()===''){
            setError(true);
            return;
        }

        setError(false);
        setSearch(value);

    };
    return (  
        <form
            onSubmit={searchImage}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange={e=>setValue(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error&&<Error mensaje="Debe ingresar algún valor"/>}
        </form>
    );
}
 
export default Formulario;