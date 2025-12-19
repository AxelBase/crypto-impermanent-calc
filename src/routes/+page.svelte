<script>
  import { base } from '$app/paths';
  import { calculateIL } from '$lib/calculator'; // Preserving your logic
  import { fade, fly, slide } from 'svelte/transition';

  let entryRatio = 1;
  let exitRatio = 1;
  let result = null;

  function handleCalculate() {
    result = calculateIL(parseFloat(entryRatio), parseFloat(exitRatio));
  }
</script>

<div class="container pb-5">
  <div class="row justify-content-center py-5" in:fade={{ duration: 1000 }}>
    <div class="col-xl-7 col-lg-9 text-center">
      <h1 class="display-4 fw-800 mb-2">Impermanent Loss <span class="text-info">Calculator</span></h1>
      <p class="lead text-muted mb-5">Professional-grade insights for DeFi liquidity providers.</p>
      
      <div class="glass-card p-4 p-md-5 text-start" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        <form on:submit|preventDefault={handleCalculate}>
          <div class="row g-4">
            <div class="col-md-6">
              <label for="entryRatio" class="form-label fw-bold small uppercase opacity-75">Entry Price Ratio</label>
              <input type="number" id="entryRatio" class="form-control form-control-lg shadow-sm" bind:value={entryRatio} min="0.0001" step="0.0001" />
            </div>
            <div class="col-md-6">
              <label for="exitRatio" class="form-label fw-bold small uppercase opacity-75">Exit Price Ratio</label>
              <input type="number" id="exitRatio" class="form-control form-control-lg shadow-sm" bind:value={exitRatio} min="0.0001" step="0.0001" />
            </div>
          </div>
          <button type="submit" class="btn btn-bubbly btn-primary-custom w-100 mt-4 py-3 fs-5 shadow">
            Calculate Results
          </button>
        </form>

        {#if result}
          <div class="mt-5 pt-4 border-top" transition:slide>
            {#if result.error}
              <div class="alert alert-danger rounded-4" transition:fade>{result.error}</div>
            {:else}
              <div class="row text-center g-4">
                <div class="col-md-6">
                  <div class="p-3 rounded-4" style="background: rgba(255, 71, 87, 0.1);">
                    <div class="small fw-bold opacity-75">Impermanent Loss</div>
                    <div class="display-6 fw-bold text-danger">{result.il}%</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="p-3 rounded-4" style="background: rgba(46, 213, 115, 0.1);">
                    <div class="small fw-bold opacity-75">HODL Change</div>
                    <div class="display-6 fw-bold text-success">{result.hodlChange}%</div>
                  </div>
                </div>
              </div>
              <p class="mt-3 small text-center text-muted">Note: Negative IL is the loss compared to simply holding both assets.</p>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>

<section id="about" class="glass-card p-5 mb-5 mx-2" in:fade={{ duration: 1000, delay: 400 }}>
  <h2 class="fw-800 mb-4">About the Tool</h2>
  <p class="lead">The Crypto Impermanent Loss Calculator is a free, open-source, privacy-focused web utility designed to help liquidity providers understand and quantify impermanent loss in constant-product automated market makers (AMMs) such as Uniswap, SushiSwap, PancakeSwap, and similar platforms.</p>
  
  <p>Impermanent loss occurs when the price ratio of the two assets in a liquidity pool changes after you deposit funds, causing the value of your position to grow less than simply holding the assets outside the pool. This tool isolates that divergence effect using the exact mathematical formula derived from the constant-product model (x × y = k), providing transparent and accurate results without approximations.</p>
  
  <p>Built entirely as a static, client-side application, the calculator processes all inputs and computations directly in your browser. No data is ever sent to a server, stored, tracked, or shared. This privacy-first design ensures you can safely explore even sensitive trading scenarios without compromising confidentiality.</p>
  
  <p>The tool assumes a standard 50/50 liquidity pool with equal value allocation at deposit, which is the most common configuration across major decentralized exchanges. By entering the price ratio at the time of deposit (entry ratio) and the ratio at withdrawal or current market conditions (exit ratio), users instantly see the percentage difference compared to HODLing the same assets.</p>
  
  <p>Beyond the calculator itself, the site includes an in-depth blog with educational articles covering the mechanics of impermanent loss, the underlying mathematics, real-world implications, extreme scenarios, and strategic considerations. These resources aim to empower both new and experienced DeFi participants with clear, unbiased knowledge.</p>
  
  <p>The project is fully open-source and hosted on GitHub, encouraging community contributions, transparency, and trust. Whether you are evaluating a new liquidity position, monitoring an existing one, or simply learning about AMM risks, this tool provides reliable, instant insights to support better-informed decisions in decentralized finance.</p>
  
  <p class="mt-4">By focusing purely on the divergence component of liquidity provision, the calculator serves as an essential baseline for understanding risk before factoring in trading fees, incentives, or other rewards that may offset impermanent loss in practice.</p>
</section>
<section id="how-to-use" class="glass-card p-5 mb-5 mx-2">
  <h2 class="fw-800 mb-4">How to Use</h2>
  
  <p class="lead mb-5">Using the Crypto Impermanent Loss Calculator is straightforward and requires only two inputs. All calculations happen instantly in your browser with complete privacy.</p>
  
  <div class="row g-4">
    <div class="col-md-4">
      <div class="h5 fw-bold">1. Entry Ratio</div>
      <p class="text-muted">Enter the price ratio of Asset B relative to Asset A at the moment you deposited liquidity (or plan to deposit). For example, if you are providing ETH/USDC and the current price is 1 ETH = 2500 USDC, the entry ratio is 2500. If the pair is priced with a stablecoin as base (e.g., USDC/ETH), simply invert the value (1/2500 ≈ 0.0004). The ratio can be any positive number greater than zero.</p>
    </div>
    <div class="col-md-4">
      <div class="h5 fw-bold">2. Exit Ratio</div>
      <p class="text-muted">Input the price ratio at the time you withdraw (or the current market ratio for an existing position). This can be the real-time price or a hypothetical future scenario you want to test. The tool supports extreme values to explore worst-case outcomes, such as massive pumps or dumps in one asset.</p>
    </div>
    <div class="col-md-4">
      <div class="h5 fw-bold">3. Analyze Results</div>
      <p class="text-muted">Click "Calculate" to instantly view two key metrics: Impermanent Loss percentage (negative values indicate loss relative to holding) and HODL Value Change (the percentage growth if you had simply held the assets). Results update automatically as you adjust inputs, allowing rapid scenario testing.</p>
    </div>
  </div>
  
  <hr class="my-5">
  
  <h4 class="fw-bold mb-3">Best Practices and Tips</h4>
  <ul class="list-styled text-muted">
    <li>Use current market data for existing positions to assess ongoing exposure.</li>
    <li>Test multiple exit ratios representing optimistic, baseline, and pessimistic price targets before committing capital.</li>
    <li>Remember that impermanent loss is symmetric—doubling or halving the ratio produces the same magnitude of loss.</li>
    <li>Stablecoin or tightly correlated pairs typically show near-zero loss even with moderate fluctuations.</li>
    <li>Combine results with expected fee earnings from pool activity for a complete return estimate (this tool shows divergence only).</li>
    <li>Explore the blog section for deeper explanations of edge cases, mathematical derivations, and strategic implications.</li>
  </ul>
  
  <p class="mt-4 text-muted">The calculator is designed for educational and planning purposes. Always verify prices from trusted sources and consider gas costs, slippage, and platform-specific factors in real deployments.</p>
</section>
<section id="faq" class="glass-card p-5 mb-5 mx-2">
  <h2 class="fw-800 mb-4">Frequently Asked Questions</h2>
  
  <div class="accordion accordion-flush" id="faqAccordion">
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f1">
          Is impermanent loss always bad?
        </button>
      </h2>
      <div id="f1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">No. Impermanent loss represents only the divergence cost. In active pools, trading fees often offset or exceed this loss, resulting in net positive returns compared to holding. The calculator isolates the loss component to help you evaluate risk separately from fee rewards.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f2">
          Why use price ratios instead of absolute prices?
        </button>
      </h2>
      <div id="f2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">Impermanent loss depends solely on the relative change in price ratio, not absolute price levels or pool size. Using ratios makes the calculation universal across all pairs and scales, whether the assets are worth $1 or $100,000.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f3">
          Does this tool include trading fees?
        </button>
      </h2>
      <div id="f3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">No. The tool intentionally shows pure impermanent loss to provide a clear baseline of divergence risk. Real-world returns combine this loss (or gain in rare cases) with earned fees, which vary by pool volume and fee tier.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f4">
          Can impermanent loss exceed 100%?
        </button>
      </h2>
      <div id="f4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">In extreme scenarios (e.g., one asset pumps millions of percent), the displayed loss versus explosive HODL growth can exceed -99%. However, the actual value loss relative to peak portfolio value is bounded and approaches but never reaches complete loss due to continuous rebalancing.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f5">
          Is my data private and secure?
        </button>
      </h2>
      <div id="f5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">Yes, completely. The entire application runs client-side in your browser. No inputs, results, or usage data are transmitted, stored, or tracked. There are no cookies, analytics, or server requests beyond loading static assets.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f6">
          Which pools does this apply to?
        </button>
      </h2>
      <div id="f6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">Any constant-product 50/50 AMM pool, including Uniswap V2-style pools across Ethereum, Binance Smart Chain, Polygon, and other chains. It does not cover concentrated liquidity (Uniswap V3) or non-standard pool types.</div>
      </div>
    </div>
    
    <div class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f7">
          Why is the loss sometimes shown as positive?
        </button>
      </h2>
      <div id="f7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">Positive values are rare and occur only in specific rebalancing scenarios, but generally impermanent loss is zero or negative. A positive reading would indicate your pool position outperformed pure holding due to the concave return curve—though this is uncommon in practice.</div>
      </div>
    </div>
  </div>
</section></div>

<style>
  .fw-800 { font-weight: 800; }
  section { scroll-margin-top: 120px; }
</style>