<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly, slide } from 'svelte/transition';

  // --- Theme Logic ---
  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  // --- Support Logic (Integrated from File 1) ---
  let isDropdownOpen = false;
  const toggleDropdown = () => isDropdownOpen = !isDropdownOpen;
  const closeDropdown = () => isDropdownOpen = false;

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
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

        <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
          <button 
            class="btn btn-bubbly btn-coffee d-flex align-items-center gap-2" 
            on:click={toggleDropdown}
            aria-label="Support options"
          >
            <i class="bi bi-cup-hot-fill"></i>
            <span class="d-none d-md-inline">Buy me a coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown-glass mt-2" transition:fly={{ y: -10, duration: 250 }}>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$3</span> One Coffee
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$5</span> Two Coffees
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$10</span> Three Coffees
              </a>

              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                Custom Amount
              </a>

              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                on:click={closeDropdown}
                class="custom-amount crypto-link"
              >
                <i class="bi bi-currency-bitcoin"></i> Buy via Crypto
              </a>
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

<footer class="relative glass-card border-0 rounded-0 py-4 mt-5" style="border-top: 1px solid var(--glass-border) !important;">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center small fw-semibold text-muted">
    <span>© {new Date().getFullYear()} AxelBase Crypto Impermanent Loss Calculator</span>
    <div class="d-flex gap-4 mt-3 mt-md-0">
      <a href="{base}/privacy" class="text-decoration-none text-muted hover-accent">Privacy Policy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted hover-accent">Terms & Conditions</a>
    </div>
  </div>
</footer>

<style>
  /* Navigation & General */
  .nav-link-custom {
    color: var(--text-muted);
    transition: color 0.3s, transform 0.3s;
    font-size: 0.95rem;
  }
  .nav-link-custom:hover, .hover-accent:hover {
    color: var(--accent-color) !important;
    transform: translateY(-2px);
  }
  .logo-hover:hover {
    transform: rotate(10deg) scale(1.1);
  }

  /* Support Button (File 1 Style adapted to File 2 Bubbly) */
  .btn-coffee {
    background: #FFDD00; /* Classic BMAC Yellow */
    color: #000;
    border: none;
    box-shadow: 0 4px 15px rgba(255, 221, 0, 0.3);
  }
  .btn-coffee:hover {
    background: #ffea00;
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 221, 0, 0.4);
  }

  /* Dropdown Glassmorphism (File 1 logic + File 2 Visuals) */
  .bmac-dropdown-glass {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  .bmac-dropdown-glass a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    font-weight: 500;
  }

  .bmac-dropdown-glass a:hover {
    background: rgba(56, 189, 248, 0.1);
    color: var(--accent-color);
    padding-left: 25px;
  }

  .bmac-dropdown-glass .amount {
    font-weight: 800;
    color: var(--accent-color);
    font-size: 1.1rem;
  }

  .bmac-dropdown-glass .custom-amount {
    font-weight: 600;
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    font-size: 0.9rem;
  }

  .crypto-link {
    background: rgba(247, 147, 26, 0.05); /* Subtle Bitcoin Orange tint */
  }
</style>