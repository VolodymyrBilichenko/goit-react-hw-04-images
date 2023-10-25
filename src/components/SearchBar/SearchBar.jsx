import { useEffect, useState } from 'react';
import { HeaderSearchBarStye } from './SearchBarStyle.styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllImages } from 'API/ImagesApi';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (searchQuery.trim() === '') {
            toast.info('Please fill in the input field')
            return;
        }
    }

    const handleInput = (evt) => {
        setSearchQuery(evt.target.value)
    }

    const handleSearch = async () => {
        try {
            setImages(await getAllImages(searchQuery));
            console.log(images);
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
        <div>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

            <HeaderSearchBarStye className="searchar">
            <form className="form" role="search" onSubmit={handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="search"
                    autoComplete="off"
                    placeholder="Search images"
                    onChange={handleInput}
                    value={searchQuery}
                />
            </form>
            </HeaderSearchBarStye>
        </div>
    )
}
