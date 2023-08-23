"use client";

import fluidPlayer from "fluid-player";
import { useEffect, useRef } from "react";

const VideoPlayer = (params: { videoUrl: string; autoPlay: boolean }) => {
  let self = useRef(null);
  let player: any = null;

  useEffect(() => {
    if (!player) {
      player = fluidPlayer(self.current!, {
        layoutControls: {
          primaryColor: "#6d28d9",
          fillToContainer: true,
          //   title: "My Video",
          allowDownload: false,
          playbackRateEnabled: true,
          allowTheatre: false,
          autoPlay: params.autoPlay,
          miniPlayer: {
            enabled: false,
          },
          subtitlesEnabled: true,
          //   logo: {
          //     imageUrl:
          //       "https://res.cloudinary.com/doa2rj1yw/image/upload/v1692263079/samples/cloudinary-icon.png",
          //     position: "top right",
          //     clickUrl: null,
          //     opacity: 0.5,
          //   },
          controlBar: {
            autoHide: true,
            autoHideTimeout: 3,
            animated: true,
          },
          doubleclickFullscreen: true,
          controlForwardBackward: {
            show: false, // Default: false,
            doubleTapMobile: true, // Default: true
          },
        },
      });
    }
  });

  return (
    <>
      <video ref={self}>
        <source
          src={params.videoUrl}
          data-fluid-hd
          title="1080p"
          type="video/mp4"
        />
        <source
          src={params.videoUrl}
          data-fluid
          title="480p"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default VideoPlayer;
