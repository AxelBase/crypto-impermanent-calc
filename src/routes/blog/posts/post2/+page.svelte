<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Math Behind Impermanent Loss | Crypto IL Calculator Blog</title>
  <meta name="description" content="An in-depth exploration of the mathematical formula that calculates impermanent loss in constant-product automated market makers." />
  <meta property="og:title" content="The Math Behind Impermanent Loss | Crypto IL Calculator Blog" />
  <meta property="og:description" content="An in-depth exploration of the mathematical formula that calculates impermanent loss in constant-product automated market makers." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>The Math Behind Impermanent Loss</p>
  </div>

  <article class="prose">
    <h1>The Math Behind Impermanent Loss</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>Impermanent loss can be precisely calculated using a straightforward mathematical formula derived from the constant product market maker model. This formula allows liquidity providers to predict potential losses based on expected price movements before committing capital.</p>
   
    <p>The calculation begins with the price ratio between the two assets. When you deposit liquidity, the current price ratio is your entry ratio. When you withdraw, the new market price ratio becomes your exit ratio. The ratio of these two values, known as k, forms the foundation of the impermanent loss equation.</p>
   
    <h2>The Core Formula</h2>
    <p>The impermanent loss percentage is calculated as two times the square root of k divided by one plus k, minus one, multiplied by one hundred to get a percentage. This elegant formula captures how the geometric mean of the price ratio affects the value of a balanced position compared to holding assets separately.</p>
   
    <p>Meanwhile, the value change from simply holding the assets follows a simpler arithmetic mean approach. The HODL return is the average of one and k, minus one. This linear relationship contrasts sharply with the concave nature of the liquidity provider return, creating the characteristic loss pattern.</p>
   
    <h3>Understanding the Square Root</h3>
    <ul>
      <li>The square root function creates the concave return curve typical of constant product pools</li>
      <li>It ensures that extreme price movements result in bounded maximum loss</li>
      <li>The geometric nature rewards price stability and penalizes volatility</li>
      <li>This mathematical property is fundamental to AMM design</li>
    </ul>
   
    <h3>Asymptotic Behavior</h3>
    <p>As the price ratio k approaches infinity or zero, impermanent loss approaches its theoretical maximum of about negative one hundred percent in dollar terms compared to holding. However, the actual maximum loss is approximately negative thirty-three point three percent of the peak value, because the position continuously rebalances along the curve.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why does the formula use square root?</summary>
      <p>The square root comes directly from solving the constant product constraint for the optimal holdings at any price ratio, which turns out to be proportional to the square root of the price.</p>
    </details>
    <details>
      <summary>Is the formula exact?</summary>
      <p>Yes, this formula provides the exact impermanent loss for any 50/50 constant product pool with no fees considered.</p>
    </details>
    <details>
      <summary>Does pool size affect the calculation?</summary>
      <p>No. Impermanent loss percentage is independent of pool size or your share; it depends only on the price ratio change.</p>
    </details>
   
    <p class="italic-note">The beauty of this formula lies in its simplicity and universal applicability across all constant product AMMs.</p>
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