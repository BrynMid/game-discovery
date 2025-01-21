document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameTitle = urlParams.get('title');
    
    const game = games.find(g => g.title === gameTitle);
    
    if (game) {
        // Update page title
        document.title = `${game.title} - Game Discovery`;
        
        // Basic info
        document.getElementById('game-image').src = game.image;
        document.getElementById('game-image').alt = game.title;
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-price').textContent = `£${game.price.toFixed(2)}`;
        document.getElementById('game-description').textContent = game.description;
        
        // Meta information
        document.getElementById('game-developer').textContent = `Developer: ${game.developer}`;
        document.getElementById('game-release').textContent = `Released: ${game.releasedate}`;
        
        // Genres
        const genresHtml = game.genres.map(genre => 
            `<span>${genre}</span>`
        ).join('');
        document.getElementById('game-genres').innerHTML = genresHtml;
        
        // Platforms
        const platformsHtml = game.platforms.map(platform => 
            `<span class="platform-tag">${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>`
        ).join('');
        document.getElementById('game-platforms').innerHTML = platformsHtml;
        
        // Features
        if (game.features) {
            const featuresHtml = game.features.map(feature =>
                `<li>${feature}</li>`
            ).join('');
            document.getElementById('game-features').innerHTML = featuresHtml;
        }
        
        // System Requirements
        if (game.systemrequirements) {
            const minSpecsHtml = Object.entries(game.systemrequirements.minimum)
                .map(([key, value]) => `
                    <div class="spec-item">
                        <strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                        <span>${value}</span>
                    </div>
                `).join('');
            document.getElementById('minimum-specs').innerHTML = minSpecsHtml;
            
            const recSpecsHtml = Object.entries(game.systemrequirements.recommended)
                .map(([key, value]) => `
                    <div class="spec-item">
                        <strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                        <span>${value}</span>
                    </div>
                `).join('');
            document.getElementById('recommended-specs').innerHTML = recSpecsHtml;
        }
        
        // Awards
        if (game.awards) {
            const awardsHtml = game.awards.map(award =>
                `<li>${award}</li>`
            ).join('');
            document.getElementById('game-awards').innerHTML = awardsHtml;
        }
        if (game.videoId) {
            document.getElementById('game-trailer').src = 
                `https://www.youtube.com/embed/${game.videoId}`;
        }
    }
});