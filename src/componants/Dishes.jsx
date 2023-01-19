import React, {useState} from 'react';
import data from "../data";

const Dishes = ({name, description, price}) => {
    return (
        <>
                <li className='card'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h5>{price} $</h5>
                </li>      
    
        </>
     );
}
 
export default Dishes;