import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ largeImageURL,tags }) => {
    return (
        <div class={css.overlay}>
            <div class={css.modal}>
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Modal;