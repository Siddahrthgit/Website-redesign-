import React from 'react';
import { RedesignResult } from '../types';
import { ShieldCheck, AlertTriangle, Zap, CheckCircle2, Ban, ArrowDown, Activity, Sparkles, Cpu } from 'lucide-react';

interface AuditScorecardProps {
  result: RedesignResult;
}

export const AuditScorecard: React.FC<AuditScorecardProps> = ({ result }) => {
  const { metrics, removedElements, reliabilityFeatures, accessibilityHighlights, coreUtility, summary } = result;

  const byteReductionPct = Math.round(
    ((metrics.originalBytes - metrics.simplifiedBytes) / metrics.originalBytes) * 100
  );

  const requestReductionPct = Math.round(
    ((metrics.originalRequests - metrics.simplifiedRequests) / metrics.originalRequests) * 100
  );

  const categoryBadges: Record<string, { label: string; color: string }> = {
    ads: { label: 'Ad Placements', color: 'bg-rose-100 text-rose-800 border-rose-200' },
    modals: { label: 'Invasive Modals', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    trackers: { label: 'Tracking Beacons', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    'dark-patterns': { label: 'Dark Pattern', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    'heavy-scripts': { label: 'Heavy JS Engine', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    clutter: { label: 'Cognitive Clutter', color: 'bg-stone-200 text-stone-800 border-stone-300' },
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Core Purpose Distilled */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                Core Utility Extracted
              </span>
              <span className="text-xs text-stone-500 font-mono">ID: {result.id}</span>
            </div>
            <h2 className="text-lg font-bold text-stone-900">{result.title}</h2>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
              {coreUtility}
            </p>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-right shrink-0">
            <div className="text-xs font-medium text-stone-500">Bloat Reduction</div>
            <div className="text-2xl font-extrabold text-emerald-700">
              {metrics.bloatScoreBefore} <span className="text-xs font-normal text-stone-400">→</span> {metrics.bloatScoreAfter}
              <span className="text-xs font-normal text-stone-500 ml-1">/ 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Reliability Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-1 font-medium">
            <span>Payload Size</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">
              -{byteReductionPct}%
            </span>
          </div>
          <div className="text-xl font-bold text-stone-900">
            {(metrics.simplifiedBytes / 1024).toFixed(1)} KB
          </div>
          <div className="text-xs text-stone-400 line-through mt-0.5">
            {(metrics.originalBytes / (1024 * 1024)).toFixed(2)} MB original
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-1 font-medium">
            <span>Network Requests</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">
              -{requestReductionPct}%
            </span>
          </div>
          <div className="text-xl font-bold text-stone-900">
            {metrics.simplifiedRequests} {metrics.simplifiedRequests === 1 ? 'request' : 'requests'}
          </div>
          <div className="text-xs text-stone-400 line-through mt-0.5">
            {metrics.originalRequests} requests original
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-1 font-medium">
            <span>Trackers & Scripts</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">
              -100%
            </span>
          </div>
          <div className="text-xl font-bold text-stone-900">
            {metrics.simplifiedScripts} scripts
          </div>
          <div className="text-xs text-stone-400 line-through mt-0.5">
            {metrics.originalScripts} tracking scripts original
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-stone-500 text-xs mb-1 font-medium">
            <span>Time to Interactive</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">
              Instant
            </span>
          </div>
          <div className="text-xl font-bold text-stone-900">
            ~{metrics.estimatedTtiSecondsAfter}s
          </div>
          <div className="text-xs text-stone-400 line-through mt-0.5">
            {metrics.estimatedTtiSecondsBefore}s original lag
          </div>
        </div>
      </div>

      {/* Catalog of Removed Unnecessary Elements */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
          <div>
            <h3 className="text-sm font-bold text-stone-900">Catalog of Purged Bloat & Failure Points</h3>
            <p className="text-xs text-stone-500">Every feature removed and the specific technical reason for its removal</p>
          </div>
          <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-1 rounded-md">
            {removedElements.length} Items Eliminated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {removedElements.map((item, idx) => {
            const badge = categoryBadges[item.category] || categoryBadges.clutter;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-stone-200/80 bg-stone-50/60 hover:bg-stone-50 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badge.color}`}>
                    {badge.label}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Purged
                  </span>
                </div>
                <div className="text-xs font-bold text-stone-900">{item.name}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{item.reason}</p>
                <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/50 flex items-center gap-1">
                  <strong className="text-stone-700">Impact:</strong> {item.impact}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reliability & Accessibility Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-stone-900">Reliability & Resiliency Upgrades</h3>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {reliabilityFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-bold text-stone-900">Accessibility & Usability Highlights</h3>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {accessibilityHighlights.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
