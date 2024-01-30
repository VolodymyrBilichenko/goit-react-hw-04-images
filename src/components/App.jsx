import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getAllImages } from 'API/ImagesApi';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState(12);

  const handleSearch = async (query) => {
    try {
      setImages(await getAllImages(query, perPage));
    } catch (error) {
      console.error('Помилка отримання зображень:', error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      handleSearch(searchQuery);
    }
  }, [searchQuery, perPage]);

  return (
    <>
      <GlobalStyle />

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      <ImageGallery imagesLi={images} />
    </>
  );
};
