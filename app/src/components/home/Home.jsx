import NavBar from '../navbar/NavBar';
import './homeStyle.css';
import Content from '../content/Content';



export const ExplorerNav = () => {
    return (
        <div className='explorer'>
            <ItemExplorer name="Gestión" fn={() => document.location.href = '/management'}/>
            <ItemExplorer name="Cerrar sesión" fn={() => document.location.href = '/login'}/>
            <ItemExplorer name="Otros..." />
        </div>
    );
}

const ItemExplorer = ({ name, fn }) => {
    return (
            <input className='explorer__item' type="submit" value={name} onClick={fn}/>
    );
}

export const Home = () => {
    return (
        <div className="home__container">
            <NavBar />
            <Content con={<ExplorerNav />}>
            </Content>
        </div>
    );
}