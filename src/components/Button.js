import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => { //pegando props color, text e onClick de Header.js
    
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'> {/*usando props onClick e color*/}
            {text}          {/*usando props text*/}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
