import React from 'react';
import './dropdown.css'

const Dropdown = props => {

    //const [selectedDropValue, setSelectDropValue] = useState('')

    /* const handleOnChange = (e) => {
        setSelectDropValue(e.target.value)
    } */

    const dropdownChanged = (e) => {
        props.changed(e.target.value)
    }

    return (
        <div className="container">
            <select value={props.selectedValue} onChange={dropdownChanged}>
               {props.options.map((item, idx) => 
               <option key={idx} value={item.id}>
                   {item.name}
               </option>)}
            </select>
            {/* <p>{props.selectedDropValue}</p> */}
        </div>
    )
}

export default Dropdown