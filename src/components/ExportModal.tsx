import React, { useState } from 'react';
import { RedesignResult } from '../types';
import { X, Download, Copy, Check, FileCode, CheckCircle2, Share2, Printer } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: RedesignResult;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, result }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedReport, setCopiedReport] = useState(false);

  if (!isOpen) return null;

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${result.title} - Simplified & Reliable</title>
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(result.simplifiedHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyReport = () => {
    const reportText = `WEBSITE SIMPLIFICATION & RELIABILITY AUDIT
Page: ${result.title}
Core Utility: ${result.coreUtility}

METRICS SUMMARY:
- Bloat Score: ${result.metrics.bloatScoreBefore}/100 -> ${result.metrics.bloatScoreAfter}/100
- Payload: ${(result.metrics.originalBytes / 1024).toFixed(1)} KB -> ${(result.metrics.simplifiedBytes / 1024).toFixed(1)} KB (-${Math.round(((result.metrics.originalBytes - result.metrics.simplifiedBytes) / result.metrics.originalBytes) * 100)}%)
- HTTP Requests: ${result.metrics.originalRequests} -> ${result.metrics.simplifiedRequests}
- Trackers & Scripts Purged: ${result.metrics.originalScripts} -> 0
- Time to Interactive: ${result.metrics.estimatedTtiSecondsBefore}s -> ${result.metrics.estimatedTtiSecondsAfter}s

PURGED BLOAT ITEMS:
${result.removedElements.map((e) => `• [${e.category.toUpperCase()}] ${e.name}: ${e.reason} (Impact: ${e.impact})`).join('\n')}

RELIABILITY FEATURES:
${result.reliabilityFeatures.map((f) => `✓ ${f}`).join('\n')}
`;

    navigator.clipboard.writeText(reportText);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            Export Center
          </span>
        </div>
        <h2 className="text-lg font-bold text-stone-900">{result.title}</h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Export the simplified page as an offline bundle or copy the technical audit report.
        </p>

        <div className="space-y-3 my-5">
          {/* Option 1: Standalone HTML */}
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-stone-900">Standalone Offline .html File</div>
              <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Single file containing clean semantic HTML and styles. Opens anywhere, no web server required.
              </div>
            </div>
            <button
              onClick={handleDownloadHtml}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shrink-0 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>

          {/* Option 2: Copy Component HTML */}
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-stone-900">Copy HTML Component</div>
              <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Embed directly into your React, Vue, or static site codebase.
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold shrink-0 transition-colors shadow-xs"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Option 3: Copy Bloat Audit Report */}
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-stone-900">Copy Technical Audit Summary</div>
              <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                Summary of all eliminated trackers, ads, dark patterns, and speed gain stats in text format.
              </div>
            </div>
            <button
              onClick={handleCopyReport}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold shrink-0 transition-colors shadow-xs"
            >
              {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedReport ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-stone-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
