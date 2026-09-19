import React, { useState } from 'react';
import { PRESET_SITES } from '../data/presets';
import { PresetSite, SimplificationMode, SimplificationOptions } from '../types';
import { Globe, FileText, Sparkles, SlidersHorizontal, Loader2, ArrowRight, BookOpen, Zap, Layers, Ban } from 'lucide-react';

interface InputSectionProps {
  selectedPreset: PresetSite;
  onSelectPreset: (preset: PresetSite) => void;
  onAnalyzeCustomUrl: (url: string, options: SimplificationOptions) => Promise<void>;
  onAnalyzeRawContent: (title: string, raw: string, options: SimplificationOptions) => Promise<void>;
  isLoading: boolean;
  options: SimplificationOptions;
  onOptionsChange: (options: SimplificationOptions) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({
  selectedPreset,
  onSelectPreset,
  onAnalyzeCustomUrl,
  onAnalyzeRawContent,
  isLoading,
  options,
  onOptionsChange,
}) => {
  const [activeInputMode, setActiveInputMode] = useState<'presets' | 'url' | 'paste'>('presets');
  const [customUrl, setCustomUrl] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [rawText, setRawText] = useState('');
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    onAnalyzeCustomUrl(customUrl.trim(), options);
  };

  const handleRawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawText.trim()) return;
    onAnalyzeRawContent(customTitle.trim() || 'Custom Document', rawText.trim(), options);
  };

  const modeDescriptions: Record<SimplificationMode, { label: string; icon: any; desc: string }> = {
    essential: {
      label: 'Essential Core',
      icon: Zap,
      desc: 'Strip everything except primary message and key action.',
    },
    reader: {
      label: 'Reader Focus',
      icon: BookOpen,
      desc: 'Optimal typographic hierarchy, zero ads/sidebars, clean layout.',
    },
    frictionless: {
      label: 'Frictionless Forms',
      icon: Layers,
      desc: 'Reduce multi-page forms to 2-3 essential inputs without captchas.',
    },
    'zero-js': {
      label: 'Zero-JS Offline',
      icon: Ban,
      desc: 'Pure semantic HTML/CSS that works 100% offline with no runtime scripts.',
    },
  };

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Mode Selector Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Source Page:</span>
            <div className="inline-flex p-0.5 rounded-lg bg-stone-200/80 text-xs font-medium">
              <button
                onClick={() => setActiveInputMode('presets')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeInputMode === 'presets'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Sample Bloated Sites
              </button>
              <button
                onClick={() => setActiveInputMode('url')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeInputMode === 'url'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Enter Any URL
              </button>
              <button
                onClick={() => setActiveInputMode('paste')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeInputMode === 'paste'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Paste HTML / Content
              </button>
            </div>
          </div>

          {/* Quick Simplification Mode Picker */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-white border border-stone-300 px-2 py-1 rounded-lg text-xs">
              <span className="text-stone-500 font-medium hidden md:inline">Strategy:</span>
              <select
                value={options.mode}
                onChange={(e) => onOptionsChange({ ...options, mode: e.target.value as SimplificationMode })}
                className="bg-transparent font-medium text-stone-900 focus:outline-hidden cursor-pointer"
              >
                <option value="essential">Essential Core (Fastest)</option>
                <option value="reader">Reader Focus (Longform)</option>
                <option value="frictionless">Frictionless Forms (Services)</option>
                <option value="zero-js">Zero-JS / Offline (Max Reliability)</option>
              </select>
            </div>

            <button
              onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
              className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                showOptionsDropdown ? 'bg-stone-200 border-stone-400 text-stone-900' : 'bg-white border-stone-300 text-stone-600 hover:text-stone-900'
              }`}
              title="Configure reliability rules"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Rules</span>
            </button>
          </div>
        </div>

        {/* Simplification Rules Expanded Panel */}
        {showOptionsDropdown && (
          <div className="bg-white border border-stone-200 rounded-xl p-4 mb-4 shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Reliability & Simplification Parameters
              </span>
              <span className="text-xs text-stone-500">Applied during page reconstruction</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/70 cursor-pointer border border-stone-200/60">
                <input
                  type="checkbox"
                  checked={options.highContrast}
                  onChange={(e) => onOptionsChange({ ...options, highContrast: e.target.checked })}
                  className="mt-0.5 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500"
                />
                <div>
                  <div className="text-xs font-bold text-stone-800">WCAG AAA High Contrast</div>
                  <div className="text-[11px] text-stone-500 leading-tight">Minimum 7:1 text contrast for maximum outdoor/low-vision readability.</div>
                </div>
              </label>

              <label className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/70 cursor-pointer border border-stone-200/60">
                <input
                  type="checkbox"
                  checked={options.strictNoJs}
                  onChange={(e) => onOptionsChange({ ...options, strictNoJs: e.target.checked })}
                  className="mt-0.5 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500"
                />
                <div>
                  <div className="text-xs font-bold text-stone-800">Strict No-JS Execution</div>
                  <div className="text-[11px] text-stone-500 leading-tight">Remove 100% of client scripts to prevent runtime crashes and memory leaks.</div>
                </div>
              </label>

              <label className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100/70 cursor-pointer border border-stone-200/60">
                <input
                  type="checkbox"
                  checked={options.preserveImages}
                  onChange={(e) => onOptionsChange({ ...options, preserveImages: e.target.checked })}
                  className="mt-0.5 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500"
                />
                <div>
                  <div className="text-xs font-bold text-stone-800">Preserve Essential Media</div>
                  <div className="text-[11px] text-stone-500 leading-tight">Retain core diagrams/products, while purging all decorative marketing banners.</div>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* 1. Presets View */}
        {activeInputMode === 'presets' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {PRESET_SITES.map((preset) => {
              const isSelected = selectedPreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onSelectPreset(preset)}
                  className={`text-left p-3 rounded-xl border transition-all relative ${
                    isSelected
                      ? 'bg-white border-stone-900 ring-2 ring-stone-900/10 shadow-xs'
                      : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        preset.category === 'recipe'
                          ? 'bg-amber-100 text-amber-800'
                          : preset.category === 'saas'
                          ? 'bg-blue-100 text-blue-800'
                          : preset.category === 'news'
                          ? 'bg-purple-100 text-purple-800'
                          : preset.category === 'e-commerce'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-200 text-stone-800'
                      }`}
                    >
                      {preset.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    )}
                  </div>
                  <div className="text-xs font-bold text-stone-900 line-clamp-1">{preset.title}</div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 leading-snug">
                    {preset.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* 2. URL Input View */}
        {activeInputMode === 'url' && (
          <form onSubmit={handleUrlSubmit} className="flex flex-col sm:flex-row gap-2 max-w-3xl">
            <div className="relative flex-1">
              <Globe className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="Enter any website URL (e.g., cnn.com, nytimes.com, allrecipes.com, or your domain)"
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-emerald-600 focus:border-emerald-600"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !customUrl.trim()}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-lg text-sm font-semibold shadow-xs transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Analyzing & Redesigning...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Simplify Webpage</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* 3. Paste HTML / Content View */}
        {activeInputMode === 'paste' && (
          <form onSubmit={handleRawSubmit} className="space-y-2.5 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="Page Title or Subject (optional)"
                className="px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-emerald-600"
                disabled={isLoading}
              />
              <div className="text-[11px] text-stone-500 flex items-center">
                Paste raw HTML, article text, or cluttered website source code below
              </div>
            </div>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Paste cluttered HTML or raw page text here... (e.g. <div>...</div> or article text)"
              rows={4}
              className="w-full p-3 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-900 focus:outline-emerald-600"
              disabled={isLoading}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading || !rawText.trim()}
                className="flex items-center gap-2 px-5 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    <span>Redesigning...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Redesign Content</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
