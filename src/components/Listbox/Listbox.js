import React from 'react'

const Listbox = props => {

    const clicked = (e) => {
        e.preventDefault()
        props.clicked(e.target.id)
    }

    return (
        <div className="container">
            <div className="list-group">
                {
                    props.items.map((item, idx) => 
                    <button key={idx} id={item.track.id} onClick={clicked} className="track-item">
                        {item.track.name}
                    </button>)
                }
            </div>
        </div>
    )
}

export default Listbox