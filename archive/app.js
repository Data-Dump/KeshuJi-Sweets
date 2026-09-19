/**
 * Keshuji Sweets — Website App JS
 * Handles: products rendering, filtering, modal, navbar, animations, form
 */

/* ===================================================
   PRODUCT DATA (mapped from products.json with image paths)
   =================================================== */
const PRODUCTS = [
  // Signature Heritage
  { id: "peda-keshuji-special", name: "Peda (Keshuji Signature)", hindiName: "पेड़ा", category: "Signature Heritage", description: "Traditional slow-cooked caramelized mawa fudge spiced with fragrant green cardamom and saffron.", sizes: ["250g", "500g", "1kg"], image: "assets/peda-keshuji-special.jpg" },
  { id: "moong-ki-barfi", name: "Moong Dal Barfi", hindiName: "मूंग की बर्फी", category: "Signature Heritage", description: "Rich slow-roasted yellow lentil fudge prepared with pure desi ghee, khoya, and crunchy slivered nuts.", sizes: ["250g", "500g", "1kg"], image: "assets/moong-ki-barfi.jpg" },
  { id: "rabri-ghevar", name: "Rabdi Ghevar", hindiName: "रबड़ी घेवर", category: "Signature Heritage", description: "Iconic golden honeycomb ghevar topped with rich saffron-infused reduced milk rabdi and pistachios.", sizes: ["Piece", "500g", "1kg"], image: "assets/rabri-ghevar.jpg" },
  { id: "plain-ghevar", name: "Plain / Mitha Ghevar", hindiName: "सादा घेवर", category: "Signature Heritage", description: "Crisp, porous Rajasthani honeycomb delicacy gently soaked in aromatic saffron-cardamom syrup.", sizes: ["Piece", "500g", "1kg"], image: "assets/plain-ghevar-1.jpg" },
  { id: "kalakand", name: "Kalakand", hindiName: "कलाकन्द", category: "Signature Heritage", description: "Classic granular soft milk cake made from pure slow-simmered whole milk and fresh paneer.", sizes: ["250g", "500g", "1kg"], image: "assets/kalakand.jpg" },

  // Royal Bengali & Milk Delicacies
  { id: "rasmalai", name: "Rasmalai", hindiName: "रस मलाई", category: "Bengali Sweets", description: "Velvety cottage cheese discs steeped in chilled saffron and pistachio-infused thickened milk.", sizes: ["2 Pcs", "4 Pcs", "Bulk Pack"], image: "assets/rasmalai.jpg" },
  { id: "chamcham", name: "Cham Cham", hindiName: "चमचम", category: "Bengali Sweets", description: "Traditional Bengali poached chhena confection coated with dry fruit and desiccated coconut.", sizes: ["250g", "500g", "1kg"], image: "assets/chamcham.jpg" },
  { id: "matka-kesar-rasmalai", name: "Matka Kesar Rasmalai", hindiName: "केसर रसमलाई", category: "Bengali Sweets", description: "Served in an earthen matka — saffron rasmalai presented the royal way.", sizes: ["2 Pcs", "4 Pcs"], image: "assets/matka-kesar-rasmalai.jpg" },
  { id: "fruit-sandesh", name: "Fruit Sandesh", hindiName: "फ्रूट संदेश", category: "Bengali Sweets", description: "Delicate chhena sandesh cups infused with seasonal fruit purees and natural colors.", sizes: ["250g", "500g", "1kg"], image: "assets/fruit-sandesh-cups.jpg" },
  { id: "kheer-kadam", name: "Kheer Kadam", hindiName: "खीर कदम", category: "Bengali Sweets", description: "Soft rasgulla encased in a shell of thickened milk and powdered sugar.", sizes: ["250g", "500g", "1kg"], image: "assets/kheer-kadam.jpg" },
  { id: "chenna-rasbhari", name: "Chenna Rasbhari Balls", hindiName: "छेना रसभरी", category: "Bengali Sweets", description: "Bite-sized chhena balls filled with condensed milk and soaked in a fragrant sweet syrup.", sizes: ["250g", "500g", "1kg"], image: "assets/chenna-rasbhari-balls.jpg" },
  { id: "assorted-bengali", name: "Assorted Bengali Sweets", hindiName: "बंगाली मिठाई थाली", category: "Bengali Sweets", description: "A stunning assortment of our finest Bengali sweets — perfect for festive gifting.", sizes: ["500g", "1kg", "Tray"], image: "assets/assorted-bengali-sweets.jpg" },

  // Royal Kaju & Dry Fruit
  { id: "kaju-anjeer-chakra", name: "Kaju Anjeer Chakra", hindiName: "काजू अंजीर चक्र", category: "Royal Kaju", description: "Intricate spiral pinwheel combining rich cashew fudge with organic dried Turkish figs.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-anjeer-chakra.jpg" },
  { id: "kaju-pista-roll", name: "Kaju Pista Roll", hindiName: "काजू पिस्ता रोल", category: "Royal Kaju", description: "Silky cashew rolls enclosing a vibrant emerald center of finely ground pistachios.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-pista-roll.jpg" },
  { id: "kaju-paan", name: "Kaju Paan", hindiName: "काजू पान", category: "Royal Kaju", description: "Artisan betel-leaf folded cashew treat stuffed with gulkand, crunchy nuts, and spices.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-paan.jpg" },
  { id: "kaju-bite", name: "Kaju Bite", hindiName: "काजू बाइट", category: "Royal Kaju", description: "Crunchy roasted cashew fudge bite packed with assorted toasted nuts and natural flavors.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-bite.jpg" },
  { id: "kaju-samosa", name: "Kaju Samosa", hindiName: "काजू समोसा", category: "Royal Kaju", description: "Cashew fudge shaped like a golden samosa — a delightful play on India's favorite snack.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-samosa.jpg" },
  { id: "kaju-cassata", name: "Kaju Cassata", hindiName: "काजू कैसाटा", category: "Royal Kaju", description: "Multi-layered cashew and dry fruit cassata with an elegant striped presentation.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-cassata.jpg" },
  { id: "silver-vark-kaju-samosa", name: "Silver Vark Kaju Samosa", hindiName: "काजू समोसा वर्क", category: "Royal Kaju", description: "Premium cashew samosa adorned with real edible silver vark for a royal finish.", sizes: ["250g", "500g", "1kg"], image: "assets/silver-vark-kaju-samosa.jpg" },
  { id: "gulab-katli", name: "Gulab Katli", hindiName: "गुलाब कतली", category: "Royal Kaju", description: "Rose-flavored katli with cashew base, delicately pink and fragrant.", sizes: ["250g", "500g", "1kg"], image: "assets/gulab-katli.jpg" },

  // Laddus & Traditional Ghee Sweets
  { id: "kesar-malai-laddu", name: "Kesar Malai Laddu", hindiName: "केसर मलाई लड्डू", category: "Laddus", description: "Melt-in-mouth milk cream spheres infused with saffron strands and crushed cardamom.", sizes: ["250g", "500g", "1kg"], image: "assets/kesar-malai-laddu.jpg" },
  { id: "motichoor-laddu", name: "Motichoor Laddu", hindiName: "मोतीचूर लड्डू", category: "Laddus", description: "Fine micro-pearls of gram flour fried in pure desi ghee and bound with fragrant saffron syrup.", sizes: ["250g", "500g", "1kg"], image: "assets/motichoor-laddu.jpg" },
  { id: "dry-fruit-mewa-laddu", name: "Dry Fruit Mewa Laddu", hindiName: "मेवा लड्डू", category: "Laddus", description: "Power-packed mewa laddus with dates, almonds, cashews, and aromatic spices.", sizes: ["250g", "500g", "1kg"], image: "assets/dry-fruit-mewa-laddu.jpg" },
  { id: "guliya", name: "Shahi Gujiya (Gulia)", hindiName: "गुलिया", category: "Laddus", description: "Crisp crescent-shaped golden pastry filled with sweetened khoya, roasted nuts, and coconut.", sizes: ["250g", "500g", "1kg"], image: "assets/guliya.jpg" },
  { id: "chashni-mawa-gujiya", name: "Chashni Mawa Gujiya", hindiName: "चाशनी मावा गुजिया", category: "Laddus", description: "Gujiya soaked in sugar syrup — an indulgent take on the festival classic.", sizes: ["250g", "500g", "1kg"], image: "assets/chashni-mawa-gujiya.jpg" },
  { id: "moong-dal-halwa", name: "Moong Dal Halwa", hindiName: "मूंग दाल हलवा", category: "Laddus", description: "Slow-cooked golden lentil halwa with pure desi ghee, saffron, and crunchy cashews.", sizes: ["250g", "500g", "1kg"], image: "assets/moong-dal-halwa-vark-thal.jpg" },
  { id: "rajasthani-malpua", name: "Rajasthani Mawa Malpua", hindiName: "राजस्थानी मालपुआ", category: "Laddus", description: "Soft pan-fried Rajasthani pancakes dunked in cardamom-rose syrup, garnished with rabdi.", sizes: ["2 Pcs", "Plate", "Party Pack"], image: "assets/rajasthani-mawa-malpua.jpg" },

  // Artisanal Barfi & Mawa Sweets
  { id: "gulab-halwa-ki-barfi", name: "Gulab Halwa Ki Barfi", hindiName: "गुलाब हलवा की बर्फी", category: "Artisanal Barfi", description: "Aromatic rose petal infused slow-cooked milk halwa set into delectable fudge squares.", sizes: ["250g", "500g", "1kg"], image: "assets/gulab-halwa-ki-barfi.jpg" },
  { id: "kaju-dry-fruit-barfi", name: "Kaju Dry Fruit Barfi", hindiName: "काजू ड्रायफ्रूट बर्फी", category: "Artisanal Barfi", description: "Dense, opulent cashew fudge layered with crunchy roasted almonds and pistachios.", sizes: ["250g", "500g", "1kg"], image: "assets/kaju-dry-fruit-barfi.jpg" },
  { id: "anjeer-barfi", name: "Anjeer Barfi", hindiName: "अंजीर बर्फी", category: "Artisanal Barfi", description: "Naturally sweet, guilt-free fig confection loaded with chopped cashews and almonds.", sizes: ["250g", "500g", "1kg"], image: "assets/anjeer-barfi.jpg" },
  { id: "kesar-kalakand", name: "Kesar Kalakand", hindiName: "केसर कलाकंद", category: "Artisanal Barfi", description: "Saffron-tinged granular kalakand with real kesar strands and a melt-away texture.", sizes: ["250g", "500g", "1kg"], image: "assets/kesar-kalakand.jpg" },

  // Dry Fruit & Healthy Confections
  { id: "dry-fruit-laddu", name: "Dry Fruit Laddu", hindiName: "ड्रायफ्रूट लड्डू", category: "Dry Fruit", description: "Nutrient-dense power laddus handcrafted with dates, roasted nuts, and edible seeds.", sizes: ["250g", "500g", "1kg"], image: "assets/dry-fruit-laddu.jpg" },
  { id: "anjeer-dry-fruit-roll", name: "Anjeer Dry Fruit Roll", hindiName: "अंजीर रोल", category: "Dry Fruit", description: "Tightly rolled fig and dry fruit log — a healthy indulgence with no added sugar.", sizes: ["250g", "500g", "1kg"], image: "assets/anjeer-dry-fruit-roll.jpg" },
  { id: "anjeer-dry-fruit-halwa", name: "Anjeer Dry Fruit Halwa", hindiName: "अंजीर हलवा", category: "Dry Fruit", description: "Rich fig halwa cooked with almonds, cashews, and warm winter spices.", sizes: ["250g", "500g", "1kg"], image: "assets/anjeer-dry-fruit-halwa.jpg" },
  { id: "assorted-dry-fruit-bites", name: "Assorted Dry Fruit Bites", hindiName: "ड्रायफ्रूट बाइट्स", category: "Dry Fruit", description: "An assortment of bite-sized dry fruit confections — guilt-free, natural energy bites.", sizes: ["250g", "500g", "1kg"], image: "assets/assorted-dry-fruit-bites.jpg" },
  { id: "premium-dry-fruits-box", name: "Premium Dry Fruits Box", hindiName: "प्रीमियम ड्रायफ्रूट बॉक्स", category: "Dry Fruit", description: "Handpicked, premium-grade dry fruits presented in a luxurious gift box.", sizes: ["500g Box", "1kg Box", "Custom"], image: "assets/premium-dry-fruits-box-purple.jpg" },

  // Gift Boxes & Assortments
  { id: "kaju-mix-box-fancy", name: "Royal Kaju Mix Box Fancy", hindiName: "काजू मिक्स बॉक्स फैन्सी", category: "Gift Boxes", description: "Exquisite gift box featuring a curated selection of handcrafted cashew and dry fruit delicacies.", sizes: ["500g Box", "1kg Box", "Custom Hamper"], image: "assets/kaju-mix-box-fancy.jpg" },
  { id: "mix-mithai", name: "Mix Mithai Box", hindiName: "मिक्स मिठाई", category: "Gift Boxes", description: "Festive assorted box curated with Keshuji's most celebrated traditional and modern sweets.", sizes: ["500g Box", "1kg Box", "Family Box"], image: "assets/mix-mithai.jpg" },
  { id: "assorted-dry-fruit-sweets-box", name: "Assorted Dry Fruit Sweets Box", hindiName: "ड्रायफ्रूट मिठाई बॉक्स", category: "Gift Boxes", description: "A premium mix of dry fruit-based sweets and confections, gift-wrapped beautifully.", sizes: ["500g Box", "1kg Box"], image: "assets/assorted-dry-fruit-sweets-box.jpg" },
  { id: "premium-gift-pack", name: "Premium Dry Fruits Gift Pack", hindiName: "प्रीमियम गिफ्ट पैक", category: "Gift Boxes", description: "The ultimate gifting hamper — premium dry fruits, artisanal sweets, and more.", sizes: ["Custom", "Deluxe", "Grand"], image: "assets/premium-dry-fruits-gift-pack.jpg" },
  { id: "chhappan-bhog-thali", name: "Chhappan Bhog Thali", hindiName: "छप्पन भोग थाली", category: "Gift Boxes", description: "The legendary 56-item thali — a grand prasad offering for auspicious occasions.", sizes: ["Standard", "Grand", "Custom"], image: "assets/chhappan-bhog-thali.jpg" },
  { id: "assorted-mithai-mathri-box", name: "Assorted Mithai & Mathri Box", hindiName: "मिठाई मठरी बॉक्स", category: "Gift Boxes", description: "A unique combo box pairing classic mithai with crunchy flavored mathris.", sizes: ["500g", "1kg", "Custom"], image: "assets/assorted-mithai-mathri-boxes.jpg" },
];

