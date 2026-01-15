'use client';
import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function HomePageHeroBackground() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className='relative h-screen flex items-center justify-center overflow-hidden'>
      <video
        autoPlay
        muted={isMuted}
        loop
        className='absolute inset-0 w-full h-full object-cover z-0'
        playsInline
        preload='auto'
        controls={false}
      >
        <source
          src='https://res.cloudinary.com/doep7sd3t/video/upload/v1760541508/crownvideoneedcompress_1_stgpxd.mp4'
          type='video/mp4'
        />
      </video>

      <div className='absolute inset-0 bg-black/50 z-10' />

      <Button
        onClick={toggleMute}
        className='absolute bottom-6 right-6 z-30 text-white p-4 rounded-full transition-all duration-300'
        variant='glassmorhpic'
        aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
        size='icon'
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </Button>
    </div>
  );
}
