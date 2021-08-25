import React from 'react'

const Producto = ({productos,producto,carrito,setCarrito}) => {
    const {nombre,id,precio}=producto;

    const addProduct=id=>{
        const product = productos.filter(producto=>producto.id===id)[0];
        setCarrito([...carrito,product]);
    }
    const deleteProduct=id=>{
        const productos =carrito.filter(producto=>producto.id!=id);
        setCarrito(productos);
    }
    return (  
       <div>
           <h2>{nombre}</h2>
           <p>${precio}</p>
           {productos?(
               <button 
               type="button"
               onClick={()=>addProduct(id)}>
                   Comprar
               </button>
           )
           :(
            <button 
            type="button"
            onClick={()=>deleteProduct(id)}>
                Eliminar
            </button> 
           )}
           
       </div>
    );
}
 
export default Producto;