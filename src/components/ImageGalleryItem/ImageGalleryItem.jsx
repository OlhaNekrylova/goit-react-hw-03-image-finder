import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags }) => {
    return (
        <li className={css.galleryItem}>
            <img src={webformatURL} alt={tags} 
            className={css.imageGalleryItemImage}/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

