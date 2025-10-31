'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    // In production, this would use MiniKit SDK wallet connection
    // For now, simulate connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected && address) {
    return (
      <button className="flex items-center space-x-2 bg-surface hover:bg-surface/80 text-fg px-4 py-2 rounded-lg transition-colors border border-white/10">
        <Wallet className="w-4 h-4" />
        <span className="text-sm font-medium">{address}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors shadow-glow"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect Wallet</span>
    </button>
  );
}
