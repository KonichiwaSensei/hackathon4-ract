import { Link } from "react-router-dom";

export default function SearchResult({ imageSearch }) {


    return (
        <>
            <Link to="/">
                <button>Back</button>
            </Link>
            <br />
            {imageSearch === ""
                ? ''
                :
                imageSearch.map(search =>
                    <>
                        <img key={search.id} src={search.links.download} alt={search.alt_description} />

                    </>
                )}

        </>
    )
}