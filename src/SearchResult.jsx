export default function SearchResult({ imageSearch }) {

    // const images = {imageSearch};

    return (
        <>
            {images === ""
                ? ''
                :
                images.map(search =>
                    <img src={search.links.download} alt={search.alt_description} />
                    
                )}
        </>
    )
}