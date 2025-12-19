<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';

  // --- Theme Logic ---
  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  // --- PayPal / Coffee Logic ---
  const paypalUsername = 'AxelLab427'; 
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return { destroy() { document.removeEventListener('click', handleClick, true); } };
  }
</script>

<header class="fixed-top w-100" style="z-index: 1050;">
  <div class="container">
    <nav class="nav-glass px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
      
      <div class="d-flex align-items-center gap-3">
        <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 35px; transition: transform 0.3s;" class="logo-hover" />
          <span class="fw-800 fs-5 d-none d-sm-inline" style="color: var(--text-main);">AxelBase</span>
        </a>

        <div class="position-relative" use:clickOutside on:click_outside={() => isDropdownOpen = false}>
          <button class="btn btn-bubbly btn-warning btn-sm d-flex align-items-center gap-2" on:click={() => isDropdownOpen = !isDropdownOpen}>
            <i class="bi bi-cup-hot-fill"></i>
            <span class="d-none d-md-inline">Buy me a coffee</span>
          </button>
          {#if isDropdownOpen}
            <div class="position-absolute mt-2 glass-card p-2 d-flex flex-column gap-1 shadow" transition:slide={{ duration: 200 }} style="min-width: 100px; z-index: 100;">
              {#each donationAmounts as amount}
                <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" class="btn btn-sm btn-light rounded-pill fw-bold">${amount}</a>
              {/each}
            </div>
          {/if}
        </div>

        <button class="btn btn-bubbly border shadow-sm p-0 d-flex align-items-center justify-content-center" 
                style="width: 40px; height: 40px; background: var(--glass-bg);" 
                on:click={toggleTheme}>
          {#if isDarkMode}
            <i class="bi bi-sun-fill text-warning fs-5"></i>
          {:else}
            <i class="bi bi-moon-stars-fill text-primary fs-5"></i>
          {/if}
        </button>
      </div>

      <ul class="nav d-none d-lg-flex align-items-center gap-2">
        <li><a class="nav-link-custom px-3 py-2 fw-semibold text-decoration-none" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom px-3 py-2 fw-semibold text-decoration-none" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom px-3 py-2 fw-semibold text-decoration-none" href="{base}/#how-to-use">How to use</a></li>
        <li><a class="nav-link-custom px-3 py-2 fw-semibold text-decoration-none" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link-custom px-3 py-2 fw-semibold text-decoration-none" href="{base}/formula">Formula</a></li>
        <li class="ms-2"><a class="btn btn-bubbly btn-primary-custom" href="{base}/blog">Blog</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="releative glass-card border-0 rounded-0 py-3" style="border-top: 1px solid var(--glass-border) !important;">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center small fw-semibold text-muted">
    <span>© {new Date().getFullYear()} AxelBase Crypto Impermanent Loss Calculator</span>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="text-decoration-none text-muted">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted">Terms</a>
    </div>
  </div>
</footer>

<style>
  .nav-link-custom {
    color: var(--text-muted);
    transition: color 0.3s, transform 0.3s;
    font-size: 0.95rem;
  }
  .nav-link-custom:hover {
    color: var(--accent-color);
    transform: translateY(-2px);
  }
  .logo-hover:hover {
    transform: rotate(10deg) scale(1.1);
  }
</style>