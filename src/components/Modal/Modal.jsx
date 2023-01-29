import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    static propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    };

    // state = {
    //     largeImageURL: null,
    //     tags: null, 
    // };

    componentDidMount() {
        window.addEventListener('keydown', this.hadleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hadleKeyDown);
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }
    
    render() {
        const { largeImageURL,tags } = this.state;
        return createPortal(
            <div class={css.overlay}>
                <div class={css.modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot,
        );
    };
};