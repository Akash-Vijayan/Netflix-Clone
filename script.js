// Netflix Clone JavaScript

class NetflixApp {
    constructor() {
        this.currentMovie = null;
        this.isMuted = true;
        this.isWarmLightActive = false;
        this.videoElement = null;
        this.breakTimer = null;
        this.breakCountdown = null;
        this.isVideoPlaying = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadMovieRows();
        this.setupScrollHeader();
        this.setupVideoPlayer();
    }

    setupEventListeners() {
        // Header search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchContainer = document.getElementById('searchContainer');
        const searchClose = document.getElementById('searchClose');
        const searchInput = document.getElementById('searchInput');

        searchBtn.addEventListener('click', () => {
            searchContainer.classList.add('active');
            searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            searchContainer.classList.remove('active');
            searchInput.value = '';
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch(searchInput.value);
            }
        });

        // Warm Light Toggle
        const warmLightBtn = document.getElementById('warmLightBtn');
        warmLightBtn.addEventListener('click', () => {
            this.toggleWarmLight();
        });

        // Hero section buttons
        const heroPlayBtn = document.getElementById('heroPlayBtn');
        const heroInfoBtn = document.getElementById('heroInfoBtn');
        const volumeBtn = document.getElementById('volumeBtn');

        heroPlayBtn.addEventListener('click', () => {
            this.toggleVideoPlayback();
        });

        heroInfoBtn.addEventListener('click', () => {
            this.openMovieModal(window.movieData.heroMovie);
        });

        volumeBtn.addEventListener('click', () => {
            this.toggleVolume();
        });

        // Break popup functionality
        const continueBtn = document.getElementById('continueBtn');
        const settingsBtn = document.getElementById('settingsBtn');

        continueBtn.addEventListener('click', () => {
            this.hideBreakPopup();
        });

        settingsBtn.addEventListener('click', () => {
            this.showNotAvailableToast('Break reminder settings are not available in this demo');
            this.hideBreakPopup();
        });

        // Modal functionality
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('movieModal');
        const modalPlayBtn = document.getElementById('modalPlayBtn');

