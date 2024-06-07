
import NavBar from "../navbar/NavBar";
import './managementStyle.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="management__menu">
            <Item name="Crear paciente"/>
            <Item name="Consultaer pacientes"/>
            <Item name="Crear atención"/>
            <Item name="Consultar atención"/>
        </div>
    )
}

const Item = ({ name }) => {
    return (
        <Link className="menu__item" href="#">{name}</Link>
    );
}

const Management = () => {
    return (
        <div className="management__content">
            <NavBar />
        </div>
    );
}

export default Management;