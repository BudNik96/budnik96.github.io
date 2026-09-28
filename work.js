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

const cards = document.getElementById('cards');
const lb = document.getElementById('lb');
const lbf = document.getElementById('lbf');

WORK.forEach(w => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = w.link;
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = `<div class="thumb"><img src="${w.img}" alt="${w.t}" loading="lazy">${w.embed ? '<span class="play">▶</span>' : ''}</div>
    <h3>${w.t}</h3><p>${w.tag}</p>`;
  if (w.embed) a.addEventListener('click', e => {
    e.preventDefault();
    lbf.src = w.embed + (w.embed.includes('?') ? '&' : '?') + 'autoplay=1';
    lb.hidden = false;
  });
  cards.appendChild(a);
});

// Character animation: muted loop on hover, 720p version with sound in the lightbox.
const ANIM = [
  ['toilet', 'Skibidi toilet'], ['skibidi_block', 'Skibidi blocking'], ['skibidi_test', 'Skibidi test'],
  ['skel_walk', 'Skeleton walk cycle'], ['skel_attack', 'Skeleton attack'], ['flykick', 'Flying kick'],
  ['zombie', 'Zombie'], ['babka', 'Evil Granny'], ['tung', 'Espresso Ballerina'],
];
const lbv = document.getElementById('lbv');
const animGrid = document.getElementById('anim');
ANIM.forEach(([k, t]) => {
  const d = document.createElement('div');
  d.className = 'anim-card';
  d.innerHTML = `<div class="thumb"><img src="assets/anim/${k}.jpg" alt="${t}" loading="lazy">
    <video src="assets/anim/${k}_loop.mp4" muted loop playsinline preload="none"></video><span class="play">▶</span></div><h3>${t}</h3>`;
  const v = d.querySelector('video');
  d.addEventListener('mouseenter', () => { v.play().catch(() => {}); });
  d.addEventListener('mouseleave', () => { v.pause(); });
  d.addEventListener('click', () => {
    lbf.hidden = true; lbv.hidden = false;
    lbv.src = `assets/anim/${k}_720.mp4`; lb.hidden = false; lbv.play().catch(() => {});
  });
  animGrid.appendChild(d);
});

document.querySelectorAll('.watch').forEach(b => b.addEventListener('click', () => {
  lbv.hidden = true; lbf.hidden = false;
  lbf.src = b.dataset.embed + '?autoplay=1'; lb.hidden = false;
}));

function closeLb() { lb.hidden = true; lbf.src = ''; lbv.pause(); lbv.removeAttribute('src'); lbv.hidden = true; lbf.hidden = false; }
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-close')) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
