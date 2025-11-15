import { useState } from 'react';
import { ClosedCard } from './components/ClosedCard';
import { OpenedCard } from './components/OpenedCard';
import { PhotoMemories } from './components/PhotoMemories';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-50 via-cream-50 to-rose-50">
      {/* Shimmering overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-rose-100/30 animate-shimmer" />
      </div>
      
      {/* Floating elements (only show when card is closed or opened) */}
      {!isCardOpen && <FloatingElements />}
      
      {/* Main content */}
      <div className="relative z-10">
        {!isCardOpen ? (
          <ClosedCard onOpen={() => setIsCardOpen(true)} />
        ) : (
          <>
            <OpenedCard />
            <PhotoMemories />
          </>
        )}
      </div>
    </div>
  );
}
