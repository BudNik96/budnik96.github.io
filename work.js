// Portfolio projects (from Behance). embed = player URL opened in the lightbox; link = Behance page.
const WORK = [
  { t: 'Haruki — UE cinematic', tag: 'Unreal Engine', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/b898a2233342103.Y3JvcCwxMDU5LDgyOCwwLDQ0.png',
    embed: 'https://www.youtube-nocookie.com/embed/8rfgbVXxuh0', link: 'https://www.behance.net/gallery/233342103/Haruki-UE-Cinematic-(Bad-Decisions-Studio-course)' },
  { t: 'Let Me Be Free — music clip', tag: 'Music video', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/485099182441427.Y3JvcCw4NjQsNjc2LDE3LDA.png',
    embed: 'https://www.youtube-nocookie.com/embed/qrFaQa0TUO0', link: 'https://www.behance.net/gallery/182441427/Let-Me-Be-Free-Music-Clip' },
  { t: 'DualSense product animation', tag: '3D product', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/ebd178195126413.Y3JvcCw4MDgsNjMyLDAsMA.png',
    embed: 'https://www-ccv.adobe.io/v1/player/ccv/UikKVixMhCL/embed?api_key=behance1&bgcolor=%23191919', link: 'https://www.behance.net/gallery/195126413/Dualsense-Product-Animation' },
  { t: 'Fizz Burst product animation', tag: '3D product', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/2e64ec196526435.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',
    embed: 'https://player.vimeo.com/video/936273257', link: 'https://www.behance.net/gallery/196526435/Fizz-Burst-Product-Animation' },
  { t: 'Some animations', tag: 'Motion design', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/e4d25d229788777.Y3JvcCwzMjY0LDI1NTMsMCwzNTU.png',
    embed: 'https://player.vimeo.com/video/1099298516', link: 'https://www.behance.net/gallery/229788777/Some-animations' },
  { t: 'Infinite Tunnel', tag: '3D loop', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/a84d6e145399697.Y3JvcCwxMDkwLDg1Myw0MTUsMTEz.jpg',
    embed: 'https://player.vimeo.com/video/718218823?h=1431bb58cd', link: 'https://www.behance.net/gallery/145399697/Infinite-Tunnel' },
  { t: 'Sword', tag: '3D', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/efa024139940723.6238dd4be475d.png',
    embed: 'https://player.vimeo.com/video/691799974?h=86348f5bd9', link: 'https://www.behance.net/gallery/139940723/Sword' },
  { t: 'Room', tag: '3D still', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/3aef01139313359.622db48c3cd48.png',
    embed: '', link: 'https://www.behance.net/gallery/139313359/Room' },
  { t: 'Couple of small animations', tag: 'Motion design', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7466c7139059791.6228eddb4a416.gif',
    embed: 'https://www-ccv.adobe.io/v1/player/ccv/B6_onCBpVd-/embed?api_key=behance1&bgcolor=%23191919', link: 'https://www.behance.net/gallery/139059791/Couple-of-small-animations' },
  { t: 'My Little Collage', tag: 'Motion design', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/74b31e135450069.Y3JvcCw5NzksNzY1LDAsMTMz.png',
    embed: 'https://player.vimeo.com/video/667774909?h=e5ecf270c8', link: 'https://www.behance.net/gallery/135450069/My-Little-Collage' },
  { t: 'Talanty 2.0', tag: 'Motion design', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/2e3882131221405.Y3JvcCwyNzk2LDIxODcsMzE0OSwxMjUy.png',
    embed: 'https://player.vimeo.com/video/645703698?h=a261f0ba40', link: 'https://www.behance.net/gallery/131221405/Talanty-20' },
  { t: 'Kaino School course', tag: 'Motion design', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/b9aa4f124801599.610ba8f154ba0.jpg',
    embed: 'https://player.vimeo.com/video/583292668', link: 'https://www.behance.net/gallery/124801599/My-Kaino-School-Course' },
];


// Character animation (weakest pieces last): muted loop on hover, 720p version with sound in the lightbox.
const ANIM = [
  ['toilet', 'Skibidi toilet'], ['skibidi_block', 'Skibidi blocking'], ['skibidi_test', 'Skibidi test'],
  ['skel_walk', 'Skeleton walk cycle'], ['skel_attack', 'Skeleton attack'], ['flykick', 'Flying kick'],
  ['zombie', 'Zombie'], ['babka', 'Evil Granny'], ['tung', 'Espresso Ballerina'],
];

