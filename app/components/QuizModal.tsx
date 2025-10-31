'use client';

import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface QuizModalProps {
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: 'How much risk can you stomach?',
    options: ['Conservative', 'Moderate', 'Aggressive'],
  },
  {
    id: 2,
    question: 'How long will you hold?',
    options: ['< 1 month', '1-6 months', '6+ months'],
  },
  {
    id: 3,
    question: 'Preferred chains?',
    options: ['Base', 'Arbitrum', 'Polygon', 'All chains'],
  },
  {
    id: 4,
    question: 'Portfolio size?',
    options: ['< $1k', '$1k - $10k', '$10k+'],
  },
  {
    id: 5,
    question: 'Tax situation?',
    options: ['US', 'Non-US', "Don't care"],
  },
];

export function QuizModal({ onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - show results
      alert('Quiz complete! Showing matched vaults...');
      onClose();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-surface rounded-lg max-w-md w-full shadow-elevated">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-fg">Get Matched</h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-fg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress */}
        <div className="px-4 pt-4">
          <div className="w-full bg-bg rounded-full h-2 mb-4">
            <div
              className="bg-accent h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-fg mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full bg-bg hover:bg-accent/10 text-fg border border-white/10 hover:border-accent rounded-lg p-4 text-left transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  <ChevronRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
