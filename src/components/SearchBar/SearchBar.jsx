import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css';

export default class SearchBar extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        page: 1,
        searchImage: '',
        images: [],
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (
    //         prevState.page !== this.state.page || 
    //         prevState.searchImage !== this.state.searchImage 
    //     ) {

    //     }

    // };

    handleImageNameChange = event => {
        this.setState({searchImage: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState ({
            page: 1,
            searchImage: event.target.elements.searchImage.value,
            images: [],
        });
        event.target.reset();

        if (this.state.searchImage.trim() === '') {
            return toast.info('The search string cannot be empty. Please specify your search query.');
        }
        this.props.onSubmit(this.state.searchImage);
        this.setState({ searchImage: '' });
    };

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
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