// >>> YOUTUBE_ID: paste the Bad Omens YouTube video id here after the release (e.g. 'dQw4w9WgXcQ'). Empty = the self-hosted 720p file plays instead.
const YOUTUBE_ID = '4AqKGE7j7L0';

// Featured pieces (self-hosted 720p; Bad Omens switches to YouTube once YOUTUBE_ID is set).
const FEATURED = {
  badomens: { video: 'assets/video/badomens_720.mp4', poster: 'assets/img/bo_poster.jpg', yt: YOUTUBE_ID },
  reel: { video: 'assets/video/reel_720.mp4', poster: 'assets/img/sm/reel_3.jpg', yt: '' },
};

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const canHover = matchMedia('(hover: hover)').matches;
const onScreen = (els, cb, margin = '0px') => {
  if (!('IntersectionObserver' in window)) return els.forEach(el => cb(el, true));
  const io = new IntersectionObserver(es => es.forEach(e => cb(e.target, e.isIntersecting, io)), { rootMargin: margin });
  els.forEach(el => io.observe(el));
};

// ---- Lightbox (video player dialog) ----
const lb = document.getElementById('lb');
const lbf = document.getElementById('lbf');
const lbv = document.getElementById('lbv');
const lbClose = lb.querySelector('.lb-close');
let lbReturnFocus = null;

function openLb({ embed, video, poster }) {
  lbReturnFocus = document.activeElement;
  if (embed) {
    lbv.hidden = true; lbf.hidden = false;
    lbf.src = embed + (embed.includes('?') ? '&' : '?') + 'autoplay=1';
  } else {
    lbf.hidden = true; lbv.hidden = false;
    lbv.poster = poster || ''; lbv.src = video; lbv.play().catch(() => {});
  }
  lb.hidden = false;
  document.body.classList.add('lb-open');
  lbClose.focus();
}
function closeLb() {
  if (lb.hidden) return;
  lb.hidden = true; lbf.src = ''; lbv.pause(); lbv.removeAttribute('src'); lbv.removeAttribute('poster'); lbv.load(); lbv.hidden = true; lbf.hidden = false;
  document.body.classList.remove('lb-open');
  if (lbReturnFocus) lbReturnFocus.focus();
}
lb.addEventListener('click', e => { if (e.target === lb || e.target === lbClose) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') { e.preventDefault(); closeLb(); }
  if (e.key === 'Tab') { // keep focus inside the dialog: close button <-> player
    const player = lbv.hidden ? lbf : lbv;
    const target = document.activeElement === lbClose ? player : lbClose;
    e.preventDefault(); target.focus();
  }
});

// ---- More work (Behance) ----
const cards = document.getElementById('cards');
WORK.forEach(w => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = w.link;
  a.target = '_blank';
  a.rel = 'noopener';
  if (w.embed) a.setAttribute('aria-haspopup', 'dialog');
  // Cover is decorative: the card's accessible name comes from the title below it.
  a.innerHTML = `<div class="thumb"><img src="${w.img}" alt="" width="808" height="455" loading="lazy" decoding="async">${w.embed ? '<span class="play" aria-hidden="true">▶</span>' : ''}</div>
    <h3>${w.t}</h3><p>${w.tag}${w.embed ? '' : '<span class="sr-only"> (opens Behance in a new tab)</span>'}</p>`;
  if (w.embed) a.addEventListener('click', e => { e.preventDefault(); openLb({ embed: w.embed }); });
  cards.appendChild(a);
});

