import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = (onClick) => {
    return (
        <div>
            <button onClick={this.loadMore}
                type="button"
                className={css.loadMoreBtn} > 
                Load more
            </button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
