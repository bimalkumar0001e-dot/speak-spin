import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Dices, RefreshCw, ChevronDown, Check } from 'lucide-react';
import { Challenge, CHALLENGES } from '../data/challenges';
import { getChallengesForDomain, getChallengesForDomainAndCategory } from '../data/domainChallenges';
import { soundManager } from '../utils/audio';

const UNIQUE_CATEGORIES = Array.from(new Set(CHALLENGES.map((c) => c.category)));

interface SlotReelProps {
  onSelectChallenge: (challenge: Challenge | null) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
  selectedChallenge: Challenge | null;
  triggerScreenShake: () => void;
  selectedDomainId: string;
}

export const SlotReel: React.FC<SlotReelProps> = ({
  onSelectChallenge,
  isSpinning,
  setIsSpinning,
  selectedChallenge,
  triggerScreenShake,
  selectedDomainId,
}) => {
  const [currentDisplayChallenge, setCurrentDisplayChallenge] = useState<Challenge>(
    CHALLENGES[0]
  );
  const [revealFlash, setRevealFlash] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync displayed challenge if selectedChallenge changes from outside (e.g. Spin Prompt or Domain change)
  useEffect(() => {
    if (selectedChallenge) {
      setCurrentDisplayChallenge(selectedChallenge);
    }
  }, [selectedChallenge]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCategory = (categoryName: string) => {
    setIsDropdownOpen(false);
    if (isSpinning) return;

    const matching = getChallengesForDomainAndCategory(selectedDomainId, categoryName);
    if (matching.length > 0) {
      const chosen = matching[Math.floor(Math.random() * matching.length)];
      setCurrentDisplayChallenge(chosen);
      onSelectChallenge(chosen);
      setRevealFlash(true);
      soundManager.playMagicalLandingSound();
      setTimeout(() => {
        setRevealFlash(false);
      }, 1200);
    }
  };

  const handleSpinClick = () => {
    if (isSpinning) return;
    setIsDropdownOpen(false);

    // Reset current selection for re-spin
    onSelectChallenge(null);
    setIsSpinning(true);
    setRevealFlash(false);
    soundManager.playWhooshSound();

    // Prepare random pool based on selected domain
    const pool = getChallengesForDomain(selectedDomainId);
    const targetChallenge = pool[Math.floor(Math.random() * pool.length)];

    let speed = 50; // ms per tick
    let ticks = 0;
    const totalTicks = 32;

    const spinInterval = () => {
      ticks++;
      const randomTemp = pool[Math.floor(Math.random() * pool.length)];
      setCurrentDisplayChallenge(randomTemp);
      soundManager.playTickSound();

      // Progressive slowdown curve
      if (ticks > totalTicks - 12) {
        speed += 35;
      } else if (ticks > totalTicks - 6) {
        speed += 60;
      }

      if (ticks < totalTicks) {
        setTimeout(spinInterval, speed);
      } else {
        // Final landing
        setCurrentDisplayChallenge(targetChallenge);
        onSelectChallenge(targetChallenge);
        setIsSpinning(false);
        setRevealFlash(true);
        soundManager.playMagicalLandingSound();
        triggerScreenShake();

        setTimeout(() => {
          setRevealFlash(false);
        }, 1200);
      }
    };

    spinInterval();
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      {/* Dim Overlay during spin */}
      <AnimatePresence>
        {isSpinning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Slot Machine Display Frame */}
      <div
        className={`relative z-30 w-full rounded-2xl p-6 bg-[#13131A] border transition-all duration-300 ${revealFlash
          ? 'border-[#D8B46A] reveal-flash'
          : isSpinning
            ? 'border-[#D8B46A]/40 shadow-lg'
            : 'border-white/10'
          }`}
      >
        {/* Inner Slot Window */}
        <div
          ref={dropdownRef}
          className="relative w-full h-32 rounded-xl bg-[#0C0C0F] overflow-hidden flex items-center justify-center px-6 border border-white/5"
        >
          {/* Top & Bottom Soft Fade Lines */}
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0C0C0F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0C0C0F] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Challenge Title with Inline Dropdown Arrow */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentDisplayChallenge.id + (isSpinning ? Math.random() : '')}
              initial={{ y: isSpinning ? -40 : 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: isSpinning ? 40 : 0, opacity: 0 }}
              transition={{
                duration: isSpinning ? 0.05 : 0.4,
                ease: isSpinning ? 'linear' : [0.16, 1, 0.3, 1],
              }}
              className="text-center z-10 px-4 py-2 max-w-full flex items-center justify-center"
            >
              <button
                type="button"
                id="btn-category-dropdown"
                onClick={() => !isSpinning && setIsDropdownOpen(!isDropdownOpen)}
                disabled={isSpinning}
                className={`group font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-[#F6F2EB] tracking-[0.18em] uppercase text-center leading-snug flex items-center justify-center gap-2 transition-colors duration-200 ${isSpinning ? 'cursor-default' : 'cursor-pointer hover:text-[#D8B46A]'
                  }`}
                title="Click to select challenge category"
              >
                <span>{currentDisplayChallenge.category}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#D8B46A] shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'
                    }`}
                />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Animated Category Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-2 top-2 bottom-2 z-30 bg-[#13131A]/95 backdrop-blur-md rounded-lg border border-[#D8B46A]/40 shadow-2xl p-2 flex flex-col gap-1"
              >
                <div className="px-3 py-1 text-[10px] uppercase font-semibold tracking-widest text-[#D8B46A] border-b border-white/10 flex justify-between items-center">
                  <span>Available Challenges</span>
                  <span className="text-white/40">{UNIQUE_CATEGORIES.length} Categories</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 overflow-y-auto max-h-[85px] pr-1 custom-scrollbar">
                  {UNIQUE_CATEGORIES.map((cat) => {
                    const isSelected = currentDisplayChallenge.category === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
                        className={`px-3 py-1.5 rounded-md text-left text-xs font-cinzel font-semibold tracking-wider transition-all duration-150 flex items-center justify-between cursor-pointer ${isSelected
                          ? 'bg-[#D8B46A]/20 text-[#D8B46A] border border-[#D8B46A]/50'
                          : 'text-[#F6F2EB]/90 hover:bg-white/5 hover:text-[#D8B46A]'
                          }`}
                      >
                        <span className="truncate">{cat}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#D8B46A] shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Apple / Linear Style Spin Button */}
      <div className="relative z-30 mt-7">
        <button
          onClick={handleSpinClick}
          disabled={isSpinning}
          id="btn-spin-quest"
          className={`px-8 py-3.5 rounded-full bg-[#13131A] border text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-sm active:scale-95 ${isSpinning
            ? 'border-[#D8B46A]/50 text-[#D8B46A] opacity-90 cursor-not-allowed'
            : 'border-[#D8B46A]/40 text-[#F6F2EB] hover:bg-[#1A1A24] hover:border-[#D8B46A]/80 hover:text-[#D8B46A]'
            }`}
        >
          {isSpinning ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
              >
                <Dices className="w-4 h-4 text-[#D8B46A]" />
              </motion.div>
              <span className="text-[#D8B46A]">DIVINING...</span>
            </>
          ) : selectedChallenge ? (
            <>

              <span>SPIN AGAIN</span>
            </>
          ) : (
            <>

              <span>SPIN</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

