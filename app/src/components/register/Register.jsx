import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <div className='container'>
            <div className="form__container">
                <div className="form__title">+ Voluntariado</div>
                <input className="form__input form__input-user" type="text" name="user" id="user" placeholder="Usuario" />
                <input className="form__input form__input-email" type="email" name="email" id="email" placeholder="Correo" />
                <input className="form__input form__input-password" type="password" name="password" id="password" placeholder="Contraseña" />
                
                <Link className="form__btn form__btn-login" to={"/login"}><input  type="button"  value="Registrar" /></Link>
                <p className='form__links'>¿Ya tienes una cuentas? Inicia sesión
                    <Link to={'/login'}> aquí</Link>
                </p>
                <img className='form__img-logo' src={logo} alt="Logo" />
            </div>
        </div>


    );
}