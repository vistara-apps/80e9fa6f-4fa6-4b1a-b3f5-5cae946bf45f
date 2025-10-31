'use client';

import { TrendingUp, ExternalLink } from 'lucide-react';

export function MyVaults() {
  const hasVaults = false;

  if (!hasVaults) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-muted" />
        </div>
        <h3 className="text-xl font-semibold text-fg mb-2">No vaults yet</h3>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Connect your wallet and deposit into a vault to start earning yield.
        </p>
        <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors shadow-glow">
          Browse Vaults
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-fg">My Active Vaults</h2>
      {/* Vault positions would be listed here */}
    </div>
  );
}