        modalClose.addEventListener('click', () => {
            this.closeMovieModal();
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closeMovieModal();
            }
        });

        modalPlayBtn.addEventListener('click', () => {
            if (this.currentMovie) {
                this.showNotAvailableToast(this.currentMovie.title);
            }
        });

        // Toast close
        const toastClose = document.getElementById('toastClose');
        toastClose.addEventListener('click', () => {
            this.hideToast();
        });

        // Row navigation
        this.setupRowNavigation();
    }

    setupVideoPlayer() {
        this.videoElement = document.getElementById('heroVideo');
        const progressFill = document.getElementById('progressFill');
        const timeDisplay = document.getElementById('timeDisplay');
        const videoControls = document.getElementById('videoControls');

        if (this.videoElement) {
            // Video event listeners
            this.videoElement.addEventListener('loadedmetadata', () => {
                this.updateTimeDisplay();
            });

            this.videoElement.addEventListener('timeupdate', () => {
                this.updateProgress();
                this.updateTimeDisplay();
            });

            this.videoElement.addEventListener('play', () => {
                this.isVideoPlaying = true;
                this.updatePlayButton();
                this.startBreakTimer();
            });

            this.videoElement.addEventListener('pause', () => {
                this.isVideoPlaying = false;
                this.updatePlayButton();
                this.clearBreakTimer();
            });

            this.videoElement.addEventListener('ended', () => {
                this.isVideoPlaying = false;
                this.updatePlayButton();
                this.hideVideo();
                this.clearBreakTimer();
            });

            // Show/hide controls on hover
            const heroSection = document.getElementById('heroSection');
            let controlsTimeout;

            const showControls = () => {
                if (this.isVideoPlaying) {
                    videoControls.classList.add('visible');
                    clearTimeout(controlsTimeout);
                    controlsTimeout = setTimeout(() => {
                        videoControls.classList.remove('visible');
                    }, 3000);
                }
            };

            const hideControls = () => {
                videoControls.classList.remove('visible');
            };

            heroSection.addEventListener('mousemove', showControls);
            heroSection.addEventListener('mouseleave', hideControls);

            // Progress bar click
            const progressBar = document.querySelector('.progress-bar');
            progressBar.addEventListener('click', (e) => {
                const rect = progressBar.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                this.videoElement.currentTime = pos * this.videoElement.duration;
            });
        }
    }

    toggleVideoPlayback() {
        if (!this.videoElement) return;

        if (this.isVideoPlaying) {
            this.videoElement.pause();
            this.hideVideo();
        } else {
            this.showVideo();
            this.videoElement.play().catch(error => {
                console.log('Video play failed:', error);
                this.showNotAvailableToast('Video playback failed. Please check if the video file exists.');
            });
        }
    }

    showVideo() {
        this.videoElement.classList.add('playing');
        document.getElementById('heroContent').classList.add('video-playing');
    }

    hideVideo() {
        this.videoElement.classList.remove('playing');
        document.getElementById('heroContent').classList.remove('video-playing');
        document.getElementById('videoControls').classList.remove('visible');
        this.videoElement.currentTime = 0;
    }

    updatePlayButton() {
        const playIcon = document.getElementById('playIcon');
        const playText = document.getElementById('playText');

        if (this.isVideoPlaying) {
            playIcon.innerHTML = '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>';
            playText.textContent = 'Pause';
        } else {
            playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
            playText.textContent = 'Play';
        }
    }

    updateProgress() {
        if (!this.videoElement) return;

        const progress = (this.videoElement.currentTime / this.videoElement.duration) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }

    updateTimeDisplay() {
        if (!this.videoElement) return;

        const current = this.formatTime(this.videoElement.currentTime);
        const duration = this.formatTime(this.videoElement.duration || 0);
        document.getElementById('timeDisplay').textContent = `${current} / ${duration}`;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    startBreakTimer() {
        // Clear any existing timer
        this.clearBreakTimer();
        
        // Start 5-second timer for break popup
        this.breakTimer = setTimeout(() => {
            this.showBreakPopup();
        }, 5000); // 5 seconds
    }

    clearBreakTimer() {
        if (this.breakTimer) {
            clearTimeout(this.breakTimer);
            this.breakTimer = null;
        }
        if (this.breakCountdown) {
            clearInterval(this.breakCountdown);
            this.breakCountdown = null;
        }
    }

    showBreakPopup() {
        if (!this.isVideoPlaying) return;

        // Pause video
        this.videoElement.pause();
        
        // Show popup
        const breakPopup = document.getElementById('breakPopup');
        breakPopup.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Start 5-second countdown
        let countdownTime = 5;
        const timerElement = document.getElementById('timerCount');
        const continueBtn = document.getElementById('continueBtn');

        timerElement.textContent = countdownTime;
        continueBtn.disabled = true;
        continueBtn.style.opacity = '0.5';

        this.breakCountdown = setInterval(() => {
            countdownTime--;
            timerElement.textContent = countdownTime;

            if (countdownTime <= 0) {
                clearInterval(this.breakCountdown);
                continueBtn.disabled = false;
                continueBtn.style.opacity = '1';
                document.getElementById('breakTimer').innerHTML = 'You can now continue watching';
            }
        }, 1000);
    }

    hideBreakPopup() {
        const breakPopup = document.getElementById('breakPopup');
        breakPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Clear countdown
        this.clearBreakTimer();
        
        // Resume video
        if (this.videoElement && !this.videoElement.ended) {
            this.videoElement.play();
            this.startBreakTimer(); // Restart break timer
        }
    }

    toggleWarmLight() {
        this.isWarmLightActive = !this.isWarmLightActive;
        const warmLightBtn = document.getElementById('warmLightBtn');
        const warmLightOverlay = document.getElementById('warmLightOverlay');

        if (this.isWarmLightActive) {
            warmLightBtn.classList.add('active');
            warmLightOverlay.classList.add('active');
            this.showToast('Warm Light Mode', 'Warm light mode enabled to reduce eye strain', 'success');
        } else {
            warmLightBtn.classList.remove('active');
            warmLightOverlay.classList.remove('active');
            this.showToast('Warm Light Mode', 'Warm light mode disabled', 'info');
        }
    }

    setupScrollHeader() {
        const header = document.getElementById('header');
        let ticking = false;

        const updateHeader = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    loadMovieRows() {
        // Load trending movies
        this.populateMovieRow('trendingCards', window.movieData.trendingNow);
        
        // Load Netflix originals
        this.populateMovieRow('originalsCards', window.movieData.netflixOriginals);
        
        // Load action movies
        this.populateMovieRow('actionCards', window.movieData.actionMovies);
        
        // Load Tamil movies
        this.populateMovieRow('tamilCards', window.movieData.tamilMovies);
        
        // Load documentaries
        this.populateMovieRow('documentariesCards', window.movieData.documentaries);
    }

    populateMovieRow(containerId, movies) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = this.createMovieCard(movie);
            container.appendChild(movieCard);
        });
    }

    createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="movie-card-overlay">
                <h3 class="movie-card-title">${movie.title}</h3>
                <div class="movie-card-buttons">
                    <button class="card-btn play-btn" onclick="netflixApp.showNotAvailableToast('${movie.title}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                    <button class="card-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                    <button class="card-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                        </svg>
                    </button>
                </div>
                <div class="movie-card-meta">
                    <span class="card-rating">${movie.rating}</span>
                    <span>${movie.year}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.openMovieModal(movie);
        });

        return card;
    }

    setupRowNavigation() {
        // Trending row
        this.setupRowScroll('trending', 'trendingCards');
        
        // Originals row
        this.setupRowScroll('originals', 'originalsCards');
        
        // Action row
        this.setupRowScroll('action', 'actionCards');
        
        // Tamil row
        this.setupRowScroll('tamil', 'tamilCards');
        
        // Documentaries row
        this.setupRowScroll('documentaries', 'documentariesCards');
    }

    setupRowScroll(rowName, containerId) {
        const leftBtn = document.getElementById(`${rowName}-left`);
        const rightBtn = document.getElementById(`${rowName}-right`);
        const container = document.getElementById(containerId);

        let scrollPosition = 0;

        leftBtn.addEventListener('click', () => {
            const scrollAmount = container.clientWidth * 0.8;
            scrollPosition = Math.max(0, scrollPosition - scrollAmount);
            container.style.transform = `translateX(-${scrollPosition}px)`;
        });

        rightBtn.addEventListener('click', () => {
            const scrollAmount = container.clientWidth * 0.8;
            const maxScroll = container.scrollWidth - container.clientWidth;
            scrollPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
            container.style.transform = `translateX(-${scrollPosition}px)`;
        });
    }

    openMovieModal(movie) {
        this.currentMovie = movie;
        const modal = document.getElementById('movieModal');
        
        // Update modal content
        document.getElementById('modalTitle').textContent = movie.title;
        document.getElementById('modalDescription').textContent = movie.overview;
        document.getElementById('modalMatch').textContent = `${movie.match}% Match`;
        document.getElementById('modalRating').textContent = movie.rating;
        document.getElementById('modalYear').textContent = movie.year;
        document.getElementById('modalCast').textContent = movie.cast || 'Cast information not available';
        document.getElementById('modalGenres').textContent = movie.genres || 'Genre information not available';
        
        // Update modal hero background
        const modalHero = document.getElementById('modalHero');
        modalHero.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%), url(${movie.backdrop})`;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMovieModal() {
        const modal = document.getElementById('movieModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentMovie = null;
    }

    showNotAvailableToast(movieTitle) {
        this.showToast('Content Not Available', `"${movieTitle}" is not available for streaming at this time.`, 'error');
    }

    showToast(title, message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastTitle = document.getElementById('toastTitle');
        const toastMessage = document.getElementById('toastMessage');
        
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        
        toast.classList.add('show');
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            this.hideToast();
        }, 4000);
    }

    hideToast() {
        const toast = document.getElementById('toast');
        toast.classList.remove('show');
    }

    toggleVolume() {
        this.isMuted = !this.isMuted;
        const volumeIcon = document.getElementById('volumeIcon');
        
        if (this.videoElement) {
            this.videoElement.muted = this.isMuted;
        }
        
        if (this.isMuted) {
            volumeIcon.innerHTML = `
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
            `;
        } else {
            volumeIcon.innerHTML = `
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            `;
        }
    }

    handleSearch(query) {
        if (!query.trim()) return;
        
        // Show loading
        this.showLoading();
        
        // Simulate search delay
        setTimeout(() => {
            // Simple search through all movies
            const allMovies = [
                ...window.movieData.trendingNow,
                ...window.movieData.netflixOriginals,
                ...window.movieData.actionMovies,
                ...window.movieData.tamilMovies,
                ...window.movieData.documentaries
            ];
            
            const results = allMovies.filter(movie => 
                movie.title.toLowerCase().includes(query.toLowerCase()) ||
                movie.overview.toLowerCase().includes(query.toLowerCase())
            );
            
            this.hideLoading();
            
            if (results.length > 0) {
                this.showSearchResults(results, query);
            } else {
                this.showNotAvailableToast(`No results found for "${query}"`);
            }
        }, 1000);
    }

    showSearchResults(results, query) {
        // Clear existing rows
        document.querySelector('.movie-rows-container').innerHTML = `
            <div class="movie-row">
                <h2 class="row-title">Search Results for "${query}"</h2>
                <div class="row-container">
                    <div class="movie-cards-container" id="searchResults"></div>
                </div>
            </div>
        `;
        
        this.populateMovieRow('searchResults', results);
        
        // Scroll to results
        document.querySelector('.movie-rows-container').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    showLoading() {
        document.getElementById('loadingSpinner').classList.add('show');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.remove('show');
    }
}

// Initialize the Netflix app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.netflixApp = new NetflixApp();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal or break popup
    if (e.key === 'Escape') {
        const modal = document.getElementById('movieModal');
        const breakPopup = document.getElementById('breakPopup');
        
        if (modal.classList.contains('active')) {
            window.netflixApp.closeMovieModal();
        } else if (breakPopup.classList.contains('active')) {
            window.netflixApp.hideBreakPopup();
        }
    }
    
    // Space to play/pause video
    if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        window.netflixApp.toggleVideoPlayback();
    }

    // W key to toggle warm light
    if (e.key.toLowerCase() === 'w' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        window.netflixApp.toggleWarmLight();
    }

    // M key to toggle mute
    if (e.key.toLowerCase() === 'm' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        window.netflixApp.toggleVolume();
    }
});