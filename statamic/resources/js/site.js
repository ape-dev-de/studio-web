import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'

Alpine.plugin(intersect)
Alpine.plugin(collapse)
window.Alpine = Alpine
Alpine.start()

// Non-blocking lazy load for altcha (web component self-registers)
requestIdleCallback(() => import('altcha'))

// Sliding nav indicator — lazy load Motion library only when enabled
if (document.querySelector('[data-nav-indicator]')) {
    import('./nav-indicator.js').then(m => m.initNavIndicator())
}
