"use client";

import fluidPlayer from "fluid-player";
import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  let self = useRef(null);
  let player: any = null;

  useEffect(() => {
    if (!player) {
      player = fluidPlayer(self.current!, {
        layoutControls: {
          primaryColor: "#28B8ED",
          fillToContainer: true,
        },
      });
    }
  });

  return (
    <>
      <video ref={self}>
        <source
          src="https://cdn.fluidplayer.com/videos/valerian-1080p.mkv"
          data-fluid-hd
          title="1080p"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default VideoPlayer;
