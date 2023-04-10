import video from "./video.mp4";
import ReactPlayer from "react-player";

export const Video = ({ playing, onEnded }) => {
  return (
    <ReactPlayer
      controls
      style={{ display: playing ? "block" : "none", objectFit: "cover" }}
      width="100%"
      height="100%"
      playing={playing}
      onEnded={onEnded}
      url={video}
    />
  );
};
