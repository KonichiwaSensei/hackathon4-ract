import { useEffect, useState } from "react";
import { acessKey } from "./keys";
import { Link } from "react-router-dom";

export default function AuthorImage({ username, author }) {

    const [images, setImages] = useState([]);

    const url = `https://api.unsplash.com/users/${username}/photos?client_id=${acessKey}`

    const imagesResponse = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data)
        // console.log(data);
    }

    useEffect(() => {
        imagesResponse()
    }, [])



    return (
        <>
            <h3>Images by {author.name}</h3>
            <div>
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.urls.small}
                        alt={image.alt_description}
                    />
                ))}
            </div>
        </>
    )
}