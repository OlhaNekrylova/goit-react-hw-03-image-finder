import React from 'react';
import PropTypes from 'prop-types';
import pokemonAPI from '../../services/imagesApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader.jsx';
import css from './ImageGallery.module.css';


export default class ImageGallery extends React.Component {
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
            })
        ),
    };

    state = {
        images: null,
        error: null,
        status: 'idle',
    };

    componentDidUpdate(prevProps, prevState) {
        const prevImages = prevProps.images;
        const nextImages = this.props.images;

        if (prevImages !== nextImages) {
            this.setState({ status: 'pending' });

            pokemonAPI
                .fetchImages(nextImages)
                .then(images => this.setState({ images, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected'}));
        }
    };

    render () {
        const { images, error, status } = this.state;
        
        if (status === 'idle') {
            return <div>enter the query text</div>;
        }

        if (status === 'pending') {
            return <div>
                <Loader /> loading
                </div>;
        }

        if (status === 'rejected') {
            return <h1>{error.message}</h1>;
        }

        if (status === 'resolved') {
            return (
                <ul className={css.imageGallery}>
                    {images.map(({ id, webformatURL, largeImageURL, tags, onClick }) => (
                        <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                        onClick={onClick}
                        />
                    ))}
                </ul>
            );
        }
    };
};



