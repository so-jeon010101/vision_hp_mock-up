import React, { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  images: string[];
  duration: number;
  containerHeight: number;
  itemHeight: number;
  paused?: boolean;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  images,
  duration,
  containerHeight,
  itemHeight,
  paused = false,
}) => {
  const [displayImages, setDisplayImages] = useState<string[]>([]);

  useEffect(() => {
    // 필요한 복제 개수 계산
    const totalHeight = images.length * itemHeight;
    const neededHeight = containerHeight + (duration / 1000) * 100; // 애니메이션 거리 대략값
    const duplicateCount = Math.ceil(neededHeight / totalHeight) + 1;
    
    // 이미지 배열 복제
    let duplicated: string[] = [];
    for (let i = 0; i < duplicateCount; i++) {
      duplicated = [...duplicated, ...images];
    }
    
    setDisplayImages(duplicated);
  }, [images, duration, containerHeight, itemHeight]);

  return (
    <div
      className="scroll-column"
      style={{
        height: `${containerHeight}px`,
        overflow: 'hidden',
        width: '200px',
      }}
    >
      <div
        className="scroll-track"
        style={{
          animation: paused
            ? 'none'
            : `scroll-vertical ${duration}ms linear infinite`,
          willChange: 'transform',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              height: `${itemHeight}px`,
              width: '100%',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${displayImages.length / (displayImages.length / images.length)} * ${itemHeight}px));
          }
        }
      `}</style>
    </div>
  );
};
