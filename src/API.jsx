import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import Author from './Author.jsx';
import { acessKey } from './keys.js';
import { useEffect, useState } from 'react';

export default function API() {

    const [imageSearch, setImageSearch] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${acessKey}`

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
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <SearchResult imageSearch={imageSearch} />
            
        </>
    )

}