import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, className, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`custom-button ${className || ''}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
