import React, { useState } from 'react';
import './dropdown.css'

const Dropdown = props => {

    const [selectedDropValue, setSelectDropValue] = useState('')

    const handleOnChange = (e) => {
        setSelectDropValue(e.target.value)
    }

    return (
        <div className="container">
            <select value={selectedDropValue} onChange={handleOnChange}>
               {props.options.map((item, index) => 
               <option key={index} value={item.value}>
                   {item.name}
               </option>)}
            </select>
            <p>{selectedDropValue}</p>
        </div>
    )
}

export default Dropdown