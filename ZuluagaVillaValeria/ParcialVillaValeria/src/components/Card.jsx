import React from 'react'

const Card = ({nombre, colorFavorito}) => {
    return (
        <div>
            <h2>Hola{nombre}, Se que tu color favorito es: {colorFavorito}</h2>
        </div>
    )
}

export default Card