"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface IRedoAnimTextProps {
  delay: number;
}

function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const texts = [
    "a programmer.",
    "a web developer.",
    "a designer.",
    "an innovator.",
    "a COMPUTER SCIENTIST!"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);

  return <motion.span className="inline">{displayText}</motion.span>;
}

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-accent"
    />
  );
}


interface IAnimTextProps {
  delay: number;
}

export function AnimText({ delay }: IAnimTextProps) {
  const baseText = "I am ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, 0, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className="text-xl text-accent">
      {baseText} <motion.span>{displayText}</motion.span>
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}