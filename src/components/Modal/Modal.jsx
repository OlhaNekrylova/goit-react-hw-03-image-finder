import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        onClose: PropTypes.func,
        children: PropTypes.node.isRequired
        // largeImageURL: PropTypes.string.isRequired,
        // tags: PropTypes.string.isRequired,
    };

    // state = {
    //     largeImageURL: null,
    //     tags: null, 
    // };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
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
        // const { largeImageURL,tags } = this.state;
        return createPortal(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {this.props.children}
                    {/* <img src={largeImageURL} alt={tags} /> */}
                </div>
            </div>,
            modalRoot,
        );
    };
};