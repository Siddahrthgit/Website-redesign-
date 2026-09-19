import React, { useState } from 'react';
import { PRESET_SITES } from './data/presets';
import { PresetSite, RedesignResult, SimplificationOptions } from './types';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { ComparisonViewer } from './components/ComparisonViewer';
import { ExportModal } from './components/ExportModal';
import { AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSite>(PRESET_SITES[0]);
  const [activeTab, setActiveTab] = useState<'split' | 'clean' | 'audit' | 'code'>('split');
  const [currentResult, setCurrentResult] = useState<RedesignResult>(PRESET_SITES[0].defaultResult);
  const [isCustomUrlOrHtml, setIsCustomUrlOrHtml] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const [options, setOptions] = useState<SimplificationOptions>({
    mode: 'essential',
    preserveImages: true,
    highContrast: false,
    offlineReady: true,
    strictNoJs: true,
  });

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  const handleSelectPreset = (preset: PresetSite) => {
    setSelectedPreset(preset);
    setCurrentResult(preset.defaultResult);
    setIsCustomUrlOrHtml(false);
    setErrorMessage(null);
  };

  const handleReset = () => {
    setSelectedPreset(PRESET_SITES[0]);
    setCurrentResult(PRESET_SITES[0].defaultResult);
    setIsCustomUrlOrHtml(false);
    setErrorMessage(null);
  };

  const handleAnalyzeCustomUrl = async (url: string, currentOptions: SimplificationOptions) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Step 1: Fetch target URL through proxy
      const fetchRes = await fetch('/api/fetch-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!fetchRes.ok) {
        const errorData = await fetchRes.json().catch(() => ({}));
        throw new Error(errorData.error || `Unable to fetch ${url}`);
      }

      const fetchData = await fetchRes.json();

      // Step 2: Redesign content with AI / heuristic engine
      const redesignRes = await fetch('/api/redesign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: fetchData.url,
          title: fetchData.title,
          rawContent: fetchData.htmlPreview,
          mode: currentOptions.mode,
          options: currentOptions,
        }),
      });

      if (!redesignRes.ok) {
        const errorData = await redesignRes.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to redesign webpage content');
      }

      const redesignData = await redesignRes.json();
      const newResult: RedesignResult = {
        ...redesignData.result,
        id: 'custom-' + Date.now(),
        originalUrl: fetchData.url,
      };

      // Create a temporary preset representation for the before view
      const customPreset: PresetSite = {
        id: 'custom-' + Date.now(),
        title: fetchData.title || url,
        category: 'service',
        tagline: `Analyzed from ${new URL(fetchData.url).hostname}`,
        description: `Custom webpage simplified from ${fetchData.url}`,
        originalPage: {
          title: fetchData.title,
          rawHtml: fetchData.htmlPreview,
          simulatedBloat: {
            hasCookieBanner: (fetchData.detectedStats?.modals || 0) > 0,
            hasNewsletterModal: true,
            hasAutoplayVideo: false,
            hasCountdownTimer: false,
            hasStickyFooterAd: (fetchData.detectedStats?.ads || 0) > 0,
            hasChatbot: false,
          },
        },
        defaultResult: newResult,
      };

      setSelectedPreset(customPreset);
      setCurrentResult(newResult);
      setIsCustomUrlOrHtml(true);
      if (fetchData.notice) {
        showToast(fetchData.notice);
      } else {
        showToast(`Successfully simplified "${fetchData.title || url}"!`);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Error occurred while analyzing and redesigning website.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeRawContent = async (title: string, raw: string, currentOptions: SimplificationOptions) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const redesignRes = await fetch('/api/redesign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          rawContent: raw,
          mode: currentOptions.mode,
          options: currentOptions,
        }),
      });

      if (!redesignRes.ok) {
        const errorData = await redesignRes.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to redesign content');
      }

      const redesignData = await redesignRes.json();
      const newResult: RedesignResult = {
        ...redesignData.result,
        id: 'custom-' + Date.now(),
      };

      const customPreset: PresetSite = {
        id: 'custom-' + Date.now(),
        title: title || 'Pasted Content',
        category: 'service',
        tagline: 'Custom pasted markup/text',
        description: 'Simplified from user input',
        originalPage: {
          title: title || 'Pasted Webpage',
          rawHtml: raw,
          simulatedBloat: {
            hasCookieBanner: true,
            hasNewsletterModal: false,
            hasAutoplayVideo: false,
            hasCountdownTimer: false,
            hasStickyFooterAd: true,
            hasChatbot: false,
          },
        },
        defaultResult: newResult,
      };

      setSelectedPreset(customPreset);
      setCurrentResult(newResult);
      setIsCustomUrlOrHtml(true);
      showToast('Successfully redesigned pasted content!');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Error occurred while processing content.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed bottom-5 right-5 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-stone-800 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Main App Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onExport={() => setIsExportOpen(true)}
        isCustomUrlOrHtml={isCustomUrlOrHtml}
        onReset={handleReset}
      />

      {/* Top Input & Preset Selector */}
      <InputSection
        selectedPreset={selectedPreset}
        onSelectPreset={handleSelectPreset}
        onAnalyzeCustomUrl={handleAnalyzeCustomUrl}
        onAnalyzeRawContent={handleAnalyzeRawContent}
        isLoading={isLoading}
        options={options}
        onOptionsChange={setOptions}
      />

      {/* Error Alert Bar */}
      {errorMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 w-full">
          <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3 rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-xs font-bold text-rose-700 hover:underline shrink-0"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Active Work Area: Side-by-Side, Clean, Audit, or Code */}
      <main className="flex-1">
        <ComparisonViewer
          activeTab={activeTab}
          preset={selectedPreset}
          result={currentResult}
          onOpenExport={() => setIsExportOpen(true)}
        />
      </main>

      {/* Export & Download Dialog */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        result={currentResult}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-700">Website Redesigner & Simplifier</span>
            <span>—</span>
            <span>Stripping bloat, ads, and fragile dependencies into pure reliable utility</span>
          </div>
          <div className="text-[11px] text-stone-400">
            Powered by Gemini 3.8 Flash & Semantic HTML5
          </div>
        </div>
      </footer>
    </div>
  );
}
