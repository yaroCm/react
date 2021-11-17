import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Formulario from './components/Formulario';
import ImageList from './components/ImageList';

function App() {

  const [search, setSearch] = useState('');
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const previousPage = () => {
    const newPage = page -1;
    
    if( newPage === 0 ) return;
    
    setPage(newPage);
  };

  const nextPage = () => {
    const newPage = page +1;
    
    if(newPage > totalPages) return;

    setPage(newPage);
  
  };

  useEffect(() => {
    const consultAPI = async () => {
      if(search === '') return;

      const paginator = 36
      const key = '21470489-882b1bd342cc3ec58213f1ca0';

      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${paginator}&page=${page}`;

      const respond = await fetch(url);
      const result = await respond.json();

      setImgs(result.hits);

      setTotalPages(Math.ceil(result.totalHits/paginator));

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'});
    }
    consultAPI();
  }, [search,page]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario
          setSearch={setSearch}
        />
      </div>
      <div className="row justify-content-center">
        <ImageList
          imgs={imgs}
        />
        {page > 1 && 
        <button 
          type="button"
          className="btn btn-info mr-1"
          onClick={previousPage}>
            &laquo;  Anterior 
        </button>}
        
        {page < totalPages &&
        <button 
          type="button"
          className="btn btn-info mr-1"
          onClick={nextPage}>
            Siguiente &raquo;
        </button>}

      </div>
    </div>
  );
}

export default App;
