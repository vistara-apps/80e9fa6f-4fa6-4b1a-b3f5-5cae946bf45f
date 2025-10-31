'use client';

import { Shield } from 'lucide-react';
import { WalletButton } from './WalletButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-fg">YieldGuard</span>
        </div>
        
        <WalletButton />
      </div>
    </header>
  );
}
