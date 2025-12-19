<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>When Impermanent Loss Approaches 100% | Crypto IL Calculator Blog</title>
  <meta name="description" content="Explore extreme price scenarios where impermanent loss becomes very large and why it approaches but never quite reaches 100% loss versus holding." />
  <meta property="og:title" content="When Impermanent Loss Approaches 100% | Crypto IL Calculator Blog" />
  <meta property="og:description" content="Explore extreme price scenarios where impermanent loss becomes very large and why it approaches but never quite reaches 100% loss versus holding." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>When Impermanent Loss Approaches 100%</p>
  </div>

  <article class="prose">
    <h1>When Impermanent Loss Approaches 100%</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>In extreme market conditions, impermanent loss can become dramatically large, sometimes appearing to approach a complete loss compared to simply holding the assets. Understanding these edge cases helps liquidity providers recognize the true risks of highly volatile pools.</p>
   
    <p>When one asset in a pair increases or decreases massively in price relative to the other, the constant product formula forces the pool to hold almost entirely the depreciated asset. This rebalancing mechanism, while essential for maintaining market prices, causes the liquidity provider's position to consist predominantly of the losing token.</p>
   
    <h2>The Asymptotic Limit</h2>
    <p>As the price ratio moves toward infinity or zero, impermanent loss approaches negative one hundred percent when measured against the explosive growth of holding. However, the actual dollar value loss compared to the peak portfolio value is bounded. The mathematical limit shows that the worst possible impermanent loss relative to the maximum possible holding value is approximately negative thirty-three point three percent.</p>
   
    <p>This bounded behavior arises from the continuous rebalancing along the hyperbolic curve defined by the constant product. The position never fully converts to a single asset; it always retains a tiny fraction of the appreciating token, preventing total loss in absolute terms.</p>
   
    <h3>What Extreme Scenarios Look Like</h3>
    <ul>
      <li>A price increase of ten thousand times results in impermanent loss exceeding negative ninety-nine percent versus holding</li>
      <li>The liquidity position becomes almost entirely the original base asset</li>
      <li>Holding would have captured nearly all the upside from the surging token</li>
      <li>Similar effects occur in severe crashes where one asset approaches zero value</li>
    </ul>
   
    <h3>Real-World Context</h3>
    <p>While such extreme ratios are rare in established pairs, they can occur during token launches, rug pulls, or catastrophic failures. More commonly, moderate but sustained trends in volatile pairs can push impermanent loss into double-digit percentages over time.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Can impermanent loss ever reach exactly 100%?</summary>
      <p>No. The mathematical limit is approached but never reached, as the position always retains an infinitesimal amount of the appreciating asset.</p>
    </details>
    <details>
      <summary>Do fees protect against extreme IL?</summary>
      <p>In theory yes, but in extreme short-term pumps, trading volume may not generate enough fees to offset the rapid divergence loss.</p>
    </details>
    <details>
      <summary>Should I avoid pools with high IL potential?</summary>
      <p>It depends on your strategy. Higher potential loss often correlates with higher fee potential in active pools.</p>
    </details>
   
    <p class="italic-note">Extreme cases highlight the fundamental trade-off between earning fees and bearing divergence risk in AMMs.</p>
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
  .prose h2,
  .prose h3 {
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

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background 0.3s ease;
  }

  .prose details[open] {
    background: rgba(56, 189, 248, 0.1);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-color);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-color);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-color);
    color: var(--text-muted);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
</style>