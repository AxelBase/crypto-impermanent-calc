<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Understanding Impermanent Loss in AMMs',
      description: 'A clear explanation of what impermanent loss is, why it occurs in constant-product pools, and how it affects liquidity providers.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The Math Behind Impermanent Loss',
      description: 'Dive into the exact formula used in 50/50 liquidity pools and how price divergence impacts your position versus HODLing.'
    },
    {
      href: '/blog/posts/post3',
      title: 'How Price Ratio Changes Drive IL',
      description: 'Learn how entry and exit price ratios determine loss magnitude, with real-world examples of small and extreme divergences.'
    },
    {
      href: '/blog/posts/post4',
      title: 'When Impermanent Loss Approaches 100%',
      description: 'Explore extreme scenarios where one asset dominates the pool and why IL can reach near-total loss in theory.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Comparing LP Returns vs. Simply Holding',
      description: 'See side-by-side comparisons of liquidity provision outcomes against HODLing across different market conditions.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Limitations of Pure IL Calculations',
      description: 'Why this calculator shows theoretical loss and how trading fees in real pools can offset or even overcome impermanent loss.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Using This Calculator Effectively',
      description: 'Best practices for interpreting results, testing strategies, and making informed decisions about providing liquidity.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Impermanent Loss Calculator</title>
  <meta name="description" content="In-depth articles explaining impermanent loss mechanics, formulas, real-world implications, and how to use the calculator effectively." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-graph-down-arrow"></i> Blog: Impermanent Loss Insights</h1>
    <p class="subtitle">
      Deep dives into the mechanics of impermanent loss in decentralized liquidity pools. Understand the risks, math, and strategies behind providing liquidity in AMMs like Uniswap.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: var(--text-main);
    font-weight: 800;
  }

  .blog-header i {
    color: var(--accent-color);
    margin-right: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    overflow: hidden;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  .post-card .card-body {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.35rem;
    color: var(--accent-color);
    margin-bottom: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
  }

  .post-description {
    color: var(--text-muted);
    flex-grow: 1;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--accent-color);
    font-weight: 700;
    align-self: flex-start;
    transition: transform 0.3s ease;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }
</style>