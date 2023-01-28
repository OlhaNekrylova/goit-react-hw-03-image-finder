import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css';

export default class SearchBar extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        searchImageName: '',
    }

    handleImageNameChange = event => {
        this.setState({searchImageName: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchImageName.trim() === '') {
            return toast.info('enter the query text');
        }
        this.props.onSubmit(this.state.searchImageName);
        this.setState({ searchImageName: '' });
    };

    render () {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit}
                    className={css.form}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}>Search</span>
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };

}