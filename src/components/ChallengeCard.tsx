import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Zap, Wand2, RefreshCw } from 'lucide-react';

import { Challenge, CHALLENGES } from '../data/challenges';
import { getChallengesForDomainAndCategory } from '../data/domainChallenges';

interface ChallengeCardProps {
  challenge: Challenge;
  onStartTimer: (durationMinutes: number) => void;
  onUpdateChallenge: (newChallenge: Challenge) => void;
  selectedDomainId: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  onStartTimer,
  onUpdateChallenge,
  selectedDomainId,
}) => {
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(challenge);

  // Keep internal active challenge updated if prop changes from external spin
  useEffect(() => {
    setActiveChallenge(challenge);
  }, [challenge]);

  const handleSpinPrompt = () => {
    // Filter prompts matching current category and domain
    const sameCategory = getChallengesForDomainAndCategory(
      selectedDomainId,
      activeChallenge.category
    );
    let nextPrompt: Challenge | undefined;

    if (sameCategory.length > 1) {
      const candidates = sameCategory.filter((c) => c.id !== activeChallenge.id);
      nextPrompt = candidates[Math.floor(Math.random() * candidates.length)] || sameCategory[0];
    } else {
      nextPrompt = sameCategory[0];
    }

    if (!nextPrompt) return;

    setActiveChallenge(nextPrompt);
    onUpdateChallenge(nextPrompt);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto mt-10 text-center flex flex-col items-center"
    >
      {/* Prompt Display Box with Fade Left to Right Transition */}
      <div className="relative w-full flex flex-col items-center min-h-[160px] justify-center overflow-hidden py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChallenge.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex flex-col items-center"
          >
            {/* Hero Title */}
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#F6F2EB] tracking-wide leading-snug max-w-xl">
              {activeChallenge.title}
            </h2>

            {/* Category Specific Visual Extensions */}

            {/* Describe an Image */}
            {activeChallenge.category === 'Describe an Image' && activeChallenge.imageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md my-6 overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#13131A]"
              >
                <img
                  src={activeChallenge.imageUrl}
                  alt={activeChallenge.title}
                  className="w-full h-56 sm:h-64 object-cover hover:scale-102 transition-transform duration-500"
                />
              </motion.div>
            )}

            {/* Forbidden Words */}
            {activeChallenge.category === 'Forbidden Words' && activeChallenge.items && (
              <div className="my-5 flex flex-wrap justify-center gap-2">
                {activeChallenge.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-rose-300 bg-rose-950/30 border border-rose-500/20 line-through"
                  >
                    {item.replace('Forbidden: ', '')}
                  </span>
                ))}
              </div>
            )}

            {/* 3 Random Words pills if distinct from title */}
            {activeChallenge.category === '3 Random Words' && activeChallenge.items && (
              <div className="flex flex-wrap justify-center gap-2 my-4">
                {activeChallenge.items.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded-full text-xs font-medium text-[#F6F2EB] bg-[#13131A] border border-white/10"
                  >
                    {word}
                  </span>
                ))}
              </div>
            )}

            {/* Rapid Fire Questions */}
            {activeChallenge.category === 'Rapid Fire' && activeChallenge.items && (
              <div className="w-full max-w-lg my-5 text-left p-5 rounded-2xl bg-[#13131A] border border-white/5 space-y-2.5">
                {activeChallenge.items.map((question, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-[#A8A2B8] font-light">
                    {question}
                  </p>
                ))}
              </div>
            )}

            {/* Challenge Description / Prompt */}
            <p className="text-sm sm:text-base text-[#A8A2B8] font-light leading-relaxed max-w-lg mt-4 mb-2 min-h-[48px]">
              {activeChallenge.prompt}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Spin Prompt Button - Placed directly below the prompt description */}
      <div className="mt-4 mb-8 flex justify-center z-10">
        <button
          onClick={handleSpinPrompt}
          id="btn-spin-prompt"
          className="py-2.5 px-5 rounded-full bg-[#13131A] border border-[#D8B46A]/40 text-xs font-semibold tracking-[0.16em] uppercase text-[#D8B46A] hover:bg-[#1A1A24] hover:border-[#D8B46A]/80 hover:shadow-[0_0_20px_rgba(216,180,106,0.2)] transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm active:scale-95"
          title="Generate a new prompt within this challenge category"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#D8B46A]" />
        </button>
      </div>

      {/* Clean Premium Apple/Linear-style Timer Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md z-10">
        {/* Button 1: Start 1 Minute Timer */}
        <button
          onClick={() => onStartTimer(1)}
          id="btn-1-min-timer"
          className="py-3.5 px-6 rounded-full bg-[#13131A] border border-white/10 text-xs font-medium tracking-[0.15em] uppercase text-[#F6F2EB] hover:bg-[#1A1A24] hover:border-[#D8B46A]/50 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-sm active:scale-98"
        >
       
          <span>Start 1 Minute Timer</span>
        </button>

        {/* Button 2: Start 10 Minute Research */}
        <button
          onClick={() => onStartTimer(10)}
          id="btn-10-min-timer"
          className="py-3.5 px-6 rounded-full bg-[#13131A] border border-[#D8B46A]/30 text-xs font-medium tracking-[0.15em] uppercase text-[#D8B46A] hover:bg-[#1A1A24] hover:border-[#D8B46A]/60 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-sm active:scale-98"
        >
         
          <span>Start 10 Minute Research</span>
        </button>
      </div>
    </motion.div>
  );
};
