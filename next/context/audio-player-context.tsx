"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useRef,
  MutableRefObject,
} from "react";
// import { tracks } from "../data/tracks";
export interface Track {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
}
interface AudioPlayerContextType {
  currentTrack: Track;
  setCurrentTrack: Dispatch<SetStateAction<Track>>;
  audioRef: MutableRefObject<HTMLAudioElement>;
}
const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const tracks = [
  {
    title: "Trinix ft Rushawn – Its a beautiful day",
    src: "http://stream.rabe.ch/livestream/rabe-hd.mp3.m3u",
    author: "Trinix ft Rushawn",
    //   thumbnail: trinix,
  },
];

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const contextValue = {
    currentTrack,
    setCurrentTrack,
    audioRef,
  };
  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
export const useAudioPlayerContext = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
