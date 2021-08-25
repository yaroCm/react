import React,{Fragment,useState} from 'react'
import Carrito from './components/Carrito';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from './components/Producto';
function App() { 
  //obtener fecha 
  const fecha=new Date().getFullYear();
  //Crear listado de productos 
  const [productos,setProducto]=useState([
    {
      id:1,
      nombre:"Camisa",
      precio:50
    },
    {
      id:2,
      nombre:"Pantalon",
      precio:60
    },
    {
      id:3,
      nombre:"Tennis",
      precio:70
    },
    {
      id:4,
      nombre:"Calcetas",
      precio:80
    },
  ]);
  const [carrito,setCarrito]=useState([]);
  return (
    <Fragment>
      <Header
        titulo="Tienda Virtual"
        numero={20}
      />
      <Header
        titulo="Lista de productos"
      />
      {productos.map(producto=>(
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
