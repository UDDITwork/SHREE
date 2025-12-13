'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#00ff88',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    blobRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      blobRefs.current.forEach((blob, index) => {
        if (blob) {
          const duration = index === 0 ? fastDuration : slowDuration;
          const ease = index === 0 ? fastEase : slowEase;
          gsap.to(blob, {
            x: e.clientX,
            y: e.clientY,
            duration,
            ease
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [fastDuration, slowDuration, fastEase, slowEase]);

  const renderBlob = (index: number) => {
    const size = sizes[index] || sizes[0];
    const innerSize = innerSizes[index] || innerSizes[0];
    const opacity = opacities[index] || opacities[0];

    const blobStyle: React.CSSProperties = {
      width: size,
      height: size,
      backgroundColor: fillColor,
      opacity,
      boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`,
      borderRadius: blobType === 'circle' ? '50%' : '0%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const innerStyle: React.CSSProperties = {
      width: innerSize,
      height: innerSize,
      backgroundColor: innerColor,
      borderRadius: blobType === 'circle' ? '50%' : '0%'
    };

    return (
      <div
        key={index}
        ref={(el) => setRef(el, index)}
        className="blob"
        style={blobStyle}
      >
        <div className="inner-dot" style={innerStyle} />
      </div>
    );
  };

  return (
    <div ref={containerRef} className="blob-container">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={filterStdDeviation}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={filterColorMatrixValues}
              result="blob"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="blob-main"
        style={{
          zIndex,
          filter: useFilter ? `url(#${filterId})` : 'none'
        }}
      >
        {Array.from({ length: trailCount }, (_, i) => renderBlob(i))}
      </div>
    </div>
  );
}
