'use client';

import { useState } from 'react';
import { VaultCard } from './VaultCard';
import { Filter } from 'lucide-react';

interface Vault {
  id: string;
  name: string;
  protocol: string;
  apy: number;
  tvl: string;
  riskScore: number;
  riskTier: 'safe' | 'caution' | 'high-risk';
  chain: string;
  followers: number;
}

const mockVaults: Vault[] = [
  {
    id: '1',
    name: 'USDC Vault',
    protocol: 'Aave',
    apy: 8.5,
    tvl: '$12.4M',
    riskScore: 92,
    riskTier: 'safe',
    chain: 'Base',
    followers: 234,
  },
  {
    id: '2',
    name: 'ETH Staking',
    protocol: 'Yearn',
    apy: 12.3,
    tvl: '$45.2M',
    riskScore: 88,
    riskTier: 'safe',
    chain: 'Base',
    followers: 567,
  },
  {
    id: '3',
    name: 'WBTC Vault',
    protocol: 'Beefy',
    apy: 15.7,
    tvl: '$8.9M',
    riskScore: 75,
    riskTier: 'caution',
    chain: 'Arbitrum',
    followers: 123,
  },
  {
    id: '4',
    name: 'DAI Savings',
    protocol: 'Compound',
    apy: 6.2,
    tvl: '$28.1M',
    riskScore: 95,
    riskTier: 'safe',
    chain: 'Base',
    followers: 445,
  },
];

export function VaultList() {
  const [filter, setFilter] = useState<'all' | 'safe' | 'caution'>('all');

  const filteredVaults = mockVaults.filter(vault => {
    if (filter === 'all') return true;
    return vault.riskTier === filter;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-fg">Top Vaults</h2>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="bg-surface text-fg border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="all">All Vaults</option>
            <option value="safe">Safe Only</option>
            <option value="caution">Caution</option>
          </select>
        </div>
      </div>

      {/* Vault Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVaults.map((vault) => (
          <VaultCard key={vault.id} vault={vault} />
        ))}
      </div>
    </div>
  );
}
