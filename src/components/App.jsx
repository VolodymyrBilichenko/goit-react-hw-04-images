import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./SearchBar/SearchBar";
import { getAllImages } from "API/ImagesApi";

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
        setImages(await getAllImages(searchQuery));
    } catch (error) {
        console.error('Помилка отримання зображень:', error);
    }
  }

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      handleSearch();
    }
  }, [searchQuery])

  return (
    <>
      <GlobalStyle />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <ImageGallery imagesLi={images}/>

    </>
  );
};
