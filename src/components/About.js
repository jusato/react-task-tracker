import { Link } from 'react-router-dom' //para podermos usar <Link> </> abaixo e não fazer reload na página quando mudarmos para 'http://../about'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default About
