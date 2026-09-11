"use client";
import React, { type JSX, useEffect, useState } from "react";
import { motion } from "motion/react";

export type TextScrambleProps = {
  children: React.ReactNode;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
};

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = "p",
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const childArray = React.useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  const letters = React.useMemo(() => {
    return childArray.flatMap((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child).split("");
      }
      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{
          children?: React.ReactNode;
        }>;
        return String(element.props.children ?? "").split("");
      }
      return [];
    });
  }, [childArray]);

  const [scrambledLetters, setScrambledLetters] = useState<string[] | null>(
    null,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const displayLetters = scrambledLetters ?? letters;

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      const progress = step / steps;

      const updatedLetters = letters.map((letter, i) => {
        if (letter === " ") return " ";

        if (progress * letters.length > i) {
          return letter;
        } else {
          return characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      });

      setScrambledLetters(updatedLetters);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setScrambledLetters(null);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger || letters.length === 0) return;
    scramble();
  }, [trigger, letters]);

  let globalCharIndex = 0;

  return (
    <MotionComponent className={className} {...props}>
      {childArray.map((child, childIndex) => {
        if (typeof child === "string" || typeof child === "number") {
          const textStr = String(child);
          const elements: React.ReactNode[] = [];

          for (let i = 0; i < textStr.length; i++) {
            const char = displayLetters[globalCharIndex];
            elements.push(
              <span key={`${childIndex}-${i}`} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>,
            );
            globalCharIndex++;
          }
          return elements;
        }

        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<{
            children?: React.ReactNode;
            className?: string;
          }>;
          const innerText = String(element.props.children ?? "");

          const renderedChars = innerText
            .split("")
            .map((_, i) => {
              const char = displayLetters[globalCharIndex];
              globalCharIndex++;
              return char === " " ? "\u00A0" : char;
            })
            .join("");

          return (
            <motion.span
              key={child.key ?? childIndex}
              className="inline-block"
              whileTap={{ y: -8 }}
              whileHover={{ y: -8 }}
            >
              {React.cloneElement(element, {
                children: renderedChars,
              })}
            </motion.span>
          );
        }

        return null;
      })}
    </MotionComponent>
  );
}
