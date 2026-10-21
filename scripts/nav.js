// Arrow keys cycle pages, Escape goes back, the faint star changes the page colour.
const link = sel => document.querySelector(sel);
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') link('[rel=prev]')?.click();
    if (e.key === 'ArrowRight') link('[rel=next]')?.click();
    if (e.key === 'Escape') link('.nav-back').click();
});
const colours = ['#54135a', '#1c9d90', '#926f08', '#a6b506', '#8a1c3a', '#1c4d9d'];
const star = link('.secret');
star.addEventListener('click', () => {
    const i = (colours.indexOf(document.body.dataset.c || '') + 1) % colours.length;
    document.body.dataset.c = colours[i];
    document.body.style.setProperty('--bg', colours[i]);
});
