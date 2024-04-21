"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url="https://www.youtube.com/watch?v=IRRtwmVzwoM"
    />
  );
};

export default VideoPlayer;
