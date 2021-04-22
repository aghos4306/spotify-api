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
            <label className="dropdown-label">{props.label}</label>       
            <select value={props.selectedValue} onChange={dropdownChanged} className="dropdown-select">
                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown