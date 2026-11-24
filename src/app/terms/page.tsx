import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-ink-300">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Terms of Service & Platform Agreement</h1>
        <p className="text-xs font-mono text-ink-500">Effective Date: November 24, 2026 · Version 1.1</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Platform Services & 100% Music Sales Model</h2>
        <p className="text-sm leading-relaxed">
          Bump operates as a marketplace platform facilitating digital content distribution, discovery, and direct fan-to-artist commerce. Under the Bump 100% Artist Promise, Bump deducts a <strong>0% platform application fee</strong> on qualifying direct digital track sales. 100% of the net purchase price (less third-party card processing fees charged by Stripe) is transferred to the creator's connected Stripe account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Payment Processing & Stripe Connected Account Agreement</h2>
        <p className="text-sm leading-relaxed">
          Payment processing services for creators on Bump are provided by Stripe and are subject to the{' '}
          <a
            href="https://stripe.com/legal/ssa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:underline"
          >
            Stripe Services Agreement (SSA)
          </a>{' '}
          and the{' '}
          <a
            href="https://stripe.com/connect-account/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:underline"
          >
            Stripe Connected Account Agreement
          </a>.
        </p>
        <p className="text-sm leading-relaxed">
          By agreeing to these Terms or continuing to operate as a creator on Bump, you agree to be bound by the Stripe Services Agreement, as the same may be modified by Stripe from time to time. As a condition of Bump enabling payment processing services through Stripe, you agree to provide Bump accurate and complete information about you and your business, and you authorize Bump to share transaction information related to your use of payment processing services provided by Stripe.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Funds Flow & Seller of Record</h2>
        <p className="text-sm leading-relaxed">
          Bump acts as the platform orchestrator that collects buyer payments via Stripe Checkout and automatically routes funds to the creator via Stripe Connect destination transfers. Bump does not maintain custodial depository banking accounts for user funds.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. Artist Master Rights, Warranties & Documentation</h2>
        <p className="text-sm leading-relaxed">
          You represent and warrant that: (a) you are the sole and exclusive owner of all rights, title, and interest in and to the sound recordings, musical compositions, and artwork uploaded, or that you possess all necessary written licenses, clearances, and authorizations from all rights holders (including featured artists, producers, and label partners); (b) the public performance, digital distribution, and sale of your content does not and will not infringe any third-party copyright, trademark, privacy, or publicity rights.
        </p>
        <p className="text-sm leading-relaxed">
          Bump reserves the right to request executed master rights clearance documentation at any time. Failure to provide verification may result in immediate suspension of account privileges and withholding of in-flight transfers pending dispute resolution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">5. Chargebacks, Refunds & Fraud Prevention</h2>
        <p className="text-sm leading-relaxed">
          Creators are responsible for disputes, fraudulent transactions, and chargebacks initiated by purchasers of their content. Bump and Stripe monitor transaction risk and reserve the right to establish reserve balances or deduct disputed amounts from future creator disbursements in accordance with the Stripe Services Agreement.
        </p>
      </section>
    </div>
  );
}
