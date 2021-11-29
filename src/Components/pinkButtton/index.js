import './style.css';
import { useNavigate } from 'react-router-dom';

function PinkButton(props) {
    const navigate = useNavigate();

    function handleClickEntrar() {
        navigate('/home');
    }

    return <button className="pink-button" type="submit" onClick={handleClickEntrar}>{props.message}</button>
}

export default PinkButton