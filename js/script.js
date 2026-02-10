/**
 * Copy text to clipboard and provide visual feedback
 * @param {string} elementId - ID of the element containing the text to copy
 * @param {HTMLElement} btn - The button element that was clicked
 */
function copyToClipboard(elementId, btn) {
    const text = document.getElementById(elementId).innerText;
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalText = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            Copied!
        `;
        
        // Reset after 3 seconds
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalText;
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/**
 * Scroll Reveal Animation
 */
function revealSections() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', revealSections);

// Initial check for elements in view
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
    
    // Smooth scroll for any internal links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
