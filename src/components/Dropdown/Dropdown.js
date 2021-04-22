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
        <div className="col-sm-6 form-group row px-0">     
            <label className="form-label col-sm-2">{props.label}</label>       
            <select value={props.selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown