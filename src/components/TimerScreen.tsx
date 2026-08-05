import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, ArrowLeft, CheckCircle2, Sparkles, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Challenge } from '../data/challenges';
import { soundManager } from '../utils/audio';

interface TimerScreenProps {
  challenge: Challenge;
  durationMinutes: number;
  onBackToQuest: () => void;
}

export const TimerScreen: React.FC<TimerScreenProps> = ({
  challenge,
  durationMinutes,
  onBackToQuest,
}) => {
  const totalSeconds = durationMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [isMicActive, setIsMicActive] = useState<boolean>(false);
  const [micVolume, setMicVolume] = useState<number>(0);

  const audioStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Timer interval effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          const next = prev - 1;

          // Sound cues
          if (next <= 5 && next > 0) {
            soundManager.playTimerWarning();
          } else if (next <= 10 && next > 5) {
            soundManager.playTimerTick();
          }

          if (next <= 0) {
            setIsRunning(false);
            setIsFinished(true);
            soundManager.playTimerComplete();

            // Victory confetti
            confetti({
              particleCount: 80,
              spread: 90,
              origin: { y: 0.5 },
              colors: ['#D8B46A', '#F6F2EB', '#A8A2B8']
            });
            return 0;
          }
          return next;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  // Microphone handler
  const toggleMicrophone = async () => {
    if (isMicActive) {
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((track) => track.stop());
        audioStreamRef.current = null;
      }
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      setIsMicActive(false);
      setMicVolume(0);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      setIsMicActive(true);

      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateMic = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avg = sum / dataArray.length;
        setMicVolume(Math.min(100, Math.round((avg / 128) * 100)));
        animFrameRef.current = requestAnimationFrame(updateMic);
      };

      updateMic();
    } catch {
      alert('Microphone access unavailable or denied.');
      setIsMicActive(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handlePauseResume = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setSecondsLeft(totalSeconds);
    setIsRunning(false);
    setIsFinished(false);
  };

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  // Format time MM:SS
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  // Progress ratio 0 -> 1
  const progressRatio = totalSeconds > 0 ? (totalSeconds - secondsLeft) / totalSeconds : 1;
  const strokeDashoffset = 754 * (1 - progressRatio);

  let currentPhaseLabel = `${durationMinutes} Minute Practice`;
  if (durationMinutes === 10) {
    if (secondsLeft > 420) {
      currentPhaseLabel = 'Phase 1: Research & Outline (3 Mins)';
    } else {
      currentPhaseLabel = 'Phase 2: Master Speech Delivery (7 Mins)';
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto flex flex-col items-center px-4 py-4 min-h-[80vh] justify-between"
    >
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <button
          onClick={onBackToQuest}
          className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase text-[#A8A2B8] bg-[#13131A] border border-white/10 hover:border-white/20 hover:text-[#F6F2EB] transition-all flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMicrophone}
            title={isMicActive ? 'Mute Mic Visualizer' : 'Enable Voice Meter'}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all cursor-pointer flex items-center gap-1.5 ${
              isMicActive
                ? 'bg-[#13131A] border-[#D8B46A] text-[#D8B46A]'
                : 'bg-[#13131A] border-white/10 text-[#A8A2B8] hover:text-[#F6F2EB]'
            }`}
          >
            {isMicActive ? <Mic className="w-3.5 h-3.5 text-[#D8B46A] animate-pulse" /> : <MicOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-xs tracking-wider uppercase">{isMicActive ? 'Mic On' : 'Voice Meter'}</span>
          </button>

          <button
            onClick={toggleSound}
            className="p-2 rounded-full bg-[#13131A] border border-white/10 text-[#A8A2B8] hover:text-[#F6F2EB] transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#D8B46A]" />}
          </button>
        </div>
      </div>

      {/* Selected Challenge Displayed */}
      <div className="w-full rounded-2xl bg-[#13131A] p-6 mb-6 border border-white/10 text-center">
        <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#D8B46A] block mb-1">
          {currentPhaseLabel} • {challenge.category}
        </span>
        <h2 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-[#F6F2EB] mb-2 leading-snug">
          {challenge.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#A8A2B8] font-light italic leading-relaxed">
          {challenge.prompt}
        </p>
      </div>

      {/* Circular Progress Ring & Timer */}
      <div className="relative my-4 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 280 280">
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="#1C1C26"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="#D8B46A"
              strokeWidth="8"
              strokeDasharray="754"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-linear"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <AnimatePresence mode="wait">
              {isFinished ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center text-[#D8B46A]"
                >
                  <CheckCircle2 className="w-12 h-12 mb-2 text-[#D8B46A] animate-pulse" />
                  <span className="font-cinzel text-xl font-medium text-[#F6F2EB] tracking-wider">
                    COMPLETE
                  </span>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="font-cinzel text-5xl sm:text-6xl font-medium text-[#F6F2EB] tracking-wider">
                    {formattedTime}
                  </span>
                  <span className="text-[10px] uppercase font-medium tracking-[0.25em] text-[#A8A2B8] mt-2">
                    {isRunning ? 'Speaking' : 'Paused'}
                  </span>
                </div>
              )}
            </AnimatePresence>

            {isMicActive && (
              <div className="mt-4 w-24 h-1.5 rounded-full bg-[#0C0C0F] border border-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#D8B46A] transition-all duration-75"
                  style={{ width: `${micVolume}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timer Controls Row */}
      <div className="w-full flex items-center justify-center gap-3 mt-6">
        {!isFinished ? (
          <>
            <button
              onClick={handlePauseResume}
              className={`px-8 py-3 rounded-full font-medium text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isRunning
                  ? 'bg-[#13131A] text-[#F6F2EB] border border-white/10 hover:border-white/20'
                  : 'bg-[#D8B46A] text-[#0C0C0F] font-bold border border-[#D8B46A]'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-3 rounded-full bg-[#13131A] text-[#A8A2B8] border border-white/10 hover:text-[#F6F2EB] hover:border-white/20 transition-all cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={onBackToQuest}
            className="px-8 py-3.5 rounded-full font-medium text-xs tracking-widest uppercase bg-[#13131A] text-[#D8B46A] border border-[#D8B46A]/40 hover:border-[#D8B46A] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D8B46A]" />
            <span>Spin Next Quest</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};
