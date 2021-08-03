import React from 'react'

export default function quesoCard({queso}) {
    return (
        <div>
            <h1 className='card-title'>{queso.name}</h1>
                <h2 className='card-restaurant'>{queso.restaurant}</h2>
                <p className='card-description'>{queso.description}</p>
                <a href={queso.location} className='queso-location'>{queso.restaurant}</a>
        </div>
    )
}
