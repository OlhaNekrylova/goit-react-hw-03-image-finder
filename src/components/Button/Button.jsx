import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({children, onClick}) => {
    return (
        <div>
            <button onClick={onClick}
                type="button"
                className={css.loadMoreBtn} > 
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
