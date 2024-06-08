import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './loginStyle.css'

export const Login = () => {

    const login = () => {
        document.location.href = '/';
    }

    return (
        <div className='container'>
            <div className="form__container">
                <div className="form__title">Bienvenido Voluntariado</div>
                <input className="form__input form__input-user" type="text" name="user" id="user" placeholder="User" />
                <input className="form__input form__input-password" type="password" name="password" id="password" placeholder="Password" />
                <Link className='form__btn form__btn-login' to={'/'}>Login</Link>
                {/* <input className="form__btn form__btn-login" type="button" value="Login" onClick={login} /> */}
                <p className='form__links'>¿No tienes una cuentas? Entra
                    <Link to={'/register'}> aquí</Link>
                </p>
                <img className='form__img-logo' src={logo} alt="Logo" />
            </div>
        </div>

    );
}