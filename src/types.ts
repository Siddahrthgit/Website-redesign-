export type SimplificationMode = 'essential' | 'reader' | 'frictionless' | 'zero-js';

export interface RemovedElement {
  category: 'ads' | 'modals' | 'trackers' | 'clutter' | 'dark-patterns' | 'heavy-scripts';
  name: string;
  reason: string;
  impact: string;
}

export interface RedesignMetrics {
  originalBytes: number;
  simplifiedBytes: number;
  originalRequests: number;
  simplifiedRequests: number;
  originalScripts: number;
  simplifiedScripts: number;
  bloatScoreBefore: number; // 0-100 (higher = worse)
  bloatScoreAfter: number;  // 0-100 (lower = cleaner)
  estimatedTtiSecondsBefore: number;
  estimatedTtiSecondsAfter: number;
}

export interface RedesignResult {
  id: string;
  title: string;
  originalUrl?: string;
  coreUtility: string;
  summary: string;
  removedElements: RemovedElement[];
  simplifiedHtml: string;
  simplifiedTailwindCode: string;
  metrics: RedesignMetrics;
  reliabilityFeatures: string[];
  accessibilityHighlights: string[];
}

export interface PresetSite {
  id: string;
  title: string;
  category: 'e-commerce' | 'news' | 'recipe' | 'saas' | 'service';
  tagline: string;
  description: string;
  originalPage: {
    title: string;
    rawHtml: string;
    simulatedBloat: {
      hasCookieBanner: boolean;
      hasNewsletterModal: boolean;
      hasAutoplayVideo: boolean;
      hasCountdownTimer: boolean;
      hasStickyFooterAd: boolean;
      hasChatbot: boolean;
    };
  };
  defaultResult: RedesignResult;
}

export interface SimplificationOptions {
  mode: SimplificationMode;
  preserveImages: boolean;
  highContrast: boolean;
  offlineReady: boolean;
  strictNoJs: boolean;
}
