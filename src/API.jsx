import { Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import Author from './Author.jsx';
import { acessKey } from './keys.js';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageContext } from './ImageContext.js';
import Header from './Header.jsx';
import ImageDetail from './ImageDetail.jsx';


export default function API() {

    const imageTwo = useContext(ImageContext)

    // console.log(imageTwo);

    const [imageSearch, setImageSearch] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const [page, setPage] = useState(1);

    const {term, username} = useParams();

    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${searchTerm}&client_id=${acessKey}`

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
    }, [searchTerm, page])

    return (
        <>
        <Header />
        <h1>Awesome Unsplash Picture Page</h1>
        
        <Routes>
            <Route path="/" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path="/search" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path='/search/:term' element={<SearchResult imageSearch={imageSearch} page={page} setPage={setPage}/>} />
            <Route path="/author" element= {<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path='/author/:username' element={<Author /> } />
            <Route path='/image/:id' element={<ImageDetail />} />
        </Routes>
        </>
    )

}