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
