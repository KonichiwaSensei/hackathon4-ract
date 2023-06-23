import { Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import Author from './Author.jsx';
import { acessKey } from './keys.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function API() {

    const [imageSearch, setImageSearch] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const {term} = useParams();

    const url = `https://api.unsplash.com/search/photos?per_page=12&query=${searchTerm}&client_id=${acessKey}`

    const fetchAPI = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setImageSearch(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        if (searchTerm) {
            fetchAPI()
        }
    }, [searchTerm])

    return (
        <>
        <Routes>

            <Route path="/" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path="/search" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path='/search/:term' element={<SearchResult imageSearch={imageSearch} />} />
        </Routes>
        </>
    )

}