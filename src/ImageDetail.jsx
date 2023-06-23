import { useEffect, useState } from "react";
import { acessKey } from "./keys";
import { Link, useParams } from "react-router-dom";

export default function ImageDetail() {

    const [image, setImage] = useState(null);

    const { id } = useParams();

    // console.log(id);

    const url = `https://api.unsplash.com/photos/${id}?client_id=${acessKey}`

    const imageDetail = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setImage(data)
        console.log(data);
    }

    useEffect(() => {
        imageDetail()
    }, [])

    return (
        <>

            {image === null
                ? <div>Loading...</div>
                :
                <>
                    <Link to={`/author/${image.user.username}`}>
                        <button>Back to Search</button>
                    </Link>
                    <div key={image.id}>
                        <h3>User: {image.user.username}</h3>
                        <p>Image description: {image.description}</p>
                        <p>Downloads: {image.downloads} | Likes: {image.likes}</p>
                        <a href={image.links.html}>
                            <img style={{ width: '50%' }} src={image.urls.raw} alt={image.alt_description} />
                        </a>
                    </div>
                </>
            }

        </>
    )
}