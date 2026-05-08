/**
 * Sliding nav indicator — animated background that glides between nav items on hover.
 * Only imported when theme.nav_sliding_indicator is enabled.
 * Uses Motion (vanilla JS from the Framer Motion team).
 */
import { animate } from 'motion';

export function initNavIndicator() {
    const navContainer = document.querySelector('[data-nav-indicator]');
    if (!navContainer) return;

    const links = navContainer.querySelectorAll('.nav-link');
    if (links.length === 0) return;

    // Create the sliding indicator element
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    indicator.style.cssText = `
        position: absolute;
        background: var(--nav-hover-bg, #F5F5F4);
        border-radius: var(--btn-radius, 0.375rem);
        pointer-events: none;
        opacity: 0;
        z-index: 0;
    `;
    navContainer.style.position = 'relative';
    navContainer.insertBefore(indicator, navContainer.firstChild);

    // Make nav links relative z-index so text stays above indicator
    links.forEach(link => {
        link.style.position = 'relative';
        link.style.zIndex = '1';
    });

    let currentAnimation = null;
    let isVisible = false;

    function moveIndicator(target) {
        const rect = target.getBoundingClientRect();
        const containerRect = navContainer.getBoundingClientRect();

        const x = rect.left - containerRect.left;
        const y = rect.top - containerRect.top;
        const width = rect.width;
        const height = rect.height;

        if (currentAnimation) currentAnimation.stop();

        if (!isVisible) {
            // First hover — appear instantly at position
            indicator.style.left = x + 'px';
            indicator.style.top = y + 'px';
            indicator.style.width = width + 'px';
            indicator.style.height = height + 'px';
            currentAnimation = animate(indicator, { opacity: 1 }, { duration: 0.15 });
            isVisible = true;
        } else {
            // Slide to new position
            currentAnimation = animate(indicator, {
                left: x + 'px',
                top: y + 'px',
                width: width + 'px',
                height: height + 'px',
            }, {
                duration: 0.25,
                easing: [0.25, 0.1, 0.25, 1], // ease-out cubic
            });
        }
    }

    function hideIndicator() {
        if (currentAnimation) currentAnimation.stop();
        currentAnimation = animate(indicator, { opacity: 0 }, { duration: 0.2 });
        isVisible = false;
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => moveIndicator(link));
    });

    navContainer.addEventListener('mouseleave', hideIndicator);
}
