import React, { useEffect } from 'react';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const STAR_COUNT = 100;

const IntroAnimation: React.FC<IntroAnimationProps> = ({
  onAnimationComplete,
}) => {
  useEffect(() => {
    const animationDuration = 2500;
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const size = Math.random() * 30 + 10; // 10px ~ 40px
      const startPositionX = Math.random() * 100; // 0% ~ 100% (오른쪽)
      const startPositionY = Math.random() * -50; // -50vh ~ 0 (화면 위쪽)
      const animationDuration = Math.random() * 5 + 5; // 5초 ~ 10초
      const animationDelay = Math.random() * 5; // 0초 ~ 5초 지연

      stars.push(
        <svg
          key={i}
          className="absolute will-change-transform"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            right: `${startPositionX}%`,
            top: `${startPositionY}vh`,
            animation: `fall ${animationDuration}s linear ${animationDelay}s infinite`,
          }}
          viewBox="0 0 50 50"
        >
          <polygon
            className="fill-transparent stroke-white stroke-[2px]"
            points="25,1.5 31.5,18.5 48.5,18.5 35,29.5 41.5,46.5 25,35.5 8.5,46.5 15,29.5 1.5,18.5 18.5,18.5"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-[9999]">
      {renderStars()}
    </div>
  );
};

export default IntroAnimation;
