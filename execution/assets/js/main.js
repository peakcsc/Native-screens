// Native Screens — Main JS

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ═══ GALLERY — Auto Slider ═══
// Add your real photos here. hero-bg.jpg is your first real photo.
const galleryImages = [
  { src: 'assets/images/hero-bg.jpg',
    alt: 'Pool enclosure by Native Screens — South Florida' },
  { src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=800&fit=crop&q=80',
    alt: 'Screen enclosure project — Broward County' },
  { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=800&fit=crop&q=80',
    alt: 'Outdoor enclosure — South Florida' },
  { src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=800&fit=crop&q=80',
    alt: 'Pool area — Fort Lauderdale, FL' },
  { src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=800&h=800&fit=crop&q=80',
    alt: 'Aluminum roof patio — Broward County' },
  { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=800&fit=crop&q=80',
    alt: 'Luxury pool enclosure — South Florida' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop&q=80',
    alt: 'Home exterior — Hollywood FL' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=800&fit=crop&q=80',
    alt: 'Residential project — Coral Springs FL' },
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
function handleSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Website Inquiry — ${service || 'General'}`);
  const body    = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}\n\n(Sent from nativescreens.com)`
  );
  window.location.href = `mailto:peakcsc@gmail.com?subject=${subject}&body=${body}`;
  e.target.reset();
  alert("Thank you! We'll be in touch within 1 business day.");
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
