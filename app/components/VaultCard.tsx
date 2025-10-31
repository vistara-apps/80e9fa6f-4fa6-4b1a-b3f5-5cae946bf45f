'use client';

import { TrendingUp, Users, Shield, AlertTriangle, AlertCircle } from 'lucide-react';

interface VaultCardProps {
  vault: {
    id: string;
    name: string;
    protocol: string;
    apy: number;
    tvl: string;
    riskScore: number;
    riskTier: 'safe' | 'caution' | 'high-risk';
    chain: string;
    followers: number;
  };
}

export function VaultCard({ vault }: VaultCardProps) {
  const getRiskBadge = () => {
    switch (vault.riskTier) {
      case 'safe':
        return (
          <div className="flex items-center space-x-1 bg-success/20 text-success px-2 py-1 rounded-md">
            <Shield className="w-3 h-3" />
            <span className="text-xs font-medium">Safe</span>
          </div>
        );
      case 'caution':
        return (
          <div className="flex items-center space-x-1 bg-warning/20 text-warning px-2 py-1 rounded-md">
            <AlertTriangle className="w-3 h-3" />
            <span className="text-xs font-medium">Caution</span>
          </div>
        );
      case 'high-risk':
        return (
          <div className="flex items-center space-x-1 bg-danger/20 text-danger px-2 py-1 rounded-md">
            <AlertCircle className="w-3 h-3" />
            <span className="text-xs font-medium">High Risk</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-surface rounded-lg p-4 shadow-card hover:shadow-elevated transition-shadow border border-white/10 cursor-pointer group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
            {vault.name}
          </h3>
          <p className="text-sm text-muted">{vault.protocol} • {vault.chain}</p>
        </div>
        {getRiskBadge()}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-1 text-muted text-xs mb-1">
            <TrendingUp className="w-3 h-3" />
            <span>APY</span>
          </div>
          <div className="text-2xl font-bold text-success">{vault.apy}%</div>
        </div>
        <div>
          <div className="text-muted text-xs mb-1">TVL</div>
          <div className="text-lg font-semibold text-fg">{vault.tvl}</div>
        </div>
      </div>

      {/* Risk Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-muted mb-1">
          <span>Risk Score</span>
          <span className="font-medium text-fg">{vault.riskScore}/100</span>
        </div>
        <div className="w-full bg-bg rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              vault.riskScore >= 85 ? 'bg-success' :
              vault.riskScore >= 70 ? 'bg-warning' : 'bg-danger'
            }`}
            style={{ width: `${vault.riskScore}%` }}
          />
        </div>
      </div>

      {/* Social Proof */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <div className="flex items-center space-x-1 text-muted text-xs">
          <Users className="w-3 h-3" />
          <span>{vault.followers} followers deposited</span>
        </div>
        <button className="text-accent text-sm font-medium hover:text-accent/80 transition-colors">
          Deposit →
        </button>
      </div>
    </div>
  );
}
