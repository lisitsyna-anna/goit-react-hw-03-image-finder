import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <StyledModal>
          <img src={largeImageURL} alt={tags} width="850" />
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}
