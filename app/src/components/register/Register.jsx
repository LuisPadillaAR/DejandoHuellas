import axios from 'axios';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Register = () => {

    const [ user, setUser ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const create = async () => {
        await axios.post(`http://localhost:3030/users/create`, {
            user: user,
            email: email,
            password: password
        })
        .then(() =>  alert('creado'))
        .catch(() => console.log('error'))
    }
    return (
        <div className='container'>
            <div className="form__container">
                <div className="form__title">+ Voluntariado</div>
                <input className="form__input form__input-user" type="text" onChange={(e) => setUser(e.target.value)}  id="user" placeholder="Usuario" />
                <input className="form__input form__input-email" type="email" onChange={(e) => setEmail(e.target.value)}   id="email" placeholder="Correo" />
                <input className="form__input form__input-password" type="password" onChange={(e) => setPassword(e.target.value)}   id="password" placeholder="Contraseña" />
                
                <Link className="form__btn form__btn-login" to={"/login"}><input onClick={create}  type="button"  value="Registrar" /></Link>
                <p className='form__links'>¿Ya tienes una cuentas? Inicia sesión
                    <Link to={'/login'}> aquí</Link>
                </p>
                <img className='form__img-logo' src={logo} alt="Logo" />
            </div>
        </div>


    );
}