// ---- Character animation ----
const animGrid = document.getElementById('anim');
ANIM.forEach(([k, t]) => {
  const d = document.createElement('button');
  d.className = 'anim-card';
  d.type = 'button';
  d.setAttribute('aria-haspopup', 'dialog');
  d.innerHTML = `<span class="thumb"><img src="assets/anim/${k}.jpg" alt="" width="640" height="360" loading="lazy" decoding="async">
    <video muted loop playsinline preload="none" aria-hidden="true"></video><span class="play" aria-hidden="true">▶</span></span><span class="anim-title">${t}</span>`;
  const v = d.querySelector('video');
  const preview = on => {
    if (on && reduceMotion.matches) return;
    if (on) { if (!v.src) v.src = `assets/anim/${k}_loop.mp4`; v.play().then(() => d.classList.add('playing')).catch(() => {}); }
    else { v.pause(); d.classList.remove('playing'); }
  };
  if (canHover) {
    d.addEventListener('mouseenter', () => preview(true));
    d.addEventListener('mouseleave', () => preview(false));
  }
  d.addEventListener('focus', () => { if (d.matches(':focus-visible')) preview(true); });
  d.addEventListener('blur', () => preview(false));
  d.addEventListener('click', () => { preview(false); openLb({ video: `assets/anim/${k}_720.mp4` }); });
  animGrid.appendChild(d);
});

// ---- Featured cards: muted hover preview, click opens the full video ----
document.querySelectorAll('.feat-media').forEach(btn => {
  const f = FEATURED[btn.dataset.key], v = btn.querySelector('.pv');
  const preview = on => {
    if (on && reduceMotion.matches) return;
    if (on) { if (!v.src) v.src = v.dataset.src; v.play().then(() => btn.classList.add('playing')).catch(() => {}); }
    else { v.pause(); btn.classList.remove('playing'); }
  };
  if (canHover) { btn.addEventListener('mouseenter', () => preview(true)); btn.addEventListener('mouseleave', () => preview(false)); }
  btn.addEventListener('focus', () => { if (btn.matches(':focus-visible')) preview(true); });
  btn.addEventListener('blur', () => preview(false));
  btn.addEventListener('click', () => {
    preview(false);
    openLb(f.yt ? { embed: `https://www.youtube-nocookie.com/embed/${f.yt}` } : { video: f.video, poster: f.poster });
  });
});

document.querySelectorAll('.watch').forEach(b => b.addEventListener('click', () => openLb({ embed: b.dataset.embed })));

// ---- Background loops: lazy-load, play only while visible, respect reduced motion, pause button ----
const loops = [...document.querySelectorAll('.loop-video')];
loops.forEach(v => { v.userPaused = reduceMotion.matches; });
document.querySelectorAll('.loop-toggle').forEach(btn => {
  const v = document.querySelector(btn.dataset.for);
  v.toggleBtn = btn;
  btn.addEventListener('click', () => { v.userPaused = !v.userPaused; syncLoop(v); });
});
function syncLoop(v) {
  const play = v.visible && !v.userPaused;
  if (play) {
    if (v.dataset.src && !v.src) v.src = v.dataset.src;
    v.play().catch(() => {});
  } else v.pause();
  if (v.toggleBtn) {
    v.toggleBtn.textContent = v.userPaused ? 'Play loop' : 'Pause loop';
  }
}
// Posters for lazy loops load a bit before they scroll into view.
onScreen(document.querySelectorAll('.lazy-video'), (v, seen, io) => {
  if (seen) { v.poster = v.dataset.poster; io && io.unobserve(v); }
}, '600px');
onScreen(loops, (v, seen) => { v.visible = seen; syncLoop(v); });
reduceMotion.addEventListener('change', () => loops.forEach(v => { v.userPaused = reduceMotion.matches; syncLoop(v); }));

// ---- Nav: mobile menu, current section, shadow after scrolling ----
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');
const setMenu = open => { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); };
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });

const navLinks = [...nav.querySelectorAll('nav a')];
onScreen([document.getElementById('top'), ...navLinks.map(a => document.querySelector(a.hash))], (sec, seen) => {
  if (!seen) return;
  navLinks.forEach(a => a.toggleAttribute('aria-current', a.hash === '#' + sec.id));
}, '-45% 0px -50% 0px');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// ---- Fade-in on scroll (skipped entirely when reduced motion is on) ----
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const els = document.querySelectorAll('main section:not(.hero) .sec-title, .feat, .dragon, .card, .sub, .anim-card, .about > *, .contact > *');
  els.forEach(el => {
    el.classList.add('reveal');
    const sibs = el.parentElement.children, i = [...sibs].indexOf(el);
    if (el.matches('.card, .anim-card')) el.style.transitionDelay = (i % 3) * 80 + 'ms';
  });
  onScreen([...els], (el, seen, io) => { if (seen) { el.classList.add('in'); io.unobserve(el); } }, '0px 0px -8% 0px');
}
