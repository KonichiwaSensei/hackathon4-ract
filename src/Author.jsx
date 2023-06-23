import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Author = () => {
  const { username } = useParams();
  const [author, setAuthor] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const authorResponse = await fetch(
          `https://api.unsplash.com/users/${username}?client_id={YOUR_ACCESS_KEY}`
        );
        const authorData = await authorResponse.json();
        setAuthor(authorData);

        const imagesResponse = await fetch(
          `https://api.unsplash.com/users/${username}/photos?client_id={YOUR_ACCESS_KEY}`
        );
        const imagesData = await imagesResponse.json();
        setImages(imagesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthorData();
  }, [username]);

  if (!author) {
    return <div>Loading author details...</div>;
  }

  return (
    <div>
      <h2>{author.name}</h2>
      <p>Bio: {author.bio}</p>
      <p>Location: {author.location}</p>
      <p>Total Downloads: {author.total_downloads}</p>
      <p>Total Likes: {author.total_likes}</p>

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
    </div>
  );
};

export default Author;
