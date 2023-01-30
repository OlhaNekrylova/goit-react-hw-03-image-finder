import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pokemonAPI from '../../services/imagesApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import css from './App.module.css';

export default class App extends React.Component {
  state = {
    page: 1,
    perPage: 12,
    searchImage: '',
    showModal: false,
    largeImageURL: null,
    images: null,
    error: null,
    status: 'idle',
  };

  // componentDidUpdate(prevProps, prevState) {
  //       if (
  //           prevState.page !== this.state.page || 
  //           prevState.searchImage !== this.state.searchImage 
  //       ) {
  //         pokemonAPI
  //         .fetchImages()
  //         .then(images => this.setState({ images, status: 'resolved' }))
  //         .catch(error => this.setState({ error, status: 'rejected'}));
  //       }

  //   };

  loadMore = () => {
      this.setState(prevState => ({
          page: prevState.page + 1,
      }));
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: 'largeImageURL' });
  };

  render () {
    const {showModal, largeImageURL, tags} = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery onClick={this.toggleModal} images={this.images} />
        <Button onClick={this.loadMore} />
        {showModal && <Modal onClose={this.toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>}
        <ToastContainer theme="colored" position="top-right" autoClose={3000}/>
      </div>
    );
  };

};



