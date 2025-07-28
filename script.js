document.addEventListener('DOMContentLoaded', function() {
    // Movie slider functionality
    const movieSliders = document.querySelectorAll('.movie-slider');
    
    movieSliders.forEach(slider => {
        const prevBtn = slider.parentElement.querySelector('.prev');
        const nextBtn = slider.parentElement.querySelector('.next');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('i').className = 'fas fa-plus';
                }
            });
            
            // Toggle current answer
            if (isActive) {
                answer.classList.remove('active');
                question.querySelector('i').className = 'fas fa-plus';
            } else {
                answer.classList.add('active');
                question.querySelector('i').className = 'fas fa-times';
            }
        });
    });
    
    // Movie modal functionality
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('movieModal');
    const closeModal = document.querySelector('.close-modal');
    const modalPoster = document.getElementById('modalPoster');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const modalDescription = document.getElementById('modalDescription');
    
    // Mock movie data - in a real app, this would come from an API
    const movies = {
        1: {
            title: 'Stranger Things',
            details: '2016 • TV Show • 4 Seasons • Sci-Fi & Fantasy',
            description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
            image: 'images/movie1-large.jpg'
        },
        2: {
            title: 'The Witcher',
            details: '2019 • TV Show • 2 Seasons • Fantasy',
            description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
            image: 'images/movie2-large.jpg'
        },
        3: {
            title: 'Money Heist',
            details: '2017 • TV Show • 5 Seasons • Crime Drama',
            description: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
            image: 'images/movie3-large.jpg'
        },
        4: {
            title: 'Breaking Bad',
            details: '2008 • TV Show • 5 Seasons • Crime Drama',
            description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
            image: 'images/movie4-large.jpg'
        },
        5: {
            title: 'The Queen\'s Gambit',
            details: '2020 • TV Show • 1 Season • Drama',
            description: 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
            image: 'images/movie5-large.jpg'
        },
        6: {
            title: 'Dark',
            details: '2017 • TV Show • 3 Seasons • Sci-Fi & Fantasy',
            description: 'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.',
            image: 'images/movie6-large.jpg'
        }
    };
    
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.getAttribute('data-movie-id');
            const movie = movies[movieId];
            
            if (movie) {
                modalPoster.src = movie.image;
                modalPoster.alt = movie.title;
                modalTitle.textContent = movie.title;
                modalDetails.textContent = movie.details;
                modalDescription.textContent = movie.description;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Responsive navigation
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Add scroll-up class initially if not at top
    if (window.pageYOffset > 0) {
        header.classList.add('scroll-up');
    }
});