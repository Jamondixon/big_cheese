import React from 'react'


export default function QuesoContainer({quesos}) {
    const displayQuesos = () => {
        return quesos.map(queso => {
            return (
                <div keuy={queso.id} >
                    <h1 className='card-title'>{queso.name}</h1>
                    <h2 className='card-restaurant'>{queso.restaurant}</h2>
                    <p className='card-description'>{queso.description}</p>
                </div>
            )
        })

    }

    return (
        <div className="queso-container">
            {displayQuesos()}
        </div>
    )
}
