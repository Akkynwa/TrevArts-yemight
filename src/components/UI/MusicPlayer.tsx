import { useState, useRef } from 'react';
import { Radio, Volume2 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="/assets/Trevarts.mp3" 
        loop 
        preload="auto"
      />

      {/* Music Player Widget */}
      <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 w-14">
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between p-2">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-primary/20 hover:bg-primary/30"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-[#f53513ff]" />
              ) : (
                <Radio className="w-5 h-5 text-[#f53513ff]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}