/* Category label mapping */
const CAT_MAP = {
  "all": "all",
  "Signature Heritage": "Signature Heritage",
  "Royal Kaju": "Royal Kaju",
  "Bengali Sweets": "Bengali Sweets",
  "Laddus": "Laddus",
  "Artisanal Barfi": "Artisanal Barfi",
  "Dry Fruit": "Dry Fruit",
  "Gift Boxes": "Gift Boxes",
};

/* ===================================================
   NAVBAR — scroll & mobile toggle
   =================================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNavLink();
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
  });
});

// Active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const scrollY = window.scrollY + 100;
  let current = 'home';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.id;
    }
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

/* ===================================================
   PRODUCTS — render & filter
   =================================================== */
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
let activeFilter = 'all';

function renderProducts(filter) {
  const items = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  productsGrid.innerHTML = '';
  items.forEach((product, i) => {
    const card = createProductCard(product, i);
    productsGrid.appendChild(card);
  });

  // Trigger reveal animations
  requestAnimationFrame(() => {
    productsGrid.querySelectorAll('.product-card').forEach((card, idx) => {
      setTimeout(() => card.classList.add('visible'), idx * 60);
    });
  });
}

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.setAttribute('data-id', product.id);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${product.name}`);
  card.id = `product-card-${product.id}`;

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='assets/KeshuJI-Logo.png'; this.style.objectFit='contain'; this.style.padding='20px';" />
      <div class="product-category-tag">${product.category}</div>
    </div>
    <div class="product-body">
      <h3 class="product-name">${product.name}</h3>
      <span class="product-hindi">${product.hindiName}</span>
      <p class="product-desc">${product.description}</p>
      <div class="product-sizes">
        ${product.sizes.map(s => `<span class="product-size">${s}</span>`).join('')}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(product));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(product);
    }
  });

  return card;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    renderProducts(activeFilter);
  });
});

// Initial render
renderProducts('all');

/* ===================================================
   MODAL
   =================================================== */
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

function openModal(product) {
  modalContent.innerHTML = `
    <img
      class="modal-product-img"
      src="${product.image}"
      alt="${product.name}"
      onerror="this.src='assets/KeshuJI-Logo.png'; this.style.objectFit='contain'; this.style.background='#FFF8E1';"
    />
    <div class="modal-body">
      <p class="modal-cat">${product.category}</p>
      <h2 class="modal-name" id="modal-product-name">${product.name}</h2>
      <p class="modal-hindi">${product.hindiName}</p>
      <p class="modal-desc">${product.description}</p>
      <p class="modal-sizes-label">Available Sizes</p>
      <div class="modal-sizes">
        ${product.sizes.map(s => `<span class="modal-size">${s}</span>`).join('')}
      </div>
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ===================================================
   SCROLL REVEAL ANIMATIONS
   =================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function initRevealObserver() {
  document.querySelectorAll('.pillar, .store-card, .testimonial-card, .gallery-item, .about-img-stack, .about-content').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

initRevealObserver();

/* ===================================================
   CONTACT FORM
   =================================================== */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = document.getElementById('contact-submit-btn');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    formSuccess.textContent = '✓ Thank you! We'll get back to you within 24 hours.';
    contactForm.reset();
    submitBtn.textContent = 'Send Enquiry';
    submitBtn.disabled = false;
    setTimeout(() => { formSuccess.textContent = ''; }, 6000);
  }, 1200);
});

/* ===================================================
   HERO IMAGE ROTATION
   =================================================== */
const heroImages = [
  "assets/kaju-anjeer-chakra.jpg",
  "assets/motichoor-laddu.jpg",
  "assets/kaju-mix-box-fancy.jpg",
  "assets/rabri-ghevar.jpg",
  "assets/gulab-halwa-ki-barfi.jpg",
];

const heroImg1 = document.getElementById('hero-img-1');
if (heroImg1) {
  let heroIdx = 0;
  setInterval(() => {
    heroIdx = (heroIdx + 1) % heroImages.length;
    heroImg1.style.opacity = '0';
    heroImg1.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
      heroImg1.src = heroImages[heroIdx];
      heroImg1.style.opacity = '1';
    }, 600);
  }, 4000);
}

/* ===================================================
   SMOOTH ANCHOR SCROLL
   =================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===================================================
   STATS COUNTER ANIMATION
   =================================================== */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(num => {
        const text = num.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
          const value = parseInt(match[1]);
          const sup = num.querySelector('sup');
          const supText = sup ? sup.textContent : '';
          num.textContent = '0';
          if (sup) {
            num.appendChild(sup);
          }
          animateCounter(num, value, '');
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
