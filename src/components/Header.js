import PropTypes from 'prop-types'
import Button from './Button' //importando componente Button declarado em Button.js para usar aqui

const Header = ({ title, onAdd, showAdd }) => { //para poder pegar props title
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color='green' //também podia fazer color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />    {/* passando props color, text e onClick para Button em Button.js*/}
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
