import React,{Fragment,useState,useEffect} from 'react'
import Cita from './components/Cita';
import Form from './components/Form';
import PropTypes from 'prop-types';
function App() {
  let citasIniciales=JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales=[];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(()=>{
   if(citasIniciales){
     localStorage.setItem('citas',JSON.stringify(citas));
   }else{
     localStorage.setItem('citas',JSON.stringify([]));
   }
  },[citas]);
  
  const deleteCita=id=>{
    const nuevo=citas.filter(cita=>cita.id!==id);
    setCitas(nuevo);
  }

  const titulo= citas.length===0?'No hay citas':'Administra tus citas';
  return (
    <Fragment>
      <h1>Administrador Pacientes</h1>
      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Form
            citas={citas}
            setCitas={setCitas}/>
          </div>
          
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>
        
        </div>

      </div>
    </Fragment>
  );
}
export default App;
