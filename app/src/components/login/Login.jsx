import logo from '../../assets/logo.png';
import { Link, Navigate } from 'react-router-dom';
import './loginStyle.css'
import { useRef, useState } from 'react';
import axios from 'axios'

export const Login = () => {


    const [user, setUser] = useState("")
    const [pass, setPass ] = useState("")
    const [us, setUs] = useState()

    const log = async () => {
        await axios.get(`http://localhost:3030/users/${user}`)
        .then((e) => {
            console.log(e.data);
            console.log(e.data.password);
            console.log(pass);
            
            if (pass == e.data.password) {
                console.log('correcto');
               window.location.href = '/'

            } else {
                console.log('error');
                alert('usuario o contraseña incorrecta');
            }
        }) 
        .catch((err) => {
            console.log(err.response.status)
            alert('usuario no encontrado');
    })
    }

    return (
        <div className='container'>
            <div className="form__container">
                <div className="form__title">Bienvenido Voluntariado</div>
                <input className="form__input form__input-user" type="text" name="user" id="user" onChange={(e) => setUser(e.target.value)} placeholder="Usuario" />
                <input className="form__input form__input-password" type="password" onChange={(e) => setPass(e.target.value) }  id="password" placeholder="Contraseña" />
                <Link className='form__btn form__btn-login' onClick={log} >Iniciar</Link>
                <p className='form__links'>¿No tienes una cuentas? Entra
                    <Link to={'/register'}> aquí</Link>
                </p>
                <img className='form__img-logo' src={logo} alt="Logo" />
            </div>
        </div>

    );
}