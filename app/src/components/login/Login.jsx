import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './loginStyle.css'
import { useRef, useState } from 'react';
import axios from 'axios'

export const Login = () => {


    const [user, setUser] = useState("")
    const [us, setUs] = useState(null)

    const log = async () => {
        await axios.get(`http://localhost:3030/users/${user}`)
        .then((e) => {
            console.log(e.data.user);
            setUs(e.data)
            console.log(us.user);
        }) 
        .catch((err) => console.log(`no encontrado`))
       alert(user)
    }

    return (
        <div className='container'>
            <div className="form__container">
                <div className="form__title">Bienvenido Voluntariado</div>
                <input className="form__input form__input-user" type="text" name="user" id="user" onChange={(e) => setUser(e.target.value)} placeholder="Usuario" />
                <input className="form__input form__input-password" type="password" name="password" id="password" placeholder="Contraseña" />
                <Link className='form__btn form__btn-login' onClick={log} to={'/'}>Iniciar</Link>
                <p className='form__links'>¿No tienes una cuentas? Entra
                    <Link to={'/register'}> aquí</Link>
                </p>
                <img className='form__img-logo' src={logo} alt="Logo" />
            </div>
        </div>

    );
}