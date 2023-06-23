import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { acessKey } from './keys';
import AuthorImage from './AuthorImage';

const Author = () => {
  const { username } = useParams();
  const [author, setAuthor] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchAuthorData = async () => {
      const authorResponse = await fetch(
        `https://api.unsplash.com/users/${username}?page=${page}&per_page=12&client_id=${acessKey}`
      );
      const authorData = await authorResponse.json();
      setAuthor(authorData);
      // console.log(authorData);
    };

    fetchAuthorData();
  }, [username]);

  if (!author) {
    return <div>Loading author details...</div>;
  }

  return (
    <>
      <Link to="/search/:term">
        <button>Back</button>
      </Link>
      <div key={author.id}>
        <h2>{author.name}</h2>
        <p>Bio: {author.bio}</p>
        <p>Location: {author.location}</p>
        <p>Total Downloads: {author.downloads}</p>
        <p>Followers: {author.followers_count}</p>
        <p>Total Likes: {author.total_likes}</p>
        <a href={`http://instagram.com/${author.social.instagram_username}`} target="_blank">Link to IG</a>
        <br />
        <AuthorImage author={author} username={username} />
      </div>
    </>
  );
};

export default Author;
