<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Impermanent Loss in AMMs | Crypto IL Calculator Blog</title>
  <meta name="description" content="A comprehensive introduction to impermanent loss, explaining what it is, why it happens in automated market makers, and its impact on liquidity providers." />
  <meta property="og:title" content="Understanding Impermanent Loss in AMMs | Crypto IL Calculator Blog" />
  <meta property="og:description" content="A comprehensive introduction to impermanent loss, explaining what it is, why it happens in automated market makers, and its impact on liquidity providers." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Impermanent Loss in AMMs</p>
  </div>

  <article class="prose">
    <h1>Understanding Impermanent Loss in AMMs</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>Impermanent loss is one of the most important concepts for anyone providing liquidity in decentralized exchanges that use automated market makers (AMMs), such as Uniswap, SushiSwap, or PancakeSwap. It represents the difference in value between holding assets outside a liquidity pool and providing them inside one when prices change.</p>
   
    <p>At its core, impermanent loss occurs because AMMs rely on a constant product formula (x * y = k) to maintain balance between the two assets in a pool. When the external market price of one asset moves significantly relative to the other, the pool automatically rebalances by buying the cheaper asset and selling the more expensive one. This arbitrage keeps the pool aligned with the market, but it causes liquidity providers to end up holding more of the asset that decreased in value and less of the one that increased.</p>
   
    <h2>Why the Loss is Called Impermanent</h2>
    <p>The term impermanent reflects the fact that the loss is only realized if the provider withdraws their liquidity while the price ratio is different from when they deposited. If prices return to the original ratio, the loss disappears completely. However, in volatile markets, prices rarely return exactly to the starting point, making the loss effectively permanent in many cases.</p>
   
    <h2>How It Affects Liquidity Providers</h2>
    <p>Compared to simply holding the same assets in a wallet (often called HODLing), providing liquidity can result in lower overall returns when prices diverge significantly. For example, if one token doubles in price while the other stays stable, a liquidity provider will have less total value than someone who just held both tokens separately.</p>
   
    <h3>Key Points to Remember</h3>
    <ul>
      <li>Impermanent loss increases with greater price divergence from the entry ratio</li>
      <li>It affects all constant-product 50/50 pools equally, regardless of trading volume</li>
      <li>The loss is symmetric: it occurs whether prices go up or down</li>
      <li>It only applies to price changes, not to trading fees earned</li>
    </ul>
   
    <h3>Real-World Implications</h3>
    <p>Many new liquidity providers are surprised to find their position worth less in dollar terms despite earning fees. Understanding impermanent loss helps set realistic expectations and choose appropriate pools. Stablecoin pairs typically experience very low impermanent loss, while volatile token pairs can see significant divergence.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Does impermanent loss mean I always lose money providing liquidity?</summary>
      <p>No. Trading fees can offset or exceed impermanent loss, especially in high-volume pools. The net outcome depends on both price movement and fee earnings.</p>
    </details>
    <details>
      <summary>Can impermanent loss be negative?</summary>
      <p>Yes, a negative value simply means your liquidity position is worth less than holding the assets separately.</p>
    </details>
    <details>
      <summary>Which pools have the highest impermanent loss risk?</summary>
      <p>Pools with two volatile assets that are not correlated tend to experience the highest impermanent loss potential.</p>
    </details>
   
    <p class="italic-note">Mastering impermanent loss is essential for successful liquidity provision in DeFi.</p>
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