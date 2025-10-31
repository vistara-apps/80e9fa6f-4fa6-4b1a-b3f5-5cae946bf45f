'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { VaultList } from './components/VaultList';
import { QuizModal } from './components/QuizModal';
import { MyVaults } from './components/MyVaults';
import { Shield, TrendingUp, Users } from 'lucide-react';

type Tab = 'browse' | 'my-vaults' | 'quiz';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('browse');
  const [showQuiz, setShowQuiz] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted">Loading YieldGuard...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 pt-8 pb-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-fg">
            Sleep easy while your crypto earns
          </h1>
          <p className="text-base text-muted max-w-2xl mx-auto">
            Vetted vaults, zero guesswork. AI-powered risk scoring helps you find safe, high-yield DeFi opportunities.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto">
            <div className="bg-surface rounded-lg p-4 shadow-card">
              <Shield className="w-6 h-6 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-fg">98%</div>
              <div className="text-sm text-muted">Safe Vaults</div>
            </div>
            <div className="bg-surface rounded-lg p-4 shadow-card">
              <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-fg">12.4%</div>
              <div className="text-sm text-muted">Avg APY</div>
            </div>
            <div className="bg-surface rounded-lg p-4 shadow-card">
              <Users className="w-6 h-6 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-fg">2.3k</div>
              <div className="text-sm text-muted">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-10 bg-surface border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === 'browse'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              Browse Vaults
            </button>
            <button
              onClick={() => setActiveTab('my-vaults')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === 'my-vaults'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              My Vaults
            </button>
            <button
              onClick={() => {
                setShowQuiz(true);
                setActiveTab('quiz');
              }}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === 'quiz'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              Get Matched
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'browse' && <VaultList />}
        {activeTab === 'my-vaults' && <MyVaults />}
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal onClose={() => setShowQuiz(false)} />
      )}
    </main>
  );
}
