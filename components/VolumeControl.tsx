"use client";
import { useState } from "react";

export default function VolumeControl() {
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);

  const getComment = () => {
    if (muted) return "silent treatment";
    if (volume <= 5) return "honestly just mute me";
    if (volume <= 15) return "hi asmr enjoyer";
    if (volume <= 25) return "you deffo listen to rain sounds while sleeping";
    if (volume == 30) return "but so do I sometimes so I cant judge";
    if (volume <= 45) return "ok i guess";
    if (volume <= 49) return "atp just make it 50 so its a nice number";
    if (volume == 50) return "thank you";
    if (volume <= 64) return "this is just a weird range to be in ngl";
    if (volume == 67) return "please don't";
    if (volume == 69) return "...";
    if (volume <= 75) return "optimal volume imo";
    if (volume <= 90) return "this isn't too bad is it";
    if (volume == 100) return "maybe go get checked for hearing damage";
    return "professional upstairs neighbour";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-lg flex items-center justify-center
          border border-neutral-200 dark:border-neutral-700
          bg-white dark:bg-neutral-900
          text-neutral-500 dark:text-neutral-400
          hover:border-neutral-400 dark:hover:border-neutral-500
          transition-colors duration-200 font-mono text-sm"
        title="Volume control"
      >
        {muted || volume === 0 ? "×" : "♪"}
      </button>

      {open && (
        <div
          className="absolute top-10 left-0 z-50
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-700
            rounded-xl overflow-hidden"
          style={{ minWidth: "200px" }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-neutral-100 dark:border-neutral-800" style={{ padding: "10px ", paddingBottom: "5px"}}>
            <p className="font-mono text-xs text-neutral-900 dark:text-white font-medium">
              volume control
            </p>
            <p className="font-mono text-[10px] text-neutral-400 mt-0.5">
              don't ask why I made this
            </p>
          </div>

          {/* Mute toggle */}
          <div className="px-4 py-3 border-b border-neutral-100 dark:border-neutral-800
            flex items-center justify-between" style={{ padding: "5px "}}>
            <span className="font-mono text-xs text-neutral-600 dark:text-neutral-300">
              {muted ? "off" : "on"}
            </span>
            <button
              onClick={() => setMuted(m => !m)}
              className="w-8 h-4 rounded-full transition-colors duration-200 relative"
              style={{ background: muted ? "#d1d5db" : "var(--accent)" }}
            >
              <span
                className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-200"
                style={{ left: muted ? "2px" : "calc(100% - 14px)" }}
              />
            </button>
          </div>

          {/* Radio buttons 1–100 */}
          <div
            className="overflow-y-auto px-4 py-3 flex flex-col gap-1.5"
            style={{ maxHeight: "240px", opacity: muted ? 0.4 : 1, transition: "opacity 0.2s", padding: "5px"}}
          >
            {Array.from({ length: 100 }, (_, i) => i + 1).map(v => (
              <label
                key={v}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="volume"
                  disabled={muted}
                  checked={volume === v}
                  onChange={() => setVolume(v)}
                  className="cursor-pointer"
                  style={{ accentColor: "var(--accent)" }}
                />
                <span className="font-mono text-xs text-neutral-600 dark:text-neutral-300
                  group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  {v}
                </span>
              </label>
            ))}
          </div>

          {/* Comment */}
          <div className="px-4 py-2 border-t border-neutral-100 dark:border-neutral-800" style={{ padding: "5px "}}>
            <p className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 text-center">
              {getComment()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}