import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Project_items } from "./Project_items";

export const Youtube_items = () => {
  const [videos, setVideos] = useState([]);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Get person youtube api
  const PLAYLIST_ID = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID; // Get specific playlist of videos
  const MAX_RESULTS = 6; // Set max items, this API is very expensive.... very limited free daily use...

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.items.map((video) => ({
          title: video.snippet.title,
          description: "", // Leave description empty
          imgUrl: video.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
        }));
        setVideos(formatted);
      });
  }, []);

  return (
    <Row>
      {videos.map((video, index) => (
        <Project_items key={index} {...video} />
      ))}
    </Row>
  );
};