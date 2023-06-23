import { useState } from "react";

export default function SearchBar({ setSearchTerm, searchTerm, imageSearch }) {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="SearchBar">
                <input type="text" onChange={(event) => setSearch(event.target.value)} />
                <button onClick={() => setSearchTerm(search) & console.log(searchTerm)}>Search</button>
            </div>
        </>
        
    )
}