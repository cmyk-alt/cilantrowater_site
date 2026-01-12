import { useEffect, useState } from 'react';

type IIntroOverlayProps = {
  onComplete: () => void;
};

const IntroOverlay = (props: IIntroOverlayProps) => {
  const [animate, setAnimate] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setAnimate(true);
        // Wait for animation to finish before removing from DOM
        setTimeout(() => {
          setDisplay(false);
          props.onComplete();
        }, 800); // 800ms duration matching keyframe/transition
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [props]);

  if (!display) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
        animate ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`relative flex h-full w-full flex-col items-center justify-center transition-transform duration-700 ${
          animate ? '-translate-y-full scale-50' : 'translate-y-0 scale-100'
        }`}
      >
        {/* Full width Logo Image with cropping/zoom effect */}
        {/* Using overflow-hidden and object-cover to crop edges and zoom */}
        <div className="flex w-full items-center justify-center px-4 sm:max-w-4xl">
          <img
            src="/assets/images/logo.jpeg"
            alt="Cilantro Water"
            className="h-auto w-full rounded-xl shadow-lg"
            style={{ maxHeight: '60vh' }}
          />
        </div>
        
        {/* Scroll Prompt Arrow - Absolute position relative to viewport/container, pushed low */}
        <div className="absolute bottom-8 animate-bounce">
          <svg 
            className="size-12 text-primary-500" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export { IntroOverlay };
