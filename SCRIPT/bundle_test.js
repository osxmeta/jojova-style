// JOJOVA Bundle Test - Çalışıyorsa console'da ve sayfada görünür
(function() {
    console.log('%c[JOJOVA BUNDLE] JS LOADED OK ✓', 'color: #00ff00; font-size: 16px; font-weight: bold;');

    var testDiv = document.createElement('div');
    testDiv.id = 'jojova-bundle-test';
    testDiv.textContent = 'JOJOVA BUNDLE AKTIF';
    (document.body || document.documentElement).appendChild(testDiv);
})();
