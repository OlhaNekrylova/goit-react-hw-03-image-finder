import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SimpleLightbox from "simplelightbox";
import 'react-toastify/dist/ReactToastify.css';
import "simplelightbox/dist/simple-lightbox.min.css";

export default class App extends React.Component {
  state = {

  }

  render () {
    return (
      <>
      <ToastContainer  autoClose={3000}/>
      </>
    )
  }

}



