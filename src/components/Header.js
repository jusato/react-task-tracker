import PropTypes from 'prop-types'
import Button from './Button' //importando componente Button declarado em Button.js para usar aqui

const Header = ({ title }) => { //para poder pegar props title
    const onClick = () => { //criando função para passar como "valor" da props onClick passada para Button 
        console.log('vc clicou')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />    {/* passando props color, text e onClick para Button em Button.js*/}
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
