<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Impermanent Loss Calculator</title>
  <meta name="description" content="Learn how the Crypto Impermanent Loss Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:title" content="Privacy Policy | Crypto Impermanent Loss Calculator" />
  <meta property="og:description" content="Learn how the Crypto Impermanent Loss Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Impermanent Loss Calculator</strong>, a free, open-source web utility that helps users understand impermanent loss in decentralized liquidity pools. This tool operates entirely in your browser and is built with a strong commitment to <strong>privacy by design</strong>. We do not collect, store, transmit, or process any personal data. This Privacy Policy explains our practices clearly so you can use the calculator with complete confidence.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The calculator is designed to function without gathering any information from users. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: No names, email addresses, wallet addresses, or any identifying details.</li>
      <li><strong>Usage or Behavioral Data</strong>: No IP addresses, browser fingerprints, device information, or location data.</li>
      <li><strong>Input Data</strong>: All price ratios and calculations you enter are processed locally in your browser and are never sent to any server.</li>
      <li><strong>Analytics or Tracking Data</strong>: We do not use cookies, analytics tools (e.g., Google Analytics), pixels, or any tracking scripts.</li>
    </ul>
    <p>Because everything runs <strong>client-side using JavaScript</strong>, your inputs and results remain exclusively on your device.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the Crypto Impermanent Loss Calculator:</p>
    <ul>
      <li><strong>Local Processing Only</strong>: Price ratio inputs are immediately used by JavaScript to compute impermanent loss using standard mathematical formulas. No data leaves your browser.</li>
      <li><strong>No Server Interaction</strong>: The site is a static application. There is no backend, database, or API that receives user data.</li>
      <li><strong>Temporary Session Data</strong>: Any values stored temporarily (e.g., form inputs during a session) exist only in browser memory and are cleared on page refresh or closure.</li>
    </ul>
    <p>This architecture ensures <strong>absolute data isolation</strong> and makes the tool safe for exploring even sensitive trading scenarios.</p>

    <h2>4. Third-Party Services</h2>
    <p>We use only essential, privacy-respecting third-party CDNs for Bootstrap styling and icons. These resources do not enable tracking or data collection about individual users. No advertising, social media, or analytics services are integrated.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>This site <strong>does not use cookies</strong>, localStorage for persistence, sessionStorage beyond immediate use, or any other tracking technologies. Your experience is completely <em>stateless</em>.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is transmitted or stored by us, the primary responsibility for security lies with your device and browser. We recommend using up-to-date browsers and secure connections (HTTPS) when accessing the tool.</p>

    <h2>7. Children's Privacy</h2>
    <p>The calculator is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may occasionally update this Privacy Policy. Any changes will be reflected on this page with an updated effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority. By using this tool, you acknowledge our <strong>zero-data-collection</strong> approach.</p>
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