import { Component } from 'react';
import { Modal } from 'components/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem key={id} onClick={this.toggleModal}>
          <GalleryImg src={webformatURL} alt={tags} />
        </GalleryItem>

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
