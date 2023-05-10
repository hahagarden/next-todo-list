'use client';
import { useState } from 'react';

export default function Welcome() {
  const messages = ['Yeah, just do it :)', 'Hi, how are you?'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const handleMessageClick = () => {
    setCurrentMessageIndex((prev) => {
      if (prev === messages.length - 1) return 0;
      else return prev + 1;
    });
  };

  return <div onClick={handleMessageClick}>{messages[currentMessageIndex]}</div>;
}
