import React from 'react';

const Noticia = ({noticia}) => (
    <div className="col s12 m6 l4">
        <div className="card">
            <div className="card-image">
                <img src={noticia.urlToImage} alt={noticia.title}/>
                <span className="card-title">{noticia.source.name}</span>
            </div>
            <div className="card-content">
                <p><strong>{noticia.title}</strong></p>
                <p>{noticia.description}</p>
            </div>
            <div className="card-action">
                <a 
                    target="_blank"
                    rel="noopener noreferer noreferrer"
                    className="waves-effect waves-light btn"
                    href={noticia.url}>
                    Ver noticia completa
                </a>
                
            </div>
        </div>
    </div>
)
 
export default Noticia;