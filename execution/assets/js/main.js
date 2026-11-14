// Native Screens — Main JS

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Hero video — 2× speed, works on iOS
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  const setSpeed = () => { heroVideo.playbackRate = 2.0; };
  heroVideo.addEventListener('loadedmetadata', setSpeed);
  heroVideo.addEventListener('play', setSpeed);
  setSpeed();
}

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ═══ GALLERY — Auto Slider ═══
// Add your real photos here. hero-bg.jpg is your first real photo.
const galleryImages = [
  { src: 'assets/images/gallery-pool-enclosure-2.jpg',
    alt: 'Pool enclosure by Native Screens — South Florida' },
  { src: 'assets/images/hero-bg.jpg',
    alt: 'Screen enclosure project by Native Screens — Broward County' },
  { src: 'assets/images/gallery-pool-3.jpg',
    alt: 'Luxury pool enclosure — Native Screens' },
  { src: 'assets/images/gallery-pool-4.jpg',
    alt: 'Pool enclosure with fire pit — Native Screens' },
  { src: 'assets/images/gallery-pool-5.jpg',
    alt: 'Screen enclosure — Native Screens South Florida' },
  { src: 'assets/images/service-super-gutter.jpg',
    alt: 'Aluminum roof patio — Native Screens South Florida' },
  { src: 'assets/images/gallery-work-1.jpg',
    alt: 'Pool enclosure installation in progress — Native Screens' },
  { src: 'assets/images/gallery-arch-1.jpg',
    alt: 'Custom arch screen enclosure — Native Screens Broward County' },
  { src: 'assets/images/gallery-screen-1.jpg',
    alt: 'Screen room addition — Native Screens South Florida' },
  { src: 'assets/images/gallery-arch-2.jpg',
    alt: 'Brick arch screen enclosure with door — Native Screens' },
  { src: 'assets/images/gallery-p1.jpg',
    alt: 'Screen enclosure project — Native Screens' },
  { src: 'assets/images/gallery-p2.jpg',
    alt: 'Aluminum patio cover installation — Native Screens' },
  { src: 'assets/images/gallery-p3.jpg',
    alt: 'Screen room installation — Native Screens South Florida' },
  { src: 'assets/images/gallery-p4.jpg',
    alt: 'Enclosure construction in progress — Native Screens' },
  { src: 'assets/images/gallery-p5.jpg',
    alt: 'Pool screen enclosure — Native Screens Broward' },
  { src: 'assets/images/gallery-p6.jpg',
    alt: 'Screen enclosure project — Native Screens South Florida' },
];

function buildSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  // Duplicate for seamless infinite loop
  [...galleryImages, ...galleryImages].forEach(img => {
    const item = document.createElement('div');
    item.className = 'slide-item';
    const image = document.createElement('img');
    image.src      = img.src;
    image.alt      = img.alt;
    image.loading  = 'lazy';
    image.decoding = 'async';
    item.appendChild(image);
    item.addEventListener('click', () => openLightboxImg(img.src, img.alt));
    track.appendChild(item);
  });
}

buildSlider();

// Pause slider on touch devices
const sliderTrack = document.getElementById('sliderTrack');
if (sliderTrack) {
  sliderTrack.addEventListener('touchstart', () => sliderTrack.style.animationPlayState = 'paused', { passive: true });
  sliderTrack.addEventListener('touchend',   () => sliderTrack.style.animationPlayState = 'running', { passive: true });
}

// ═══ LIGHTBOX ═══
function openLightboxImg(src, alt) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ═══ CONTACT FORM ═══
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/8k72YlRQYGqHlj2svRqj/webhook-trigger/f4792cd6-9221-49d4-b051-08e5f44db4f7';

async function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    name:     document.getElementById('lf-name').value.trim(),
    phone:    document.getElementById('lf-phone').value.trim(),
    email:    document.getElementById('lf-email').value.trim(),
    address:  document.getElementById('lf-address').value.trim(),
    service:  document.getElementById('lf-service').value,
    timeline: document.getElementById('lf-timeline').value,
    message:  document.getElementById('lf-message').value.trim(),
    source:   'nativescreens.com',
  };
  try {
    const fd = new FormData();
    Object.entries(payload).forEach(([k, v]) => fd.append(k, v));
    navigator.sendBeacon(WEBHOOK_URL, fd);
  } catch (_) {}
  e.target.reset();
  // Show inline success message instead of a popup
  const form = document.getElementById('estimateForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert("Thank you! We'll call you within 1 business day.");
  }
}

// ═══ SMOOTH SCROLL ═══
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Transparent nav — add dark bg after scrolling past hero
const siteHeader = document.querySelector('.site-header');
function updateHeader() {
  const heroHeight = document.getElementById('hero')?.offsetHeight || 80;
  siteHeader.classList.toggle('scrolled', window.scrollY > heroHeight * 0.6);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ═══ HERO QUOTE FORM (name + phone + photo) ═══
const CLOUDINARY_CLOUD = 'cew3ro6s';
const CLOUDINARY_PRESET = 'native_screens_quotes';

// Show chosen photo's filename on the label
const qPhoto = document.getElementById('q-photo');
if (qPhoto) {
  qPhoto.addEventListener('change', () => {
    const label = document.getElementById('q-photo-label');
    const f = qPhoto.files && qPhoto.files[0];
    if (label) label.textContent = f ? ('Photo added: ' + (f.name.length > 22 ? f.name.slice(0, 20) + '…' : f.name)) : 'Add a photo of your screen';
  });
}

async function handleQuote(e) {
  e.preventDefault();
  const btn = document.getElementById('q-submit');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  // 1) Upload the photo to Cloudinary (if one was chosen)
  let photoUrl = '';
  try {
    const file = qPhoto && qPhoto.files && qPhoto.files[0];
    if (file) {
      const cf = new FormData();
      cf.append('file', file);
      cf.append('upload_preset', CLOUDINARY_PRESET);
      const resp = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method: 'POST', body: cf });
      const data = await resp.json();
      photoUrl = data.secure_url || '';
    }
  } catch (_) {}

  // 2) Send the lead to GoHighLevel (sendBeacon avoids CORS)
  try {
    const fd = new FormData();
    fd.append('name',   document.getElementById('q-name').value.trim());
    fd.append('phone',  document.getElementById('q-phone').value.trim());
    fd.append('photo',  photoUrl);
    fd.append('source', 'nativescreens.com — hero quote');
    navigator.sendBeacon(WEBHOOK_URL, fd);
  } catch (_) {}

  // 3) Show success
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('quoteSuccess');
  if (form && success) { form.hidden = true; success.hidden = false; }
}

// ═══ Hero rotating Google reviews ═══
const HERO_REVIEWS = [
  { q: '"The quality of the work exceeded my expectations. I couldn\'t be happier!"', a: '— Angelina H.' },
  { q: '"Everyone was friendly, professional, and helpful. Smooth and stress-free!"', a: '— Xavier M.' },
  { q: '"Fast, efficient, good work, respectful and really professional."', a: '— Bosco M.' },
  { q: '"Very professional from start to finish! Larry and his crew do a great job!"', a: '— Parker P.' },
];
(function () {
  const q = document.getElementById('hrQuote'), a = document.getElementById('hrAuthor');
  if (!q || !a) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % HERO_REVIEWS.length;
    q.style.opacity = 0; a.style.opacity = 0;
    setTimeout(() => {
      q.textContent = HERO_REVIEWS[i].q;
      a.textContent = HERO_REVIEWS[i].a;
      q.style.opacity = 1; a.style.opacity = 1;
    }, 400);
  }, 4500);
})();
