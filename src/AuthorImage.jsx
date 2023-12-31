import { useContext, useEffect, useState } from "react";
import { acessKey } from "./keys";
import { Link } from "react-router-dom";
import './style.scss';
import { ImageContext } from "./ImageContext";

export default function AuthorImage({ username, author }) {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const { imageSize } = useContext(ImageContext);

    const url = `https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=12&client_id=${acessKey}`

    const imagesResponse = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data)
        // console.log(data);
    }

    useEffect(() => {
        imagesResponse()
    }, [page])


    const changePage = (change) => {
        setPage(Math.max(page + change, 1))
    }


    return (
        <>
            <h3>Images by {author.name}</h3>
            <div>
                {images.map((image) => (
                    <Link key={image.id} to={`/image/${image.id}`}>
                    <img
                        key={image.id}
                        src={image.urls.raw  + `&w=${imageSize}&h=${imageSize}`}
                        alt={image.alt_description}
                    />
                    </Link>
                ))}
            </div>
            <>
                {page > 1
                    ?
                    <button className="BackButton" onClick={() => changePage(-1)}>Prev</button>
                    :
                    ''
                }
                <div>Showing page: { page }</div>
                <button className="BackButton" onClick={() => changePage(+1)}>Next</button>
            </>
        </>
    )
}