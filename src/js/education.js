function handleBackClick(event, url) {
    event.preventDefault();

    const handElement = document.getElementById('hand');
    const titleElement = document.getElementById('title');
    let animationsEnded = 0;

    [handElement, titleElement].forEach(element => {
        element.classList.add(element.id === 'hand' ? 'slideOutBottom' : 'slideOutLeft');
        element.addEventListener('animationend', () => {
            animationsEnded++;
            if (animationsEnded === 2) window.location.href = url;
        });
    });
}

document.getElementById('backbutton').addEventListener('click', function(event) {
    const url = this.querySelector('a').getAttribute('href');
    handleBackClick(event, url);
});