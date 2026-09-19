import React, { useState } from 'react';
import { PresetSite, RedesignResult } from '../types';
import { ClutteredPageView } from './ClutteredPageView';
import { CleanPreviewSandbox } from './CleanPreviewSandbox';
import { AuditScorecard } from './AuditScorecard';
import { Copy, Check, Download, Code2, ArrowRightLeft, FileCode, CheckCircle2 } from 'lucide-react';

interface ComparisonViewerProps {
  activeTab: 'split' | 'clean' | 'audit' | 'code';
  preset: PresetSite;
  result: RedesignResult;
  onOpenExport: () => void;
}

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({
  activeTab,
  preset,
  result,
  onOpenExport,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [codeType, setCodeType] = useState<'html' | 'tailwind'>('html');

  const handleCopyCode = () => {
    const textToCopy = codeType === 'html' ? result.simplifiedHtml : result.simplifiedTailwindCode;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${result.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafaf9; }
  </style>
</head>
<body class="p-4 sm:p-8">
  ${result.simplifiedHtml}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-simplified.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* 1. Side-by-Side Split View */}
      {activeTab === 'split' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Original Cluttered Webpage
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Redesigned Simple & Reliable Version
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ClutteredPageView preset={preset} />
            <CleanPreviewSandbox result={result} />
          </div>
        </div>
      )}

      {/* 2. Clean Focused View */}
      {activeTab === 'clean' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <h2 className="text-base font-bold text-stone-900">{result.title}</h2>
              <p className="text-xs text-stone-500 mt-0.5">{result.coreUtility}</p>
            </div>
            <button
              onClick={handleDownloadHtml}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Clean .html</span>
            </button>
          </div>
          <CleanPreviewSandbox result={result} />
        </div>
      )}

      {/* 3. Audit & Diagnostic Report */}
      {activeTab === 'audit' && (
        <div>
          <AuditScorecard result={result} />
        </div>
      )}

      {/* 4. Code & Export View */}
      {activeTab === 'code' && (
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <div>
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-stone-600" />
                Simplified & Reliable Component Code
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Ready-to-use semantic HTML with standard utility classes. No external JavaScript frameworks required.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex bg-stone-100 rounded-lg p-0.5 border border-stone-200 text-xs">
                <button
                  onClick={() => setCodeType('html')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    codeType === 'html' ? 'bg-white text-stone-900 font-semibold shadow-xs' : 'text-stone-600'
                  }`}
                >
                  Pure HTML
                </button>
                <button
                  onClick={() => setCodeType('tailwind')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    codeType === 'tailwind' ? 'bg-white text-stone-900 font-semibold shadow-xs' : 'text-stone-600'
                  }`}
                >
                  Tailwind Snippet
                </button>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>

              <button
                onClick={handleDownloadHtml}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Standalone .html</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl overflow-x-auto text-xs font-mono max-h-[500px] leading-relaxed">
              <code>{codeType === 'html' ? result.simplifiedHtml : result.simplifiedTailwindCode}</code>
            </pre>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Zero external dependencies. Works on all modern and legacy browsers without JavaScript compilation.
              </span>
            </div>
            <span className="font-mono text-stone-400">
              {(result.simplifiedHtml.length / 1024).toFixed(1)} KB clean markup
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
