import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default class App extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };

  render () {
    const {showModal} = this.state;
    return (
      <>
      <SearchBar onSubmit={this.handleSubmit} />
      <ImageGallery images={this.images} />
      <Button onClick={this.loadMore} />
      {showModal && <Modal onClose={this.toggleModal} /> }
      <ToastContainer  autoClose={3000}/>
      </>
    );
  };

};



