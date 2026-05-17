"use client";
import { useScramble } from "use-scramble";

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ScrambleText({ text, className, style }: Props) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 2, //randomness of chars
    seed: 3,
  });

  return (
    <span
      ref={ref}
      onMouseEnter={replay}
      className={className}
      style={style}
    />
  );
}