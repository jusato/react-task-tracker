import PropTypes from 'prop-types'
import Button from './Button' //importando componente Button declarado em Button.js para usar aqui
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => { //para poder pegar props title
    const location = useLocation()  //hooke do react-router-dom para saber a localização atual (vamos usar isso para tirar o botão Add da header quando tiver em '/about' e não na home)

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && ( //se estivermos na home, vamos mostrar o botão (&& é um atalho para ternary sem else)
                <Button //passando props color, text e onClick para Button em Button.js
                    color='green' //também podia fazer color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd}
                />)
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
