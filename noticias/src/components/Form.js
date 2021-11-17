import React from 'react';
import useSelect from '../Hooks/useSelect';
import styles from './Form.module.css'
const Form = ({setCategoria}) => {
    const OPCIONES=[
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deporte'},
        {value:'technology', label:'Tecnología'}

    ];
    const [categoria, SelectNoticias] = useSelect('general',OPCIONES);

    const buscarNoticias=e=>{
        e.preventDefault();
        setCategoria(categoria)
    }
    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Buscar"
                        />
                        
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default Form;