import React, { useState } from 'react';
import { PresetSite } from '../types';
import { AlertCircle, Eye, EyeOff, ShieldAlert, Sparkles, X } from 'lucide-react';

interface ClutteredPageViewProps {
  preset: PresetSite;
  customHtml?: string;
}

export const ClutteredPageView: React.FC<ClutteredPageViewProps> = ({ preset, customHtml }) => {
  const [highlightBloat, setHighlightBloat] = useState(true);
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const [newsletterDismissed, setNewsletterDismissed] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(164);

  // Countdown timer simulation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 10 ? prev - 1 : 180));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const isCustom = preset.id.startsWith('custom-');
  const isRecipe = preset.id === 'recipe-blog';
  const isSaas = preset.id === 'saas-landing';
  const isNews = preset.id === 'news-article';
  const isEcom = preset.id === 'ecommerce-product';
  const isGov = preset.id === 'government-service';

  return (
    <div className="bg-stone-100 rounded-xl border border-stone-200 overflow-hidden flex flex-col h-[700px] shadow-xs">
      {/* Browser Chrome Header */}
      <div className="bg-stone-200/90 px-3 py-2 border-b border-stone-300 flex items-center justify-between text-xs text-stone-600 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="bg-white px-2.5 py-1 rounded text-[11px] font-mono text-stone-500 border border-stone-300 flex items-center gap-1.5 w-60 sm:w-80 truncate">
            <span className="text-rose-500 font-bold">⚠️ Unreliable</span>
            <span className="truncate">
              {preset.defaultResult.originalUrl || `https://bloated-web.example/${preset.id}`}
            </span>
          </div>
        </div>

        <button
          onClick={() => setHighlightBloat(!highlightBloat)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
            highlightBloat
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
          }`}
          title="Highlight bloated elements in red overlays"
        >
          {highlightBloat ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span>{highlightBloat ? 'Bloat Highlight: ON' : 'Inspect Bloat'}</span>
        </button>
      </div>

      {/* Simulated Page View Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-white relative font-sans text-stone-800 text-sm">
        {/* Floating Urgency Countdown Banner (SaaS, E-com & Custom) */}
        {(isSaas || isEcom || isCustom) && (
          <div
            className={`p-2 text-center text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 mb-3 rounded ${
              highlightBloat ? 'ring-2 ring-rose-500 ring-offset-2' : ''
            }`}
          >
            {highlightBloat && (
              <span className="bg-black/70 text-yellow-300 px-1.5 py-0.5 rounded text-[10px] uppercase mr-2">
                Dark Pattern: Fake Scarcity
              </span>
            )}
            🔥 FLASH SALE! Only {formatTimer(timerSeconds)} left before deal expires forever! (Fake Timer)
          </div>
        )}

        {/* Intrusive Cookie Banner */}
        {!cookieDismissed && (
          <div
            className={`p-3 bg-stone-900 text-stone-200 text-xs rounded-lg mb-3 flex items-center justify-between gap-2 ${
              highlightBloat ? 'border-2 border-rose-500' : ''
            }`}
          >
            <div>
              {highlightBloat && (
                <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-1.5">
                  Bloat: Cookie Consent Wall
                </span>
              )}
              We and our 428 marketing partners store cookies to track your mouse movements and browsing history.
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => setCookieDismissed(true)}
                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded"
              >
                Accept All (No Reject Option)
              </button>
            </div>
          </div>
        )}

        {/* Leaderboard Banner Ad */}
        <div
          className={`p-4 bg-stone-100 border border-stone-200 text-center rounded-lg mb-4 text-xs text-stone-500 ${
            highlightBloat ? 'border-2 border-dashed border-rose-500 bg-rose-50/40 text-rose-700' : ''
          }`}
        >
          {highlightBloat && (
            <div className="text-[10px] font-bold uppercase text-rose-700 mb-1">
              [Bloat Removed: 728x90 Leaderboard AdSlot - 1.2MB payload]
            </div>
          )}
          <strong>ADVERTISEMENT:</strong> High-yield crypto accounts & zero-down mattresses. Click here!
        </div>

        {/* Custom Analyzed Website Content */}
        {isCustom && (
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-stone-900">{preset.title}</h1>
            <p className="text-xs text-stone-500">{preset.tagline}</p>
            
            <div
              className={`p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-2 ${
                highlightBloat ? 'border-l-4 border-l-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-700">
                  [Bloat Flagged: Unminified Markup & Inlined Tracking Scripts]
                </div>
              )}
              <p className="leading-relaxed">
                {preset.description || 'Original content extracted from source webpage, containing redundant DOM nodes, marketing wrappers, and external tracking pixels.'}
              </p>
            </div>

            {/* Newsletter Popup Simulation */}
            {!newsletterDismissed && (
              <div
                className={`p-3.5 bg-amber-50 border border-amber-200 rounded-lg relative ${
                  highlightBloat ? 'border-2 border-rose-500' : ''
                }`}
              >
                <button
                  onClick={() => setNewsletterDismissed(true)}
                  className="absolute right-2 top-2 p-1 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
                {highlightBloat && (
                  <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                    Bloat: Invasive Newsletter Takeover
                  </span>
                )}
                <div className="text-xs font-bold text-stone-900 mt-1">Don't miss our updates!</div>
                <div className="flex gap-2 mt-2">
                  <input
                    type="email"
                    placeholder="Enter work email"
                    className="px-2.5 py-1 text-xs bg-white border border-stone-300 rounded flex-1"
                  />
                  <button className="px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recipe Specific Clutter */}
        {isRecipe && (
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-stone-900">
              Grandma’s Secret Authentic Tuscan Lasagna Recipe (The Ultimate 2024 Guide)
            </h1>
            <p className="text-xs text-stone-400">By Chef Bella • 45 min read • 89 Comments • 14 Shares</p>

            {/* Newsletter Takeover Overlay Simulation */}
            {!newsletterDismissed && (
              <div
                className={`p-4 bg-amber-50 border border-amber-200 rounded-xl relative ${
                  highlightBloat ? 'border-2 border-rose-500' : ''
                }`}
              >
                <button
                  onClick={() => setNewsletterDismissed(true)}
                  className="absolute right-2 top-2 p-1 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
                {highlightBloat && (
                  <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                    Bloat: Invasive Newsletter Takeover
                  </span>
                )}
                <h4 className="font-bold text-stone-900 mt-1">Wait! Get my 120-Page eBook Before You Read!</h4>
                <div className="flex gap-2 mt-2">
                  <input
                    type="email"
                    placeholder="Your primary email"
                    className="px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded flex-1"
                  />
                  <button className="px-3 py-1.5 bg-amber-600 text-white font-bold text-xs rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            )}

            <div
              className={`p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-600 space-y-2 ${
                highlightBloat ? 'border-l-4 border-l-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-700">
                  [Bloat Removed: 3,200-Word Unrelated Memoir]
                </div>
              )}
              <p>
                It was the golden summer of 1998 in the rugged hills of Lucca. The cicadas hummed gently
                while my Nonna Maria tied her vintage flour-dusted apron. To understand the subtle balance
                of ricotta and San Marzano tomatoes, we must first reflect on the agrarian post-war history
                of Tuscany...
              </p>
              <p>
                Before we examine the pasta sheets, let me tell you about our six-hour flight delay at
                Fiumicino airport, how my luggage was rerouted to Munich, and why my uncle Giuseppe believes
                the secret to tomato paste is praying under a crescent moon...
              </p>
            </div>

            {/* Video Autoplay Ad */}
            <div
              className={`p-4 bg-stone-900 text-white text-xs rounded-lg text-center ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-400 mb-1">
                  [Bloat Removed: Autoplaying Video Player with Audio - 4.5MB Stream]
                </div>
              )}
              ▶ [Autoplaying Video: "How to slice garlic thinly" - 15s unskippable ad playing]
            </div>

            <div className="border-t border-stone-200 pt-3">
              <span className="text-xs text-stone-400">[Recipe finally starts 12 screens down below...]</span>
            </div>
          </div>
        )}

        {/* SaaS Specific Clutter */}
        {isSaas && (
          <div className="space-y-4">
            <div className="text-center py-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                Gartner Adjacent Leader
              </span>
              <h1 className="text-2xl font-extrabold text-stone-900 mt-2">
                Hyper-Scale Paradigm For Autonomous Vectorized Edge Cloud Synergies
              </h1>
              <p className="text-xs text-stone-500 mt-2 max-w-md mx-auto">
                Orchestrate multi-tenant reactive hyper-graphs with zero-trust continuous quantum observability.
              </p>

              {/* Chatbot Popups */}
              <div
                className={`mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-left text-xs ${
                  highlightBloat ? 'border-2 border-rose-500' : ''
                }`}
              >
                {highlightBloat && (
                  <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                    Bloat: 2 Competing Sales Chatbot Interrupters
                  </span>
                )}
                💬 "Hi! I'm Sarah from Sales. Are you ready for a 45-minute mandatory enterprise demo?"
              </div>

              {/* 9-tier Pricing Mess */}
              <div
                className={`mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs ${
                  highlightBloat ? 'border-2 border-rose-500' : ''
                }`}
              >
                {highlightBloat && (
                  <div className="text-[10px] font-bold uppercase text-rose-700 mb-1">
                    [Bloat Removed: 9-Tier Confusing Pricing with Deceptive Quarterly Traps]
                  </div>
                )}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="border p-2 rounded">Tier 1: $19*</div>
                  <div className="border p-2 rounded">Tier 2: $99*</div>
                  <div className="border p-2 rounded">Enterprise: Call Us</div>
                </div>
                <div className="text-[10px] text-stone-400 mt-1">*Billed biennially upfront + $49/mo agent fee</div>
              </div>
            </div>
          </div>
        )}

        {/* News Specific Clutter */}
        {isNews && (
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-stone-900">
              Global Renewable Energy Reaches Record High in 2024 Report
            </h1>
            <p className="text-xs text-stone-400">By Staff Writer • Sponsored by SolarFuture LLC</p>

            <div
              className={`p-3 bg-yellow-50 border border-yellow-200 rounded text-xs ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                  Bloat: Interstitial Survey Wall
                </span>
              )}
              Survey: "Do you own a car?" [Answer to read remaining 3 sentences]
            </div>

            <p className="text-xs text-stone-700">
              Global renewable energy deployment expanded rapidly across continents according to the international report...
            </p>

            {/* Clickbait Grid */}
            <div
              className={`p-3 bg-stone-50 border border-stone-200 rounded-lg ${
                highlightBloat ? 'border-2 border-dashed border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-700 mb-2">
                  [Bloat Removed: 12 Outbrain/Taboola Clickbait Links]
                </div>
              )}
              <div className="text-xs font-bold text-stone-700 mb-1">Sponsored Content:</div>
              <ul className="text-xs text-blue-600 underline space-y-1">
                <li>• If you have a ceiling fan, turn it off immediately</li>
                <li>• Put a clove of garlic under your pillow and see what happens</li>
                <li>• Senior citizens born before 1965 get this secret tax perk</li>
              </ul>
            </div>
          </div>
        )}

        {/* E-Commerce Specific Clutter */}
        {isEcom && (
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-stone-900">Voyager 35L Waterproof Travel Backpack</h1>
            <div className="text-red-600 font-bold text-lg">
              $189.00 <span className="line-through text-stone-400 text-xs">$499.00 (62% OFF TODAY ONLY)</span>
            </div>

            <div
              className={`p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                  Dark Pattern: Fabricated Scarcity
                </span>
              )}
              ⚠️ 34 people have this in their cart right now! Only 1 backpack remaining in stock!
            </div>

            {/* Pre-checked upsells */}
            <div
              className={`p-3 bg-stone-50 border border-stone-200 rounded space-y-2 text-xs ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-700 mb-1">
                  [Dark Pattern Removed: Sneaky Pre-Checked Add-Ons (+$74.97)]
                </div>
              )}
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> Add 2-Year Drop Protection (+$39.99)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> Add Express Carbon-Neutral Shipping (+$19.99)
              </label>
            </div>
          </div>
        )}

        {/* Government Civic Clutter */}
        {isGov && (
          <div className="space-y-3">
            <div className="text-[10px] text-stone-400">
              Home &gt; Departments &gt; Transportation &gt; Sub-Division &gt; Forms &gt; 14B-Rev3
            </div>
            <h1 className="text-lg font-bold text-stone-900">
              Resident Parking Permit Application (28-Page Form)
            </h1>

            <div
              className={`p-3 bg-red-50 border border-red-300 rounded text-xs text-red-900 ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
                  Bloat: Hostile Legalese & Disclaimers
                </span>
              )}
              PENAL WARNING: Falsification of Form 14B carries municipal penalties up to $5,000 and 6 months revocation.
            </div>

            <div
              className={`p-3 bg-stone-50 border border-stone-200 rounded space-y-2 text-xs ${
                highlightBloat ? 'border-2 border-rose-500' : ''
              }`}
            >
              {highlightBloat && (
                <div className="text-[10px] font-bold uppercase text-rose-700 mb-1">
                  [Bloat Removed: 24 Redundant Government Fields]
                </div>
              )}
              <input disabled placeholder="Maternal Grandmother Maiden Name" className="w-full p-1.5 border bg-white rounded text-xs" />
              <input disabled placeholder="10-Year Residential History (All 50 states)" className="w-full p-1.5 border bg-white rounded text-xs" />
              <input disabled placeholder="Vehicle Tire Width (Exact Millimeters)" className="w-full p-1.5 border bg-white rounded text-xs" />
            </div>
          </div>
        )}

        {/* Sticky Footer Ad */}
        <div
          className={`sticky bottom-0 mt-6 p-2.5 bg-stone-900 text-white text-xs text-center rounded-t-lg ${
            highlightBloat ? 'border-2 border-rose-500 bg-rose-950' : ''
          }`}
        >
          {highlightBloat && (
            <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase mr-2">
              Bloat: Sticky Overlay Ad
            </span>
          )}
          Ad: Low rate mortgage refinancing available in your postal code! [X]
        </div>
      </div>
    </div>
  );
};
