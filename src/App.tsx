/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Volume2, VolumeX, HelpCircle, X, Sparkle } from 'lucide-react';
import { FloatingParticles } from './components/FloatingParticles';
import { SlotReel } from './components/SlotReel';
import { ChallengeCard } from './components/ChallengeCard';
import { TimerScreen } from './components/TimerScreen';
import { DomainSelector } from './components/DomainSelector';
import { Challenge } from './data/challenges';
import { getChallengesForDomainAndCategory } from './data/domainChallenges';
import { soundManager } from './utils/audio';

export default function App() {
  const [view, setView] = useState<'home' | 'timer'>('home');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [selectedDomainId, setSelectedDomainId] = useState<string>('mixed');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [timerDuration, setTimerDuration] = useState<number>(1);
  const [screenShake, setScreenShake] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [showHowItWorks, setShowHowItWorks] = useState<boolean>(false);

  const handleDomainChange = (newDomainId: string) => {
    setSelectedDomainId(newDomainId);
    // If a challenge is currently active, update it to match the newly selected domain
    if (selectedChallenge) {
      const matchingPool = getChallengesForDomainAndCategory(newDomainId, selectedChallenge.category);
      if (matchingPool.length > 0) {
        const nextChallenge = matchingPool[Math.floor(Math.random() * matchingPool.length)];
        setSelectedChallenge(nextChallenge);
      }
    }
  };

  const triggerScreenShake = () => {
    setScreenShake(true);
    setTimeout(() => setScreenShake(false), 450);
  };

  const handleStartTimer = (durationMinutes: number) => {
    setTimerDuration(durationMinutes);
    setView('timer');
  };

  const handleBackToQuest = () => {
    setView('home');
  };

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#0D1112] text-[#F6F2EB] ${
        screenShake ? 'animate-shake' : ''
      }`}
    >
      {/* Organic blurred gradient background blobs inspired by unprompted.cool */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-Left Warm Bronze / Ochre Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#3d2714]/40 rounded-full blur-[120px]" />
        
        {/* Top-Right Deep Emerald / Teal Ambient Glow */}
        <div className="absolute top-0 -right-20 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] bg-[#10332c]/50 rounded-full blur-[130px]" />

        {/* Center-Bottom Soft Dark Slate Vignette Glow */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#091f1b]/25 rounded-full blur-[140px]" />
      </div>

      {/* Static subtle background noise overlay */}
      <FloatingParticles />

      {/* Header Bar */}
      <header className="relative z-20 w-full max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <div
          onClick={handleBackToQuest}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          
          <span className="font-cinzel text-lg font-medium tracking-[0.15em] uppercase text-[#F6F2EB] group-hover:text-[#D8B46A] transition-colors">
            Speak Spin
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <DomainSelector
            selectedDomainId={selectedDomainId}
            onSelectDomain={handleDomainChange}
            disabled={isSpinning}
          />

          <button
            onClick={() => setShowHowItWorks(true)}
            id="how-it-works-btn"
            className="px-3.5 py-1.5 rounded-full bg-[#13131A] border border-white/10 text-[#A8A2B8] hover:text-[#F6F2EB] hover:border-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium"
            title="How to play SpeakSpin"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D8B46A]" />
            <span className="hidden sm:inline">Guide</span>
          </button>

          <button
            onClick={toggleSound}
            id="sound-toggle-btn"
            className="p-2 rounded-full bg-[#13131A] border border-white/10 text-[#A8A2B8] hover:text-[#F6F2EB] hover:border-white/20 transition-all cursor-pointer"
            title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#D8B46A]" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-4 py-6 flex-grow flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-center"
            >
              {/* Slot Machine Reel & Spin Button */}
              <SlotReel
                onSelectChallenge={setSelectedChallenge}
                isSpinning={isSpinning}
                setIsSpinning={setIsSpinning}
                selectedChallenge={selectedChallenge}
                triggerScreenShake={triggerScreenShake}
                selectedDomainId={selectedDomainId}
              />

              {/* Revealed Minimal Challenge */}
              <AnimatePresence>
                {selectedChallenge && !isSpinning && (
                  <ChallengeCard
                    challenge={selectedChallenge}
                    onStartTimer={handleStartTimer}
                    onUpdateChallenge={setSelectedChallenge}
                    selectedDomainId={selectedDomainId}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            selectedChallenge && (
              <TimerScreen
                key="timer"
                challenge={selectedChallenge}
                durationMinutes={timerDuration}
                onBackToQuest={handleBackToQuest}
              />
            )
          )}
        </AnimatePresence>
      </main>

      {/* Minimal Clean Footer */}
      <footer className="relative z-10 w-full max-w-3xl mx-auto px-6 py-8 text-center text-xs text-[#A8A2B8]/50 font-light border-t border-white/5">
        Speak Spin — Think. Speak. Create.
      </footer>

      {/* How It Works Modal */}
      <AnimatePresence>
        {showHowItWorks && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-2xl bg-[#13131A] p-6 sm:p-8 border border-white/10 text-left"
            >
              <button
                onClick={() => setShowHowItWorks(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A8A2B8] hover:text-[#F6F2EB] hover:bg-white/5 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#D8B46A]" />
                <h3 className="font-cinzel text-xl font-medium text-[#F6F2EB]">
                  How SpeakSpin Works
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#A8A2B8] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D8B46A]/20 text-[#D8B46A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-[#F6F2EB]">Spin the Reel:</strong> Click SPIN to receive a random prompt.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D8B46A]/20 text-[#D8B46A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-[#F6F2EB]">Read the Challenge:</strong> Review your prompt displayed in elegant centered text.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D8B46A]/20 text-[#D8B46A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-[#F6F2EB]">Select Your Timer:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-[#A8A2B8]">
                      <li><span className="text-[#D8B46A] font-medium">1 Minute Timer:</span> Fast impromptu speaking practice.</li>
                      <li><span className="text-[#D8B46A] font-medium">10 Minute Research:</span> Dedicated preparation and practice mode.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowHowItWorks(false)}
                className="mt-6 w-full py-3 rounded-full font-medium text-xs tracking-widest uppercase bg-[#0C0C0F] text-[#D8B46A] border border-[#D8B46A]/30 hover:border-[#D8B46A]/60 transition-all cursor-pointer"
              >
                Start Practicing
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
