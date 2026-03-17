<script>
/* Promosyon Butonları Görsel URL Düzeltici */
(function() {
    const ORIGIN = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/';
    const WS_PROXY = 'https://wsrv.nl/?url=';

    // Etiket farklılıklarına dayanıklı eşleme
    const categoryToFile = {
        'casino': 'casino.png',
        'spor': 'spor.png',
        'sport': 'spor.png',
        'sports': 'spor.png',
        'slot': 'slot.png',
        'live casino': 'live-casino.png',
        'livecasino': 'live-casino.png',
        'poker': 'poker.png',
        'blackjack': 'blackjack.png',
        'rulet': 'rulet.png',
        'roulette': 'rulet.png',
        'aviator': 'aviator.png'
    };

    function normalizeText(txt) {
        return (txt || '')
            .toLowerCase()
            .replace(/ç/g, 'c')
            .replace(/ğ/g, 'g')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ş/g, 's')
            .replace(/ü/g, 'u')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function toProxy(url) {
        return WS_PROXY + encodeURIComponent(url);
    }

    function placeholderDataUrl(label) {
        const safe = (label || 'Kategori').replace(/</g, '').replace(/>/g, '');
        const svg =
            '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">' +
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="#333"/><stop offset="100%" stop-color="#555"/></linearGradient></defs>' +
            '<rect width="100%" height="100%" fill="url(#g)"/>' +
            '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFE55C" font-family="Arial" font-size="24">' + safe + '</text>' +
            '</svg>';
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    // Görsel URL'lerini düzelten fonksiyon
    function fixPromoImages() {
        // Tüm kategori tile'larını bul
        const categoryTiles = document.querySelectorAll('.category-tile');
        
        categoryTiles.forEach(tile => {
            const titleElement = tile.querySelector('.category-title');
            const imgElement = tile.querySelector('.category-image img');
            
            if (titleElement && imgElement) {
                const categoryTitle = titleElement.textContent.trim();
                const normalizedTitle = normalizeText(categoryTitle);
                const targetFile = categoryToFile[normalizedTitle];

                if (targetFile) {
                    const correctSrc = ORIGIN + targetFile;
                    const proxiedSrc = toProxy(correctSrc);

                    // Önce direkt URL, hata olursa proxy, tekrar hata olursa placeholder
                    imgElement.dataset.mitoRw = '1';
                    imgElement.alt = categoryTitle;
                    imgElement.src = correctSrc;

                    imgElement.onerror = function() {
                        if (imgElement.dataset.mitoRwStage === 'proxy') {
                            imgElement.src = placeholderDataUrl(categoryTitle);
                            return;
                        }
                        imgElement.dataset.mitoRwStage = 'proxy';
                        imgElement.src = proxiedSrc;
                    };
                }
            }
        });
    }

    // Sayfa yüklendiğinde çalıştır
    function initImageFixer() {
        // DOM hazır olduğunda çalıştır
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fixPromoImages);
        } else {
            fixPromoImages();
        }

        // Dinamik içerik değişiklikleri için MutationObserver
        const observer = new MutationObserver(function(mutations) {
            let shouldUpdate = false;
            
            mutations.forEach(function(mutation) {
                // Yeni eklenen node'ları kontrol et
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            // Eğer kategori tile eklendiyse veya içinde kategori tile varsa
                            if (node.matches && node.matches('.category-tile')) {
                                shouldUpdate = true;
                            } else if (node.querySelector && node.querySelector('.category-tile')) {
                                shouldUpdate = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldUpdate) {
                // Kısa bir delay ile çalıştır (DOM güncellensin diye)
                setTimeout(fixPromoImages, 100);
            }
        });

        // Observer'ı başlat
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Script'i başlat
    initImageFixer();

    // Global fonksiyon olarak da erişilebilir kıl
    window.fixPromoImages = fixPromoImages;
    
    console.log('Promosyon butonları görsel düzeltici yüklendi');
})();
</script>