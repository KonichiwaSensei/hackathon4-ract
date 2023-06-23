import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ setSearchTerm }) {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="SearchBar">
                <input type="text" onChange={(event) => setSearch(event.target.value)} />
                <Link to={`/search/${search}`}>
                <button onClick={() => setSearchTerm(search)}>Search</button>
                </Link>

            </div>
            
        </>
        
    )
}