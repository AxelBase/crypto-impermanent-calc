<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Price Ratio Changes Drive IL | Crypto IL Calculator Blog</title>
  <meta name="description" content="Learn how changes in the price ratio between two assets directly determine the magnitude of impermanent loss in liquidity pools." />
  <meta property="og:title" content="How Price Ratio Changes Drive IL | Crypto IL Calculator Blog" />
  <meta property="og:description" content="Learn how changes in the price ratio between two assets directly determine the magnitude of impermanent loss in liquidity pools." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Price Ratio Changes Drive IL</p>
  </div>

  <article class="prose">
    <h1>How Price Ratio Changes Drive IL</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>The magnitude of impermanent loss depends entirely on how much the price ratio between the two assets in a liquidity pool changes during the time you provide liquidity. This ratio, defined as the price of asset B divided by asset A, serves as the single input that determines your potential loss or relative performance compared to holding.</p>
   
    <p>When you enter a pool, the current market price establishes your entry ratio. Any deviation from this ratio when you exit creates impermanent loss. The relationship is not linear: small changes cause minimal loss, while larger divergences create increasingly significant impacts, though with diminishing marginal effects due to the square root function in the formula.</p>
   
    <h2>Practical Examples</h2>
    <p>A ten percent price change results in virtually negligible impermanent loss, often less than half a percent. A fifty percent move generates around two point four percent loss. Doubling the price creates approximately five point eight percent loss, while a fourfold increase leads to seventeen point two percent loss. These numbers demonstrate how the impact accelerates with larger moves.</p>
   
    <p>The symmetry of the formula means that whether the price ratio doubles or halves, the impermanent loss magnitude remains identical. This bidirectional nature means liquidity providers face risk in both bull and bear moves for either asset.</p>
   
    <h3>Common Scenarios</h3>
    <ul>
      <li>Stablecoin pairs typically maintain ratios very close to one, resulting in near-zero impermanent loss</li>
      <li>Correlated assets like wrapped Bitcoin variants show lower divergence than uncorrelated pairs</li>
      <li>High-volatility token pairs can experience frequent large ratio swings</li>
      <li>Temporary pumps or dumps create significant but potentially reversible loss if prices revert</li>
    </ul>
   
    <h3>Strategic Implications</h3>
    <p>Understanding ratio sensitivity helps providers choose appropriate pools for their risk tolerance. Those seeking minimal impermanent loss exposure favor stable or tightly correlated pairs. Providers comfortable with higher potential loss might target volatile pools offering higher fee potential to compensate.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Whats the worst-case price change?</summary>
      <p>Theoretical maximum loss occurs as the price ratio approaches infinity or zero, approaching but never quite reaching one hundred percent loss versus holding.</p>
    </details>
    <details>
      <summary>Do small daily changes add up?</summary>
      <p>Yes. Frequent small divergences can compound over time, though the concave nature limits total impact compared to one large move.</p>
    </details>
    <details>
      <summary>Can I predict IL before providing liquidity?</summary>
      <p>Yes, by estimating potential price ranges and calculating expected loss for different scenarios using tools like this calculator.</p>
    </details>
   
    <p class="italic-note">Price ratio awareness empowers better decision-making in liquidity provision.</p>
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