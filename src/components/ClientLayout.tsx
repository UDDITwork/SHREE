'use client';

import { ReactNode, useEffect, useState } from 'react';
import BlobCursor from './BlobCursor';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch-based/mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Only show blob cursor on non-mobile devices */}
      {!isMobile && (
        <BlobCursor
          fillColor="#00ff88"
          trailCount={3}
          sizes={[50, 100, 60]}
          innerSizes={[15, 28, 20]}
          innerColor="rgba(255,255,255,0.9)"
          opacities={[0.5, 0.4, 0.45]}
          shadowColor="rgba(0, 255, 136, 0.3)"
          shadowBlur={15}
          shadowOffsetX={0}
          shadowOffsetY={0}
          zIndex={9999}
        />
      )}
      {children}
    </>
  );
}
