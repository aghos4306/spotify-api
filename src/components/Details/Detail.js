import React from 'react'

const Detail = ({ album, artists, name }) => {
    return (
        <div className="container">
            <div className="image-details">
                <img src={album.images[0].url} alt={name} />
            </div>
            <div className="name-details">
                <label htmlFor={name}>{name}</label>
            </div>
            <div className="artist-detail">
                <label htmlFor={artists[0].name}>
                    {artists[0].name}
                </label>
            </div>
        </div>
    )
}

export default Detail