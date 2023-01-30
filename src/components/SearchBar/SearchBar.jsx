import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { ImSearch } from "react-icons/im";
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

    
    handleChange = event => {
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
            return toast.info('Please, specify your search query.');
        }
        this.props.onSubmit(this.state.searchImage);
        this.setState({ searchImage: '' });
    };

    render () {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit}
                    className={css.searchForm}>
                    <button className={css.searchFormBtn}
                            type="submit">
                                {/* <ImSearch className={css.searchFormBtnLabel}/> */}
                        <span className={css.searchFormBtnLabel}>Search</span>
                    </button>
                    <input onChange={this.handleChange}
                        className={css.searchFormInput}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        name="searchImage"
                        value={this.searchImage}
                    />
                </form>
            </header>
        );
    };

}