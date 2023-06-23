import { Link } from "react-router-dom";

export default function SearchResult({ imageSearch, page, setPage }) {

    const changePage = (change) => {
        setPage(Math.max(page + change, 1))
    }

    return (
        <>
            <Link to="/">
                <button>Back</button>
            </Link>
            <br />
            {imageSearch === ""
                ? <div>Loading...</div>
                :
                imageSearch.map(search =>
                    <>
                        <Link to={`/author/${search.user.username}`}>
                            <img key={search.id} src={search.links.download} alt={search.alt_description} />
                        </Link>
                        
                    </>
                )}
            <>
            <br />
                {page > 1
                    ?
                    <button onClick={() => changePage(-1)}>Prev</button>
                    :
                    ''
                }
                <div>Showing page: {page}</div>
                <button onClick={() => changePage(+1)}>Next</button>
            </>
        </>
    )
}