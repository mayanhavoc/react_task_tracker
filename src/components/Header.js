import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}


// Props
// Header.defaultProps = {
//     title: 'Task Tracker'
// }

// Header.propTypes = {
//     title: PropTypes.string,
// }


// CSS in JS
// const headingStyle = {color: 'white', backgroundColor: 'black' }

export default Header
