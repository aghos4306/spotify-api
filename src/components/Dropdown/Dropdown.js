import React from 'react';
import './dropdown.css'

const Dropdown = props => {
    return (
        <div className="container">
            <select>
               {props.options.map((item, index) => 
               <option key={index} value={item.value}>
                   {item.name}
               </option>)}
            </select>
        </div>
    )
}

export default Dropdown