import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Project_items } from "./Project_items";


export const Youtube_items = ({ searchTerm }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); //Error handling




  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Youtube API key
    const PLAYLIST_ID = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID; // Playlist link to fetch data
    const MAX_RESULTS = 6;  // Max search is 6, it is very expensive API...
    console.log("API_KEY:", API_KEY);
    console.log("PLAYLIST_ID:", PLAYLIST_ID);
    
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube videos");
        }
        return res.json();
      })
      .then((data) => {
        const formatted = data.items.map((video) => ({
          // Assign data to project_item structure
          title: video.snippet.title,
          description: "",
          imgUrl: video.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
        }));
        setVideos(formatted);
      })
      .catch((err) => {
        console.error("YouTube fetch error:", err);
        setError("Unable to load YouTube videos.");
      });
  }, []);

  // Search function
  const filtered = videos.filter(video =>
    (video.title && video.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (video.description && video.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <>
      {filtered.map((video, index) => (
        <Project_items key={index} {...video} />
      ))}
    </>
  );
};