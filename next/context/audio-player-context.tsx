"use client";
import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import moment from "moment";
let deLocale = require("moment/locale/de");
// import { tracks } from "../data/tracks";
export interface Track {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
}

type Radiostate =
  | "playing"
  | "waiting"
  | "paused"
  | "aborted"
  | "canplay"
  | "loading";
interface AudioPlayerContextType {
  currentTrack: Track;
  setPlayerState: Dispatch<SetStateAction<Radiostate>>;
  playerState: Radiostate;
  setDuration: Dispatch<SetStateAction<number>>;
  duration: number;
  setTimeProgress: Dispatch<SetStateAction<number>>;
  timeProgress: number;
  setCurrentTrack: Dispatch<SetStateAction<Track>>;
  audioRef: MutableRefObject<HTMLAudioElement>;
  progressBarRef: MutableRefObject<HTMLInputElement>;
}
const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const tracks = [
  {
    title: "Rabe Stream",
    src: "https://stream.rabe.ch/livestream/rabe-hd.mp3.m3u",
    author: "Trinix ft Rushawn",
    //   thumbnail: trinix,
  },
];

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [playerState, setPlayerState] = useState("paused");
  const [duration, setDuration] = useState<number>(0);
  const [timeProgress, setTimeProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  // set global locale
  moment.updateLocale("de", deLocale);

  // if (audioRef.current !== null) {
  //   // console.log("audioRef.current");

  //   audioRef.current.addEventListener("", () => {
  //     console.log("onplaying");
  //     setIsWaiting(false);
  //   });
  //   audioRef.current.addEventListener("onWaiting", () => {
  //     console.log("onWaiting");
  //     setIsWaiting(true);
  //   });
  // }

  const contextValue = {
    currentTrack,
    setCurrentTrack,
    playerState,
    setPlayerState,
    duration,
    setDuration,
    timeProgress,
    setTimeProgress,
    audioRef,
    progressBarRef,
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
