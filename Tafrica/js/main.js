// Trade Africa — main.js
// Plain JavaScript only: no frameworks or trackers. Handles the mobile menu and tabs.

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

  // Close the mobile menu when a link is selected.
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Tabs used by the business guide and export checklist.
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
})();
