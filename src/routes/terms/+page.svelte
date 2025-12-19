<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Impermanent Loss Calculator</title>
  <meta name="description" content="Review the terms of use for the Crypto Impermanent Loss Calculator, a free educational tool provided as-is." />
  <meta property="og:title" content="Terms and Conditions | Crypto Impermanent Loss Calculator" />
  <meta property="og:description" content="Review the terms of use for the Crypto Impermanent Loss Calculator, a free educational tool provided as-is." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Impermanent Loss Calculator</strong> (the "Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. We reserve the right to update these terms at any time, and continued use constitutes acceptance of changes.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a free, client-side web application that calculates theoretical impermanent loss in 50/50 constant-product liquidity pools based on user-provided price ratios. It is intended solely for <strong>educational and informational purposes</strong>. Results are mathematical estimates and do not account for trading fees, slippage, or real-world pool dynamics.</p>

    <h2>3. No Financial Advice</h2>
    <p><strong>The Tool does not provide financial, investment, or trading advice.</strong> Calculations are illustrative only. Liquidity provision involves significant risk, including potential loss of principal. You are solely responsible for any decisions made based on the Tool's output. Always conduct your own research and consider consulting qualified professionals before engaging in DeFi activities.</p>

    <h2>4. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted uses include:</p>
    <ul>
      <li>Entering price ratios to explore impermanent loss scenarios</li>
      <li>Reading educational blog content</li>
      <li>Sharing direct links to the Tool</li>
    </ul>
    <p>Prohibited uses include automated scraping, redistribution of the Tool as your own, or any activity that imposes unreasonable load on hosting infrastructure.</p>

    <h2>5. Accuracy and Availability</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind. While we strive for accuracy in the underlying formulas, we do not guarantee error-free operation, uninterrupted access, or compatibility with all devices and browsers.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool's source code is open-source and available on GitHub under a permissive license. Content such as blog articles and documentation is copyrighted but may be shared with proper attribution. The calculator's name and branding remain property of the original developer.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool, including but not limited to financial losses from liquidity provision decisions informed by its output.</p>

    <h2>8. External Links</h2>
    <p>The Tool may contain links to external resources (e.g., protocol documentation). We are not responsible for the content or availability of third-party sites.</p>

    <h2>9. Termination</h2>
    <p>We may restrict access to the Tool at any time without notice.</p>

    <h2>10. Governing Law</h2>
    <p>These terms are governed by general internet community standards and open-source principles.</p>

    <p class="italic-note">Thank you for using this educational resource responsibly. Your understanding helps maintain a helpful tool for the entire community.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .breadcrumbs a {
    color: var(--accent-color);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .breadcrumbs p {
    margin: 0;
    color: var(--text-main);
  }

  .prose {
    line-height: 1.8;
    color: var(--text-main);
  }

  .prose .post-meta {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
  }

  .prose h1,
  .prose h2{
    color: var(--accent-color);
    font-weight: 700;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-main);
    margin-bottom: 1.2rem;
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-main);
  }

  .prose ul li::marker {
    color: var(--accent-color);
  }

  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }


  .prose .italic-note {
    font-style: italic;
    color: var(--text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
</style>