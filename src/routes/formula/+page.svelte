<script>
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';
</script>

<div class="container pb-5">
  <div class="row justify-content-center py-5" in:fade={{ duration: 1000 }}>
    <div class="col-xl-8 col-lg-10 text-center">
      <h1 class="display-4 fw-800 mb-2">The <span class="text-info">Mathematics</span> of Loss</h1>
      <p class="lead text-muted mb-5">Understanding the mechanics behind constant product liquidity pools.</p>

      <div class="glass-card p-4 p-md-5 text-start mb-5" in:fly={{ y: 30, duration: 800, delay: 200 }}>
        <div class="d-flex align-items-center gap-3 mb-4">
            <div class="icon-shape bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                <i class="bi bi-function fs-4"></i>
            </div>
            <h2 class="h3 fw-bold mb-0">Impermanent Loss Formula</h2>
        </div>

        <p class="text-muted mb-4">
            The standard formula for a 50/50 liquidity pool (like Uniswap v2) calculates the divergence loss based on the price ratio change <strong>k</strong>.
        </p>

        <div class="math-container p-4 rounded-4 mb-4 text-center" style="background: rgba(16, 44, 84, 0.05); border: 1px solid var(--glass-border);">
            <div class="d-flex justify-content-center align-items-center gap-2 fs-4 mb-3">
                <span class="fw-italic">k</span> = 
                <div class="d-inline-flex flex-column align-items-center" style="vertical-align: middle; font-size: 0.9em;">
                    <span class="border-bottom px-2">Price Ratio exit</span>
                    <span class="px-2">Price Ratio entry</span>
                </div>
            </div>
            
            <div class="display-6 fw-bold text-primary d-flex justify-content-center align-items-center gap-2">
                <span>IL = (</span>
                <div class="d-inline-flex flex-column align-items-center" style="font-size: 0.8em;">
                    <span class="border-bottom px-2">2 &radic;k</span>
                    <span class="px-2">1 + k</span>
                </div>
                <span> - 1 ) &times; 100</span>
            </div>
        </div>

        <div class="row g-4 mt-2">
            <div class="col-md-6">
                <div class="p-3 rounded-4 border h-100 bg-light-subtle">
                    <h4 class="h6 fw-800 text-uppercase opacity-75">HODL Value Change</h4>
                    <p class="mb-0 fs-5 fw-bold text-gradient">((1 + k) / 2 - 1) &times; 100</p>
                    <small class="text-muted">Value change if you just held the assets.</small>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 rounded-4 border h-100 bg-light-subtle">
                    <h4 class="h6 fw-800 text-uppercase opacity-75">Variable k</h4>
                    <p class="mb-0 text-muted small">Represents the price ratio move. If an asset doubles in price relative to the other, <strong>k = 2</strong>.</p>
                </div>
            </div>
        </div>
      </div>

      <div class="row g-4 text-start">
        <div class="col-md-6" in:fly={{ x: -20, duration: 800, delay: 400 }}>
            <div class="glass-card p-4 h-100 shadow-sm">
                <h3 class="h5 fw-bold mb-3 d-flex align-items-center">
                    <i class="bi bi-check2-circle text-success me-2"></i>Key Assumptions
                </h3>
                <ul class="list-unstyled mb-0">
                    <li class="mb-3 d-flex gap-2">
                        <i class="bi bi-circle-fill mt-2" style="font-size: 0.5rem; color: var(--accent-color);"></i>
                        <span><strong>Constant Product:</strong> Assets follow the $x \cdot y = k$ invariant.</span>
                    </li>
                    <li class="mb-3 d-flex gap-2">
                        <i class="bi bi-circle-fill mt-2" style="font-size: 0.5rem; color: var(--accent-color);"></i>
                        <span><strong>50/50 Weight:</strong> Both assets represent equal value at deposit.</span>
                    </li>
                    <li class="mb-0 d-flex gap-2">
                        <i class="bi bi-circle-fill mt-2" style="font-size: 0.5rem; color: var(--accent-color);"></i>
                        <span><strong>No Fees:</strong> This specific formula excludes trading fee revenue.</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-md-6" in:fly={{ x: 20, duration: 800, delay: 600 }}>
            <div class="glass-card p-4 h-100 border-start border-info border-4 shadow-sm">
                <h3 class="h5 fw-bold mb-3 d-flex align-items-center">
                    <i class="bi bi-lightbulb text-warning me-2"></i>Practical Example
                </h3>
                <p class="small text-muted">
                    If entry ratio is <strong>1</strong> and the price of Asset A quadruples (Ratio becomes <strong>4</strong>):
                </p>
                <div class="bg-dark bg-opacity-10 p-3 rounded-4 fw-mono small mb-2 border">
                    k = 4 / 1 = 4 <br>
                    IL = (2 * &radic;4 / (1 + 4) - 1) * 100 <br>
                    IL = (4 / 5 - 1) * 100 = <strong class="text-danger">-20%</strong>
                </div>
                <p class="small mt-2 mb-0 fw-semibold text-muted">Result: 20% less value than HODLing.</p>
            </div>
        </div>
      </div>

      <div class="mt-5 mb-5" in:fade={{ delay: 800 }}>
        <a href="{base}/" class="btn btn-bubbly btn-primary-custom px-5 py-3 shadow-lg">
            <i class="bi bi-arrow-left me-2"></i> Back to Calculator
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .fw-800 { font-weight: 800; }
  .fw-mono { font-family: 'SFMono-Regular', Consolas, monospace; }
  
  .math-container {
    transition: transform 0.3s ease;
    color: var(--text-main);
  }
  
  .math-container:hover {
    transform: scale(1.02);
  }

  /* Base color for light mode */
  .icon-shape {
    background: #102C54 !important;
  }

  /* FIXED: Added :global to avoid build warnings */
  :global([data-bs-theme="dark"]) .icon-shape {
    background: #38bdf8 !important;
    color: #102C54 !important;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--text-main), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .fw-italic { font-style: italic; }
</style>