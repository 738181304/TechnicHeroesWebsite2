
const images = [
    'https://images.unsplash.com/photo-1581091870626-8e78a39cdbcb',
    'https://images.unsplash.com/photo-1518770660439-4636190af475',
    'https://images.unsplash.com/photo-1581090700227-75fbd3b2e4f4',
    'https://images.unsplash.com/photo-1581092339149-3c5fcf8e5ee4'
];
let current = 0;
document.body.style.backgroundImage = 'url(' + images[0] + ')';

setInterval(() => {
    current = (current + 1) % images.length;
    document.body.style.backgroundImage = 'url(' + images[current] + ')';
}, 5000);

document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
