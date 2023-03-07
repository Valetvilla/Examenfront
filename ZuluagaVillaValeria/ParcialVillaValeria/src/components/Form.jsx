import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        calorFavorito:''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length < 3 && user.calorFavorito !== '') {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

    return(
        <div>Dime tu cancion favorirta
            <form on onSubmit={handleSubmit}>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>                <input type="Color favorito" onChange={(e) => setUser({...user, calorFavorito: e.target.value})}/>
            <input type="text" value={user.colorFavorito} onChange={(e) => setUser({...user, calorFavorito: e.target.value})}/> 
                <button>Enviar</button>
                {err && 'Por favor chequea que la información sea correcta'}
            </form>
            {show  && <Card nombre={user.nombre} colorFavorito={user.calorFavorito}/>}

            <Card/>
        </div>
    )
}

export default Form