import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Style from './MyPets.module.css'


function MyPets() {
    const [pets, setPets] = useState([])

    return (
        < section >
            <div>
                <h1>MyPets</h1>
                <Link to="/pets/AddPet">Cadastrar Pet</Link>

            </div >
            <div>
                {pets.lenght > 0 && (
                    <p>meus pets Cadastrados</p>
                )}
                {pets.length === 0 && (
                    <p>não há Pets cadastrados</p>
                )}
            </div>
        </section >
    )
}

export default MyPets