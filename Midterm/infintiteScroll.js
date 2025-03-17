let episodeCount = 12; // Start at 12 if you already show 12 episodes

function loadMoreEpisodes() {
    const grid = document.querySelector('.episode-grid');
    for (let i = 0; i < 4; i++) { // Load 4 episodes at a time
        episodeCount++;
        const episode = document.createElement('div');
        episode.classList.add('episode');
        episode.setAttribute('data-episode', episodeCount);
        episode.style.backgroundImage = `url('Images/episode${episodeCount}.jpg')`; // Update this once you have real images
        grid.appendChild(episode);
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMoreEpisodes();
    }
});
