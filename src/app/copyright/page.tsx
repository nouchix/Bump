import React from 'react';

export default function CopyrightPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-ink-300">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Copyright & DMCA Policy</h1>
        <p className="text-xs font-mono text-ink-500">Effective Date: November 24, 2026 · Digital Millennium Copyright Act Notice</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Respect for Intellectual Property</h2>
        <p className="text-sm leading-relaxed">
          Bump respects the intellectual property rights of creators and expects its users to do the same. It is our policy to respond promptly to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (17 U.S.C. § 512).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Filing a DMCA Takedown Notice</h2>
        <p className="text-sm leading-relaxed">
          If you are a copyright owner or an agent thereof and believe that any content hosted on Bump infringes upon your copyright, you may submit a written notification containing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm pl-4">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          <li>Identification of the copyrighted work claimed to have been infringed (or a representative list).</li>
          <li>Identification of the material claimed to be infringing with sufficient detail for Bump to locate it on the platform (e.g., track URL).</li>
          <li>Your contact information (address, telephone number, and email).</li>
          <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
        </ul>
        <p className="text-sm pt-2">
          Send all DMCA notices to: <code className="text-signal font-mono">dmca@bump.fm</code> or our registered agent address.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Repeat Infringer Policy</h2>
        <p className="text-sm leading-relaxed">
          Bump will terminate, in appropriate circumstances, the accounts of users who are repeat infringers of copyright.
        </p>
      </section>
    </div>
  );
}
