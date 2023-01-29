import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import css from './App.module.css';

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
      <div className={css.app}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.images} />
        <Button onClick={this.loadMore} />
        {showModal && <Modal onClose={this.toggleModal} >
          <img src={largeImageURL} alt={tags} />
        </Modal>}
        <ToastContainer  autoClose={3000}/>
      </div>
    );
  };

};



