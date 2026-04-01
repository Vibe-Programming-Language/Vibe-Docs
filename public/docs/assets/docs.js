(function () {
  let searchIndex = [];

  function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      button.classList.add('copied');
      button.innerHTML = '<span>Copied!</span>';
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = '<span>Copy</span>';
      }, 2000);
    });
  }
  window.copyCode = copyCode;

  function toggleAccordion(header) {
    const accordion = header.closest('.accordion');
    accordion.classList.toggle('active');
    const isActive = accordion.classList.contains('active');
    header.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  }
  window.toggleAccordion = toggleAccordion;

  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(header);
      }
    });
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tab-group');
      group.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      group.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      const content = group.querySelector('#' + btn.dataset.tab);
      if (content) content.classList.add('active');
    });
  });

  const toc = document.getElementById('toc-list');
  if (toc) {
    const heads = document.querySelectorAll('h2[id], h3[id]');
    heads.forEach((h) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      toc.appendChild(li);
    });
  }

  async function loadSearchIndex() {
    if (searchIndex.length) return;
    try {
      const resp = await fetch('../assets/search-index.json');
      if (resp.ok) {
        searchIndex = await resp.json();
      }
    } catch (_) {
      searchIndex = [];
    }
  }

  function scoreDoc(doc, terms) {
    const hay = `${doc.title} ${doc.text} ${doc.path}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (doc.title.toLowerCase().includes(term)) score += 5;
      if (doc.path.toLowerCase().includes(term)) score += 2;
      const m = hay.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
      if (m) score += m.length;
    }
    return score;
  }

  function searchDocs(query) {
    const q = query.trim().toLowerCase();
    const out = document.getElementById('search-results');
    if (!out) return;
    out.innerHTML = '';
    if (!q) return;

    const terms = q.split(/\s+/).filter(Boolean);
    const base = searchIndex.length
      ? searchIndex
      : Array.from(document.querySelectorAll('.sidebar a')).map((a) => ({
          path: a.getAttribute('href'),
          title: a.textContent,
          text: a.textContent
        }));

    base
      .map((doc) => ({ doc, score: scoreDoc(doc, terms) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .forEach(({ doc }) => {
        const item = document.createElement('a');
        item.href = doc.path;
        item.textContent = doc.title;
        out.appendChild(item);
      });
  }
  window.searchDocs = searchDocs;

  const searchInput = document.getElementById('doc-search');
  if (searchInput) {
    loadSearchIndex();
    searchInput.addEventListener('input', (e) => searchDocs(e.target.value));
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
