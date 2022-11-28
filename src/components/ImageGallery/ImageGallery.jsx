import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImagesList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImagesList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
};
