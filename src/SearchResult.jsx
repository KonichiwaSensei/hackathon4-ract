export default function SearchResult({ imageSearch }) {


    return (
        <>
            {imageSearch === ""
                ? ''
                :
                imageSearch.map(search =>
                    <img key={search.id} src={search.links.download} alt={search.alt_description} />
                    
                )}
        </>
    )
}