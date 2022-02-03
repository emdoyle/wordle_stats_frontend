import React, { useRef } from "react";

export type LoopingVideoProps = {
  delay?: number;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

export const LoopingVideo: React.FC<LoopingVideoProps> = ({
  delay,
  ...props
}) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const immediatePlay = () => {
    if (videoElement.current !== null) {
      videoElement.current.play();
    }
  };
  const delayedPlay = () => {
    setTimeout(immediatePlay, delay);
  };
  return <video {...props} ref={videoElement} onEnded={delayedPlay} />;
};
