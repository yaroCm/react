import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Form from './components/Form';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI= async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=3e41e09904174e1fba05e05d34c67e94`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>
      <div className="container white">
        <Form
          setCategoria={setCategoria}
        ></Form>
        <ListadoNoticias
          noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
