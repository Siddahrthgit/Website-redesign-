import React from 'react';
import { Sparkles, ShieldCheck, Gauge, ArrowRightLeft, Code2, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: 'split' | 'clean' | 'audit' | 'code';
  onTabChange: (tab: 'split' | 'clean' | 'audit' | 'code') => void;
  onExport: () => void;
  isCustomUrlOrHtml: boolean;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onExport,
  isCustomUrlOrHtml,
  onReset,
}) => {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-white shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900 tracking-tight text-base sm:text-lg">
                  Web Page Simplifier & Redesigner
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Reliability Engine
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden md:block">
                Purge ad bloat, dark patterns, and fragile scripts into dependable, fast utility
              </p>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
            <button
              onClick={() => onTabChange('split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'split'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Compare Before & After side-by-side"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Side-by-Side</span>
            </button>
            <button
              onClick={() => onTabChange('clean')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'clean'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="View Redesigned Pure Page"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clean View</span>
            </button>
            <button
              onClick={() => onTabChange('audit')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'audit'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="View Bloat & Reliability Scorecard"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Audit</span>
            </button>
            <button
              onClick={() => onTabChange('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'code'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Inspect clean code and export"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Code & Export</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {isCustomUrlOrHtml && (
              <button
                onClick={onReset}
                className="text-xs font-medium text-stone-600 hover:text-stone-900 px-2.5 py-1.5 rounded-md border border-stone-200 hover:bg-stone-50"
              >
                Reset
              </button>
            )}
            <button
              onClick={onExport}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
