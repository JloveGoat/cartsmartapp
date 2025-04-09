document.addEventListener('DOMContentLoaded', () => {
    const benefits = document.querySelectorAll('.benefit-item');
    
    const observerOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: '0px'
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Make element visible first
                element.classList.add('visible');
                
                // Wait for visibility transition to complete before bouncing
                setTimeout(() => {
                    element.classList.add('bounce-animation');
                    
                    // Remove bounce class after animation completes
                    setTimeout(() => {
                        element.classList.remove('bounce-animation');
                    }, 500);
                }, element.id === 'benefit-1' ? 200 : 
                   element.id === 'benefit-2' ? 400 :
                   element.id === 'benefit-3' ? 600 : 800);
                
                // Stop observing this element
                observer.unobserve(element);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    benefits.forEach(benefit => {
        observer.observe(benefit);
    });
    
    // Re-observe elements when scrolling back up
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        benefits.forEach(benefit => {
            const rect = benefit.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                benefit.classList.remove('visible');
                benefit.classList.remove('bounce-animation');
                observer.observe(benefit);
            }
        });
    });
});

