const text = document.querySelector('.text');
const hoverImage = document.querySelector('.hover-image');

text.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
});

text.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
});
