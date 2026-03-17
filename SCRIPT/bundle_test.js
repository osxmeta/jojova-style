// JOJOVA Bundle Test - Siyah popup, tiklayinca kapanir
(function() {
    console.log('%c[JOJOVA BUNDLE] JS LOADED OK', 'color: #00ff00; font-size: 20px; font-weight: bold;');

    var overlay = document.createElement('div');
    overlay.id = 'jojova-bundle-test-overlay';

    var box = document.createElement('div');
    box.id = 'jojova-bundle-test';
    box.innerHTML = 'JOJOVA BUNDLE AKTIF<span>Tikla kapatmak icin</span>';

    overlay.appendChild(box);
    overlay.addEventListener('click', function() { overlay.remove(); });

    (document.body || document.documentElement).appendChild(overlay);
})();
