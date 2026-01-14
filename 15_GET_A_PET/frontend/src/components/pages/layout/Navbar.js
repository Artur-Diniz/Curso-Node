import { addAbortListener } from 'events'
import { availableMemory } from 'process'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/img/logo192 copy.png'
// frontend\src\assets\img\logo192 copy.png

import { Context } from '../../../context/UserContext'

import styles from "../layout/Navbar.module.css"
import { useContext } from 'react'

function Navbar() {
    const { authenticated, logout } = useContext(Context)
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Link to="/">
                    <img src={Logo} alt="Get A Pet" ></img>

                </Link>
                <Link to="/">
                    <h2> Get A Pet</h2>

                </Link>

            </div>
            <ul>
                <li>
                    <Link to="/">Adotar</Link>
                </li>
                {authenticated ? (
                    <>
                        <li>
                            <Link to="/pets/MyPets">Meus Pets</Link>
                        </li>
                        <li>
                            <Link to="/user/Profile">Perfil</Link>
                        </li>
                        <li onClick={logout}>
                            <Link to="/">Sair</Link>
                        </li>
                    </>) :
                    (
                        <>
                            <li>
                                <Link to="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link to="/register ">Cadastrar</Link>
                            </li>
                        </>
                    )
                }

            </ul >
        </nav >
    )
}

export default Navbar