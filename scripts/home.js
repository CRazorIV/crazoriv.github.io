// Shrink the base font size until the whole page fits the screen without scrolling.
function fitToScreen() {
    const root = document.documentElement;
    root.style.fontSize = '';
    let size = parseFloat(getComputedStyle(root).fontSize);
    const blocks = document.querySelectorAll('header, section, footer');
    const overflows = () => [...blocks].some(b => b.scrollHeight > b.clientHeight + 1 || b.scrollWidth > b.clientWidth + 1);
    while (size > 4 && overflows()) {
        size -= 0.5;
        root.style.fontSize = size + 'px';
    }
}
window.addEventListener('load', fitToScreen);
window.addEventListener('resize', fitToScreen);

// Load the JSON-LD structured data for search engines from its own file.
fetch('public/structured-data.json')
    .then(r => r.json())
    .then(data => {
        data.image = new URL(data.image, location.href).href;
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.textContent = JSON.stringify(data);
        document.head.appendChild(s);
    })
    .catch(() => { });

const tiles = [...document.querySelectorAll('section h2 a')];
const centre = a => {
    const r = a.closest('section').getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};
const dirs = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
let current = null;
const root = document.documentElement;

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && current && !tiles.includes(document.activeElement)) {
        current.click();
        return;
    }
    if (e.key === 'Tab') root.classList.add('keyboard');
    const d = dirs[e.key];
    if (!d) return;
    e.preventDefault();
    root.classList.add('keyboard');
    if (!current) { current = tiles[0]; current.focus(); return; }
    const from = centre(current);
    let best = null, bestScore = Infinity;
    for (const t of tiles) {
        if (t === current) continue;
        const c = centre(t);
        const along = (c.x - from.x) * d[0] + (c.y - from.y) * d[1];
        const across = Math.abs((c.x - from.x) * d[1]) + Math.abs((c.y - from.y) * d[0]);
        if (along <= 1 || across > along) continue;
        const score = along + across * 2;
        if (score < bestScore) { best = t; bestScore = score; }
    }
    if (best) current = best;
    current.focus();
});

document.addEventListener('focusin', e => {
    if (tiles.includes(e.target)) current = e.target;
});

document.addEventListener('mousemove', e => {
    if (!e.movementX && !e.movementY) return;
    root.classList.remove('keyboard');
    if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
    const section = e.target.closest && e.target.closest('section');
    current = section ? section.querySelector('h2 a') : null;
});

document.addEventListener('mouseover', e => {
    if (root.classList.contains('keyboard')) return;
    const section = e.target.closest && e.target.closest('section');
    if (section) current = section.querySelector('h2 a');
});
