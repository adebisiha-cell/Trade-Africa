// Trade Africa — main.js
// Vanilla JS only. No frameworks, no trackers. Mobile nav toggle + tabs.

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Tabs (used on /guide/afcfta-for-your-business and /guide/export-checklist)
  document.querySelectorAll('[data-tabs]').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tab-btn');
    var panels = tabGroup.querySelectorAll('.tab-panel');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab-target');

        buttons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        btn.setAttribute('aria-selected', 'true');
        var panel = tabGroup.querySelector('[data-tab-panel="' + target + '"]');
        if (panel) { panel.classList.add('active'); }
      });

      btn.addEventListener('keydown', function (e) {
        var idx = Array.prototype.indexOf.call(buttons, btn);
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          buttons[(idx + 1) % buttons.length].focus();
          buttons[(idx + 1) % buttons.length].click();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          buttons[(idx - 1 + buttons.length) % buttons.length].focus();
          buttons[(idx - 1 + buttons.length) % buttons.length].click();
        }
      });
    });
  });
  // Restrained scroll-reveal — sections settle into place once on entry.
  // No looping/ambient animation; respects prefers-reduced-motion via CSS.
  var revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
