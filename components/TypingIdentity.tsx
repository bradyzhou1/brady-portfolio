"use client";

import { useEffect, useState } from "react";

const identities = [
  "Researcher",
  "Developer",
  "Musician",
  "Student Leader",
  "Caring brother to an austic sibling"
];

export default function TypingIdentity() {
  const [identityIndex, setIdentityIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentIdentity = identities[identityIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && displayedText === currentIdentity) {
      delay = 1500;
    }

    if (isDeleting && displayedText === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentIdentity.length) {
          setDisplayedText(
            currentIdentity.slice(0, displayedText.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else if (displayedText.length > 0) {
        setDisplayedText(
          currentIdentity.slice(0, displayedText.length - 1)
        );
      } else {
        setIsDeleting(false);
        setIdentityIndex(
          (currentIndex) => (currentIndex + 1) % identities.length
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayedText, identityIndex, isDeleting]);

  return (
    <p className="typingIdentity" aria-label="Student researcher, developer, and musician">
      {/* <span className="typingPrefix">I am </span> */}
      <span className="typingText">{displayedText}</span>
      <span className="typingCursor" aria-hidden="true">
        |
      </span>
    </p>
  );
}