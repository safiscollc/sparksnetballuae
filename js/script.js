// ===== Sparks Netball UAE site script =====

document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Header scroll state ---- */
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Mobile nav ---- */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* ---- Gallery data ---- */
const GALLERY_COUNT = 49;
const captions = [
  'Team huddle before the match', 'Sparks squad ready for tournament day',
  'Community netball session', 'Team photo after a strong performance',
  'Sparks players on court', 'Match action at a community tournament',
  'Warm-up before kickoff', 'Sparks in action during a UAE tournament',
  'Team spirit on and off the court', 'Match day at the community court',
  'Sparks celebrating with medals', 'In the game, Sparks netball action',
  'Sparks squad photo', 'Building friendships through netball',
  'Sparks representing at a UAE netball cup', 'Match intensity on court',
  'Sparks community game day', 'Post-match celebrations',
  'Netball under the lights', 'Sparks players at a tournament',
  'A dynamic play mid-match', 'Sparks players sharing a laugh courtside',
  'Focused and ready for the next play', 'Team lineup before kickoff',
  'Sparks netball community in action', 'A well-earned break between games',
  'Cheering on teammates from the sideline', 'Sparks in their match day colours',
  'Passing drills during a training session', 'Coming together after the final whistle',
  'Sparks squad at a UAE community tournament', 'On court and in the zone',
  'Celebrating a great team performance', 'Sparks players warming up together',
  'A snapshot from a Sparks community session', 'Netball action under the Dubai sun',
  'Sparks netball, on and off the court', 'Team photo after another Sparks session',
  'Building confidence one match at a time', 'Sparks players in mid-game action',
  'Community and competition, Sparks style', 'A proud Sparks moment',
  'Sparks netball squad together', 'Match day energy at Sparks',
  'Sparks players supporting one another', 'Another highlight from the Sparks season',
  'Sparks netball in full swing', 'Friendships built through netball',
  'Sparks squad ready to take on the court'
];

const galleryGrid = document.getElementById('galleryGrid');
const images = [];

for (let i = 1; i <= GALLERY_COUNT; i++) {
  const num = String(i).padStart(2, '0');
  const thumb = `assets/img/thumb/gallery-${num}.jpg`;
  const full = `assets/img/full/gallery-${num}.jpg`;
  const alt = captions[i - 1] || 'Sparks Netball UAE';
  images.push({ thumb, full, alt });

  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.dataset.index = i - 1;

  const img = document.createElement('img');
  img.src = thumb;
  img.alt = alt;
  img.loading = 'lazy';
  img.addEventListener('load', () => img.classList.add('loaded'));

  item.appendChild(img);
  item.addEventListener('click', () => openLightbox(i - 1));
  galleryGrid.appendChild(item);
}

/* ---- Lightbox ---- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function updateLightbox() {
  const { full, alt } = images[currentIndex];
  lightboxImg.src = full;
  lightboxImg.alt = alt;
}
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNext);
lightboxPrev.addEventListener('click', showPrev);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
