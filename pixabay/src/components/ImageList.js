import React from 'react';
import Image from './Image';
const ImageList = ({imgs}) => {
    return (
        <div className="col-12 p-5 row">
            {imgs.map(img => (
                <Image 
                    key={img.id}
                    img={img}
                />
            ))}
        </div>
    );
}
 
export default ImageList;