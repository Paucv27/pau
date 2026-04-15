"use client";
import { createContext, useContext, useState, useRef, ReactNode } from "react";
import { Howl } from "howler";

interface AudioContextType {
  volume: number;
  muted: boolean;
  setVolume: (vol: number) => void;
  setMuted: (muted: boolean) => void;
  playSound: (soundName: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const sounds: Record<string, Howl> = {
  click: new Howl({ src: ['/sounds/click.mp3'], volume: 0.5 }),
  hover: new Howl({ src: ['/sounds/hover.mp3'], volume: 0.5 }),
  pop: new Howl({ src: ['/sounds/pop.mp3'], volume: 0.5 }),
  triangle: new Howl({ src: ['/sounds/triangle.wav'], volume: 0.5 }),
  item: new Howl({ src: ['/sounds/get-item.wav'], volume: 0.5 }),
};

export function AudioProvider({ children }: { children: ReactNode }) {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);

  const updateAllVolumes = (newVolume: number, isMuted: boolean) => {
    const vol = isMuted ? 0 : newVolume / 100;
    Object.values(sounds).forEach(sound => sound.volume(vol));
  };

  const playSound = (soundName: string) => {
    sounds[soundName]?.play();
  };

  // update volumes when settings change
  const handleSetVolume = (vol: number) => {
    setVolume(vol);
    updateAllVolumes(vol, muted);
  };

  const handleSetMuted = (mutedState: boolean) => {
    setMuted(mutedState);
    updateAllVolumes(volume, mutedState);
  };

  return (
    <AudioContext.Provider value={{
      volume,
      muted,
      setVolume: handleSetVolume,
      setMuted: handleSetMuted,
      playSound,
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
}