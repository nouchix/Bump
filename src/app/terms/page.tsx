import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-ink-300">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-xs font-mono text-ink-500">Effective Date: November 24, 2026 · Version 1.0</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. The Bump 100% Artist Promise</h2>
        <p className="text-sm leading-relaxed">
          Bump operates as an artist-first music streaming and direct-to-fan distribution platform. Artists who upload their music to Bump retain <strong>100% of their net track download and sales revenue</strong>. Bump charges 0% platform commission on music sales. Payment processing fees are managed directly via Stripe Connect.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Artist Ownership & Non-Exclusive License</h2>
        <p className="text-sm leading-relaxed">
          Artists retain 100% of their copyright, publishing, and master recording rights. By uploading audio recordings or artwork to Bump, you grant Bump a worldwide, non-exclusive, royalty-free license strictly to host, stream, display, and deliver digital downloads of your content to users as configured by you. Bump makes <strong>no claim of ownership</strong> over any music uploaded.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Payouts & Stripe Connect</h2>
        <p className="text-sm leading-relaxed">
          Direct sales are processed through Stripe Connect. Artists are responsible for maintaining a valid connected Stripe account in good standing. Bump does not act as a custodian of your funds for direct track sales; payments pass directly to your destination account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. User Conduct & Content Restrictions</h2>
        <p className="text-sm leading-relaxed">
          You agree not to upload any material that infringes third-party intellectual property rights, promotes illegal acts, or violates our DMCA policies. Any track found to infringe copyright will be removed immediately upon notice.
        </p>
      </section>
    </div>
  );
}
