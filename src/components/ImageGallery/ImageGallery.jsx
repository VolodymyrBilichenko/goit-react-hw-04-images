import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({imagesLi}) => {
    console.log('xxx', imagesLi);
  return (
    <ImageGalleryStyle>
      {imagesLi.hits?.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem 
          key={id} 
          webformatURL={webformatURL} 
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImageGalleryStyle>
  );
};