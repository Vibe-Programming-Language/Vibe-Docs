// ============================================
// Vibe Docs — Application Logic
// ============================================

(function () {
  'use strict';

  // ── State ───────────────────────────────────
  let currentPage = 'home';
  let searchIndex = [];

  // ── DOM refs ────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const contentArea   = $('#content-area');
  const tocList       = $('#toc-list');
  const searchModal   = $('#search-modal');
  const searchInput   = $('#search-input');
  const searchResults = $('#search-results');
  const themeToggle   = $('#theme-toggle');
  const sidebar       = $('#sidebar');
  const sidebarToggle = $('#sidebar-toggle');
  const searchToggle  = $('#search-toggle');

  // ── Theme ───────────────────────────────────
  function getPreferredTheme() {
    const stored = localStorage.getItem('vibe-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vibe-theme', theme);
  }

  // ── Navigation ──────────────────────────────
  window.navigateTo = function (page) {
    if (!PAGES || !PAGES[page]) {
      console.warn('Page not found:', page);
      page = 'home';
    }

    currentPage = page;

    // Update content
    const pageData = PAGES[page];
    if (contentArea) {
      contentArea.innerHTML = pageData.content;
    }

    // Update title
    document.title = pageData.title + ' — Vibe Docs';

    // Update URL hash
    history.pushState(null, '', '#' + page);

    // Update sidebar active
    $$('.sidebar-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-page') === page);
    });

    // Update nav active
    $$('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-nav') === page);
    });

    // Build TOC
    buildTOC();

    // Scroll to top
    window.scrollTo(0, 0);

    // Close sidebar on mobile
    if (window.innerWidth < 1024 && sidebar) {
      sidebar.classList.remove('open');
    }

    // Close search
    closeSearch();
  };

  function buildTOC() {
    if (!tocList || !contentArea) return;
    tocList.innerHTML = '';
    const headings = contentArea.querySelectorAll('h2[id], h3[id]');
    const tocContainer = tocList.closest('.toc');
    
    if (headings.length === 0) {
      if (tocContainer) tocContainer.classList.add('hidden');
      return;
    }
    if (tocContainer) tocContainer.classList.remove('hidden');

    headings.forEach((h) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.classList.add('toc-link');
      if (h.tagName === 'H3') {
        a.classList.add('toc-sub');
      }
      a.addEventListener('click', (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // ── Search ──────────────────────────────────
  function buildSearchIndex() {
    if (!PAGES) return;
    searchIndex = [];
    for (const [key, page] of Object.entries(PAGES)) {
      const text = page.content
        .replace(/<[^>]+>/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();

      const headingMatches = [...page.content.matchAll(/<h[12][^>]*>(.*?)<\/h[12]>/g)];
      const headings = headingMatches.map((m) => m[1].replace(/<[^>]+>/g, ''));

      searchIndex.push({ page: key, title: page.title, headings, text });
    }
  }

  window.toggleSearch = function () {
    if (!searchModal) return;
    if (searchModal.classList.contains('active')) {
      closeSearch();
    } else {
      openSearch();
    }
  };

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 50);
    }
    if (searchResults) searchResults.innerHTML = renderSearchHints();
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    if (searchInput) searchInput.value = '';
  }

  function renderSearchHints() {
    return `
      <div class="search-hint">
        <div class="search-hint-item">
          <span class="kbd">Enter</span> to select
        </div>
        <div class="search-hint-item">
          <span class="kbd">↑↓</span> to navigate
        </div>
        <div class="search-hint-item">
          <span class="kbd">Esc</span> to close
        </div>
      </div>
    `;
  }

  function handleSearchInput() {
    if (!searchInput || !searchResults) return;
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = renderSearchHints();
      return;
    }

    const results = [];
    for (const entry of searchIndex) {
      let score = 0;
      const titleLower = entry.title.toLowerCase();
      const textLower = entry.text.toLowerCase();

      if (titleLower === query) score += 100;
      else if (titleLower.includes(query)) score += 50;

      for (const h of entry.headings) {
        if (h.toLowerCase().includes(query)) score += 30;
      }

      if (textLower.includes(query)) {
        score += 10;
        const occurrences = textLower.split(query).length - 1;
        score += Math.min(occurrences * 2, 20);
      }

      if (score > 0) {
        const idx = textLower.indexOf(query);
        let snippet = '';
        if (idx >= 0) {
          const start = Math.max(0, idx - 40);
          const end = Math.min(entry.text.length, idx + query.length + 60);
          snippet = (start > 0 ? '...' : '') +
            entry.text.slice(start, end) +
            (end < entry.text.length ? '...' : '');
        }
        results.push({ ...entry, score, snippet });
      }
    }

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
      searchResults.innerHTML = `<div class="search-empty">No results found for "<strong>${escapeHtml(query)}</strong>"</div>`;
      return;
    }

    searchResults.innerHTML = results
      .slice(0, 10)
      .map(
        (r, i) => `
        <div class="search-result${i === 0 ? ' selected' : ''}" data-page="${r.page}">
          <div class="search-result-title">${escapeHtml(r.title)}</div>
          ${r.snippet ? `<div class="search-result-snippet">${highlightMatch(escapeHtml(r.snippet), query)}</div>` : ''}
        </div>
      `
      )
      .join('');

    // Bind click handlers on results
    searchResults.querySelectorAll('.search-result').forEach((el) => {
      el.addEventListener('click', () => {
        navigateTo(el.getAttribute('data-page'));
      });
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // ── Event Bindings ─────────────────────────

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Search toggle button
  if (searchToggle) {
    searchToggle.addEventListener('click', () => toggleSearch());
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  // Search backdrop close
  if (searchModal) {
    const backdrop = searchModal.querySelector('.search-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeSearch);
  }

  // Sidebar toggle (mobile)
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (sidebar) sidebar.classList.toggle('open');
    });
  }

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024 && sidebar && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && e.target !== sidebarToggle && !(sidebarToggle && sidebarToggle.contains(e.target))) {
        sidebar.classList.remove('open');
      }
    }
  });

  // Sidebar links
  $$('.sidebar-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) navigateTo(page);
    });
  });

  // Nav links
  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) navigateTo(page);
    });
  });

  // Logo link
  const logoLink = $('.nav-logo');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearch();
    }
    // Escape
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      closeSearch();
    }
    // Arrow navigation in search results
    if (searchModal && searchModal.classList.contains('active')) {
      const resultsEls = $$('.search-result');
      const selected = $('.search-result.selected');
      const idx = resultsEls.indexOf(selected);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (selected) selected.classList.remove('selected');
        const next = resultsEls[Math.min(idx + 1, resultsEls.length - 1)];
        if (next) next.classList.add('selected');
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selected) selected.classList.remove('selected');
        const prev = resultsEls[Math.max(idx - 1, 0)];
        if (prev) prev.classList.add('selected');
      }
      if (e.key === 'Enter' && selected) {
        e.preventDefault();
        navigateTo(selected.getAttribute('data-page'));
      }
    }
  });

  // Scroll spy for TOC
  function setupScrollSpy() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!contentArea) { ticking = false; return; }
        const headings = contentArea.querySelectorAll('h2[id], h3[id]');
        let active = null;
        for (const h of headings) {
          const rect = h.getBoundingClientRect();
          if (rect.top <= 120) active = h;
        }
        if (active) {
          $$('.toc-link').forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + active.id);
          });
        }
        ticking = false;
      });
    }, { passive: true });
  }

  // ── Initialize ─────────────────────────────
  function init() {
    applyTheme(getPreferredTheme());
    buildSearchIndex();
    setupScrollSpy();

    // Route from URL hash
    const hash = window.location.hash.slice(1);
    if (hash && PAGES && PAGES[hash]) {
      navigateTo(hash);
    } else {
      navigateTo('home');
    }
  }

  // Handle back/forward
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1);
    if (hash && PAGES && PAGES[hash]) {
      navigateTo(hash);
    } else {
      navigateTo('home');
    }
  });

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
