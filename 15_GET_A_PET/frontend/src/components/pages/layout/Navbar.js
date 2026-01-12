import { addAbortListener } from 'events'
import { availableMemory } from 'process'
import { Link } from 'react-router-dom'

import Logo  from '../../../assets/img/logo192 copy.png'
// frontend\src\assets\img\logo192 copy.png

import styles from "../layout/Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Get A Pet" ></img>
                <h2> Get A Pet</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Adotar</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register ">Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar