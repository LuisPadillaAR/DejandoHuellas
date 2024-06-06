import './contentStyle.css'

const Content = (props) => {
    const { con } = props;
    return (
        <div className='content'> 
            {con}
        </div>
    );
}

export default Content;
