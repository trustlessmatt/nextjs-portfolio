import { useView } from "@/providers/ViewProvider";
import { FC, useEffect, useState } from "react";

interface DecodingTextProps {
  text: string;
  duration?: number;
  className?: string;
}

const randomChar = () => String.fromCharCode(33 + Math.random() * (126 - 33));

const DecodedText: FC<DecodingTextProps> = ({
  text,
  duration = 2000,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState<string>(
    "".padEnd(text.length, "\u00A0")
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { hasRun, setHasRun } = useView();

  useEffect(() => {
    if (hasRun) {
      setDisplayedText(text);
      return;
    }

    if (currentIndex < text.length) {
      let charInterval: number;
      let nextCharTimeout: number;

      // Randomly change the character at the current index
      charInterval = window.setInterval(() => {
        setDisplayedText((oldDisplayed) =>
          oldDisplayed
            .split("")
            .map((char, index) =>
              index === currentIndex ? randomChar() : char
            )
            .join("")
        );
      }, 70); // Rate of character shuffle

      // Set a timeout for when to stop shuffling the current character and move to the next one
      nextCharTimeout = window.setTimeout(() => {
        clearInterval(charInterval);
        setDisplayedText((oldDisplayed) =>
          oldDisplayed
            .split("")
            .map((char, index) =>
              index === currentIndex ? text.charAt(index) : char
            )
            .join("")
        );
        setCurrentIndex(currentIndex + 1);
      }, duration / text.length); // Duration each character is shuffled before resolving

      return () => {
        clearInterval(charInterval);
        clearTimeout(nextCharTimeout);
      };
    } else {
      setHasRun(true);
    }
  }, [currentIndex, text, duration, hasRun]);

  return (
    <p className={`text-white font-base-b ${className}`}>{displayedText}</p>
  );
};

export default DecodedText;
