'use client';

import ShineBorder from '@/components/ui/ShineBorder';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';
import { useState } from 'react';

const quotes = [
  'Every website starts with a single idea.',
  'Curiosity is what turned me from a user into a developer.',
  'I learn to build, and I build to learn.',
  'Every bug is another lesson.',
  'As long as we are still breathing, we are learning.',
  'Learning never stops.',
  'Patience is key.',
  'Every great project starts with a simple question.',
  'Never stop building.',
  'Every line of code is another step forward.',
  'Learning today, building tomorrow.',
  'Every expert was once a beginner.',
  'Stay curious. Keep exploring.',
  'The journey matters as much as the destination.',
  "Create something today that didn't exist yesterday.",
];

export default function Quotes() {
  const [quote, setQuote] = useState(quotes[0]);
  const [remainingQuotes, setRemainingQuotes] = useState(quotes.slice(1));

  const handleQuote = () => {
    const availableQuotes =
      remainingQuotes.length > 0 ? remainingQuotes : quotes;
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const nextQuote = availableQuotes[randomIndex];

    setQuote(nextQuote);
    setRemainingQuotes(
      availableQuotes.filter((_, index) => index !== randomIndex),
    );
  };

  return (
    <div id="quotes">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" Inspiring Quotes "'
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover={true}
          disabled={false}
        />
      </h1>

      <Title>Quotes</Title>

      <div className="text-center space-y-5 w-full">
        <ShineBorder
          shineColor={['#6366F1', '#A855F7', '#EC4899']}
          borderWidth={5}
          duration={14}
          className="rounded-tl-xl rounded-br-xl"
        >
          <div className="font-black">
            <p className="text-[20px] md:text-[30px] rounded-tl-xl rounded-br-xl h-30 p-5 md:p-10 flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 font-pixel!">
              &quot;{quote}&quot;
            </p>
          </div>
        </ShineBorder>
        <button
          type="button"
          className="btn btn-primary w-40 mx-auto"
          onClick={handleQuote}
        >
          Another One!
        </button>
      </div>
    </div>
  );
}
