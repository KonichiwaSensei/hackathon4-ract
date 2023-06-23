import { Link } from "react-router-dom";
import { ImageContext } from "./ImageContext";
import { useContext } from "react";

export default function SearchResult({ imageSearch, page, setPage }) {

    const { imageSize } = useContext(ImageContext);

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
                            <img key={search.id} src={search.urls.raw + `&w=${imageSize}&h=${imageSize}`} alt={search.alt_description} />
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