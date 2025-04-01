// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const benefit = entry.target;
        const benefitId = benefit.id;
        
        // When element enters viewport
        if (entry.isIntersecting) {
            // Remove any existing animation classes first
            benefit.classList.remove('slide-in-right', 'slide-in-left');
            
            // Force a reflow to reset the animation
            void benefit.offsetWidth;
            
            // Add the appropriate animation class based on the benefit number
            if (benefitId === 'benefit-1' || benefitId === 'benefit-3') {
                benefit.classList.add('slide-in-right');
            } else if (benefitId === 'benefit-2' || benefitId === 'benefit-4') {
                benefit.classList.add('slide-in-left');
            }
        } else {
            // When element leaves viewport, remove animation classes
            benefit.classList.remove('slide-in-right', 'slide-in-left');
        }
    });
}, {
    // Element becomes visible when 30% of it is in view
    threshold: 0.3,
    // Start loading animation slightly before element comes into view
    rootMargin: '50px'
});

// Start observing all benefit elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe each benefit section
    document.querySelectorAll('#app-benefits > div').forEach(benefit => {
        observer.observe(benefit);
    });
}); 