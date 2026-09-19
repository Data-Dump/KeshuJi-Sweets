/* products-page.js — Renders product grid, category filter, live search, dynamic category banner, and slide-in detail panel */

(function () {
  const grid = document.getElementById('product-grid');
  const tabs = document.querySelectorAll('.filter-tab');
  const panelOverlay = document.getElementById('panel-overlay');
  const panelClose = document.getElementById('panel-close');
  const panelContent = document.getElementById('panel-body-content');

  // Search and Banner elements
  const searchInput = document.getElementById('product-search-input');
  const searchClearBtn = document.getElementById('product-search-clear');
  const searchBoxWrap = document.getElementById('search-box-wrap');
  const totalResultsCount = document.getElementById('total-results-count');
  const catHeaderTitle = document.getElementById('cat-header-title');
  const catHeaderHindi = document.getElementById('cat-header-hindi');
  const catHeaderDesc = document.getElementById('cat-header-desc');
  const catHeaderBadge = document.getElementById('cat-header-badge');

  let currentCategory = 'all';
  let searchQuery = '';
  let selectedSize = '';

  const CATEGORY_META = {
    'all': {
      title: 'All Confections',
      hindi: 'समस्त मिष्ठान',
      desc: 'Explore our complete handcrafted collection of royal Rajasthani mithai, Bengali chhena delicacies, and festive dry fruit confections.',
      tag: 'Complete Collection'
    },
    'signature heritage': {
      title: 'Signature Heritage Sweets',
      hindi: 'पारंपरिक मिष्ठान',
      desc: 'Our founding heritage recipes perfected since 1965 in Jaipur — slow-cooked Rabdi Ghevar, caramelised Peda, and pure cow ghee Moong Dal Barfi.',
      tag: 'Est. 1965 Heirloom'
    },
    'royal kaju': {
      title: 'Royal Kaju Confections',
      hindi: 'शाही काजू',
      desc: 'Finest hand-selected Goan cashew nuts hand-rolled into delicate chakras, rich pista rolls, fragrant kaju paan, and silver-foiled masterpieces.',
      tag: 'Artisan Cashew'
    },
    'bengali sweets': {
      title: 'Bengali Chhena Delicacies',
      hindi: 'बंगाली मिठाई',
      desc: 'Fresh cow-milk cottage cheese simmered into feather-light spongy rasgullas, matka saffron rasmalai, chamcham, and sandesh.',
      tag: 'Fresh Chhena'
    },
    'laddus': {
      title: 'Desi Ghee Laddus & Halwa',
      hindi: 'लड्डू एवं हलवा',
      desc: 'Golden pearls of boondi, rich besan laddus, kesar malai modaks, and slow-roasted Rajasthani halwas fried in pure desi ghee.',
      tag: 'Pure Cow Ghee'
    },
    'artisanal barfi': {
      title: 'Artisanal Barfi & Fudge',
      hindi: 'कलात्मक बर्फी',
      desc: 'Slow-simmered mawa infused with pushkar damask rose petals, kesar kalakand, and multi-layered fig delicacies.',
      tag: 'Slow Simmered'
    },
    'dry fruit': {
      title: 'Royal Dry Fruit Confections',
      hindi: 'शाही ड्रायफ्रूट',
      desc: 'Nutrient-rich, guilt-free luxury confections naturally sweetened with Arabian dates, Turkish figs, roasted pistachios, and almonds.',
      tag: 'Naturally Sweetened'
    },
    'gift boxes': {
      title: 'Celebration Hampers & Gift Boxes',
      hindi: 'उपहार थाली एवं डिब्बे',
      desc: 'Royal Chhappan Bhog thalis, bridal wedding gifting, and bespoke corporate festival hampers packed with heirloom grandeur.',
      tag: 'Grand Celebrations'
    }
  };

  function imgPath(p) {
    if (!p) return '';
    if (p.startsWith('http') || p.startsWith('/') || p.startsWith('../')) return p;
    const path = window.location.pathname;
    const isSubfolder = path.includes('/products') || path.includes('/story') || path.includes('/contacts') || path.includes('/gallery');
    return isSubfolder ? '../' + p : p;
  }

  function updateCategoryBanner(categoryKey, count) {
    const key = categoryKey.toLowerCase();
    const meta = CATEGORY_META[key] || CATEGORY_META['all'];
    
    if (catHeaderTitle) catHeaderTitle.textContent = meta.title;
    if (catHeaderHindi) catHeaderHindi.textContent = meta.hindi;
    if (catHeaderDesc) catHeaderDesc.textContent = meta.desc;
    if (catHeaderBadge) catHeaderBadge.textContent = `${count} ${count === 1 ? 'Delicacy' : 'Delicacies'}`;
    if (totalResultsCount) totalResultsCount.textContent = count;
  }

  function updateTabCounts() {
    if (typeof PRODUCTS === 'undefined') return;
    tabs.forEach(tab => {
      const cat = tab.getAttribute('data-cat');
      const countSpan = tab.querySelector('.tab-count');
      if (countSpan) {
        if (cat === 'all') {
          countSpan.textContent = PRODUCTS.length;
        } else {
          const c = PRODUCTS.filter(p => p.category.toLowerCase().includes(cat.toLowerCase())).length;
          countSpan.textContent = c;
        }
      }
    });
  }

  function syncURL(category, query) {
    const url = new URL(window.location);
    if (category && category !== 'all') {
      url.searchParams.set('cat', category);
    } else {
      url.searchParams.delete('cat');
      url.searchParams.delete('category');
    }
    if (query && query.trim() !== '') {
      url.searchParams.set('q', query.trim());
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url);
  }

  function renderGrid() {
    if (!grid || typeof PRODUCTS === 'undefined') return;
    grid.innerHTML = '';

    const q = searchQuery.toLowerCase().trim();
    const cat = currentCategory.toLowerCase();

    const items = PRODUCTS.filter(product => {
      const matchesCat = (cat === 'all') || product.category.toLowerCase().includes(cat);
      if (!matchesCat) return false;

      if (!q) return true;

      const inName = product.name.toLowerCase().includes(q);
      const inHindi = product.hindiName ? product.hindiName.toLowerCase().includes(q) : false;
      const inDesc = product.description.toLowerCase().includes(q);
      const inIng = product.ingredients ? product.ingredients.toLowerCase().includes(q) : false;
      const inCat = product.category.toLowerCase().includes(q);

      return inName || inHindi || inDesc || inIng || inCat;
    });

    updateCategoryBanner(currentCategory, items.length);

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; padding: 70px 20px; text-align: center; color: var(--muted); font-size: 0.95rem; background: var(--warm-white);">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: var(--gold-dark);" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div style="font-family: var(--font-display); font-size: 1.2rem; color: var(--ink); margin-bottom: 6px;">No sweet delicacies matched your search</div>
          <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto 20px;">Try adjusting your keywords or clearing the category filter to explore our 36+ handcrafted offerings.</p>
          <button id="reset-filter-btn" class="btn-primary" style="padding: 10px 22px; font-size: 0.76rem;">View All Sweets</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) {
            searchInput.value = '';
            searchQuery = '';
            if (searchBoxWrap) searchBoxWrap.classList.remove('has-val');
          }
          currentCategory = 'all';
          tabs.forEach(t => t.classList.remove('active'));
          const allTab = document.getElementById('tab-all');
          if (allTab) allTab.classList.add('active');
          syncURL('all', '');
          renderGrid();
        });
      }
      return;
    }

    items.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card reveal visible';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${product.name}`);

      const sizesHtml = product.sizes && product.sizes.length
        ? `<div class="product-sizes-row">
            ${product.sizes.map(s => `<span class="size-chip">${s}</span>`).join('')}
           </div>`
        : '';

      const imgSrc = imgPath(product.image);
      const fallbackSrc = imgPath('assets/KeshuJI-Logo.png');

      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${imgSrc}" alt="${product.name}" loading="lazy" onerror="this.src='${fallbackSrc}'; this.style.objectFit='contain'; this.style.padding='40px';" />
        </div>
        <div class="product-info">
          <span class="product-cat-tag">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          ${product.hindiName ? `<span class="product-hindi">${product.hindiName}</span>` : ''}
          <p class="product-desc-short">${product.description}</p>
          ${sizesHtml}
        </div>
      `;

      card.addEventListener('click', () => openPanel(product));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPanel(product);
        }
      });

      grid.appendChild(card);
    });
  }

  function openPanel(product) {
    if (!panelOverlay || !panelContent) return;

    selectedSize = product.sizes && product.sizes.length ? product.sizes[0] : '500g';

    const whatsappNumber = '919829163997';
    const enquiryMsg = encodeURIComponent(`Namaste Keshuji Sweets, I am interested in ordering "${product.name}" (${selectedSize}). Please share pricing and availability.`);

    panelContent.innerHTML = `
      <img class="panel-img" src="${imgPath(product.image)}" alt="${product.name}" onerror="this.src='${imgPath('assets/KeshuJI-Logo.png')}'; this.style.objectFit='contain'; this.style.padding='40px';" />
      <div class="panel-body">
        <span class="panel-cat">${product.category}</span>
        <h2 class="panel-name">${product.name}</h2>
        ${product.hindiName ? `<div class="panel-hindi">${product.hindiName}</div>` : ''}
        
        <p class="panel-desc">${product.description}</p>

        ${product.ingredients ? `
          <div style="font-size: 0.78rem; color: var(--ink-soft); line-height: 1.6; padding: 12px 16px; background: var(--beige); border-left: 2px solid var(--gold);">
            <strong style="color: var(--ink); text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.68rem; display: block; margin-bottom: 2px;">Ingredients</strong>
            ${product.ingredients}
          </div>
        ` : ''}

        ${product.sizes && product.sizes.length ? `
          <div class="panel-sizes-label">Available Packaging &amp; Sizes</div>
          <div class="panel-sizes" id="panel-sizes-container">
            ${product.sizes.map((s, idx) => `
              <button class="panel-size ${idx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>
        ` : ''}

        <div class="panel-enquire">
          <a href="https://wa.me/${whatsappNumber}?text=${enquiryMsg}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn-primary" 
             id="panel-whatsapp-btn"
             style="display: block; text-align: center; width: 100%;">
            Enquire &amp; Order on WhatsApp
          </a>
          <p style="text-align: center; margin-top: 10px; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.04em;">
            Handcrafted fresh daily · Bulk &amp; Wedding orders welcomed
          </p>
        </div>
      </div>
    `;

    // Size selection handler
    const sizeBtns = panelContent.querySelectorAll('.panel-size');
    const waBtn = panelContent.querySelector('#panel-whatsapp-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.getAttribute('data-size');
        if (waBtn) {
          const updatedMsg = encodeURIComponent(`Namaste Keshuji Sweets, I am interested in ordering "${product.name}" (${selectedSize}). Please share pricing and availability.`);
          waBtn.href = `https://wa.me/${whatsappNumber}?text=${updatedMsg}`;
        }
      });
    });

    panelOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    if (!panelOverlay) return;
    panelOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Filter tabs listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat') || 'all';
      syncURL(currentCategory, searchQuery);
      renderGrid();
    });
  });

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchBoxWrap) {
        if (searchQuery.trim().length > 0) {
          searchBoxWrap.classList.add('has-val');
        } else {
          searchBoxWrap.classList.remove('has-val');
        }
      }
      syncURL(currentCategory, searchQuery);
      renderGrid();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchInput.focus();
      }
      if (searchBoxWrap) searchBoxWrap.classList.remove('has-val');
      syncURL(currentCategory, '');
      renderGrid();
    });
  }

  // Panel close listeners
  if (panelClose) {
    panelClose.addEventListener('click', closePanel);
  }

  if (panelOverlay) {
    panelOverlay.addEventListener('click', (e) => {
      if (e.target === panelOverlay) {
        closePanel();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePanel();
    }
  });

  // Initial setup & URL query parameter processing
  if (typeof PRODUCTS !== 'undefined') {
    updateTabCounts();

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat') || urlParams.get('category');
    const qParam = urlParams.get('q');

    if (qParam && searchInput) {
      searchQuery = qParam;
      searchInput.value = qParam;
      if (searchBoxWrap) searchBoxWrap.classList.add('has-val');
    }

    if (catParam) {
      const targetTab = Array.from(tabs).find(t => 
        (t.getAttribute('data-cat') || '').toLowerCase().includes(catParam.toLowerCase())
      );
      if (targetTab) {
        tabs.forEach(t => t.classList.remove('active'));
        targetTab.classList.add('active');
        currentCategory = targetTab.getAttribute('data-cat');
      } else {
        currentCategory = 'all';
      }

      // Smooth scroll down to catalog if arriving from external category click
      setTimeout(() => {
        const catalogSec = document.getElementById('products-catalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);

    } else {
      currentCategory = 'all';
    }

    renderGrid();
  }
})();
