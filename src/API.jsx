import { Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import Author from './Author.jsx';
import { acessKey } from './keys.js';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageContext } from './ImageContext.js';

export default function API() {

    const imageTwo = useContext(ImageContext)

    console.log(imageTwo);

    const [imageSearch, setImageSearch] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const {term, username} = useParams();

    const url = `https://api.unsplash.com/search/photos?per_page=12&query=${searchTerm}&client_id=${acessKey}`

    const fetchAPI = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setImageSearch(data.results);
        // console.log(data.results);
    }

    useEffect(() => {
        if (searchTerm) {
            fetchAPI()
        }
    }, [searchTerm])

    return (
        <>
        <h1>Awesome Picture Page</h1>
        <Routes>
            <Route path="/" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path="/search" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path='/search/:term' element={<SearchResult imageSearch={imageSearch} />} />
            <Route path="/author" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path='author/:username' element={<Author /> } />
        </Routes>
        </>
    )

}