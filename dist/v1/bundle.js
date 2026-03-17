/* ===== Genel_Style/style2.js ===== */
(function() {
  // SPA Navigasyon - Sayfa yenilemeden yönlendirme
  window.navigateWithoutReload = function(url) {
    // History API ile URL'i değiştir (sayfa yenilemez)
    history.pushState(null, '', url);
    
    // Popstate event'i tetikle (framework'ün router'ı algılar)
    const popStateEvent = new PopStateEvent('popstate', { state: null });
    window.dispatchEvent(popStateEvent);
  };
  
  // Sayfa içeriğini güncelleyen ana fonksiyon
  function updatePageContent() {
    var targetDiv = document.getElementById("banners-wrapper");
    var mainSlider = document.getElementById("main-slider");

    if (!targetDiv) {
      return;
    }
    
    // Mevcut dili al
    const currentLang = getCurrentLanguage();
    const t = translations[currentLang];
    
    // Dil bazlı relative URL'ler - domain'e bağımlı değil
    const langPrefix = currentLang === 'en' ? '/en' : '/tr';
    
    // Main slider'ı gizle ve içeriğini temizle - sadece varsa
    if (mainSlider && mainSlider.id === 'main-slider') {
      mainSlider.style.display = 'none';
      mainSlider.innerHTML = '';
    }
    
    // Eğer div bulunduysa içine metin ekle
    if (targetDiv) {
      
       // Slider Container - En üstte olacak (SPA Navigasyon)
       const sliderContainer = `
           <!-- Desktop Splide Slider -->
           <div class="main-slider-container">
               <div class="splide main-slider" role="group" aria-label="Slider">
                   <div class="splide__track">
                       <ul class="splide__list">
                           <li class="splide__slide">
                               <div class="slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/statics/V93K4oBk524khXpL8GAu0ghaAu4HO81XYpNBFzzS.png" alt="Slide 1" class="slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/jQMoRFXZ4Wf3aEaKqEDlfxihkqzb2c3hAjasYlR8.png" alt="Slide 2" class="slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/crsIJYbRFcbVhKmBAZo4mTpDJiP3omWQzl237hy1.png" alt="Slide 3" class="slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/t14v7zHjn9tx7Ariu8EzH26TdGjsYFqUiTUBcDD0.png" alt="Slide 4" class="slider-image">
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>

           <!-- Mobile Splide Slider -->
           <div class="mobile-slider-container">
               <div class="splide mobile-slider" role="group" aria-label="Mobile Slider">
                   <div class="splide__track">
                       <ul class="splide__list">
                           <li class="splide__slide">
                               <div class="mobile-slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/statics/2mvsm4GyVsgXQAngQLOvj0Ot8iN3bY7xIC2BmZ04.jpg" alt="Mobile Slide 1" class="mobile-slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="mobile-slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/4rBPygBwpsIUAHRz2vBpM6THyfC8MgjmyEbuzQTI.png" alt="Mobile Slide 2" class="mobile-slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="mobile-slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/Mv8x7iVqQ3aScDlxsIbKXAroPF8gFpuQe2E29PqT.png" alt="Mobile Slide 3" class="mobile-slider-image">
                               </div>
                           </li>
                           <li class="splide__slide">
                               <div class="mobile-slider-image-container" onclick="navigateWithoutReload('${langPrefix}/promotions')" style="cursor: pointer;">
                                   <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/Bapj61C3FNBMLXIxih5rTgNqmRHt2lc6NyiCS7Ve.png" alt="Mobile Slide 4" class="mobile-slider-image">
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       `;

    // Payment Container - SPA Yönlendirme (Sayfa yenilemeden) - PASİF
          /*
          const sliderBottom = `
              <div class="slider-bottom-container">
                  <div class="slider-bottom-grid">
                      <!-- Üst Sol: Slot Oyunları -->
                      <div class="slider-bottom-item" onclick="navigateWithoutReload('${langPrefix}/casino/group/lobby')">
                          <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/EIpBfslRNFy6SBmrupvVsBFX2gdFHFaVBC8T3fAR.png" alt="Slot Oyunları" class="slider-bottom-image">
                      </div>
                      <!-- Üst Sağ: Canlı Casino -->
                      <div class="slider-bottom-item" onclick="navigateWithoutReload('${langPrefix}/casino/group/live-lobby')">
                          <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/A5mm1VoGRciOn75iKVCg4DI4aivDPabFKkHwA0XQ.png" alt="Canlı Casino" class="slider-bottom-image">
                      </div>
                      <!-- Alt Sol: Spor Oyunları -->
                      <div class="slider-bottom-item" onclick="navigateWithoutReload('${langPrefix}/sportsbook')">
                          <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/AoqGK76s6ZWSyg0H70D3meqrXIZdwYcNtSAmKsom.png" alt="Spor Oyunları" class="slider-bottom-image">
                      </div>
                      <!-- Alt Sağ: JojoVIP Club -->
                      <div class="slider-bottom-item" onclick="navigateWithoutReload('${langPrefix}/vip')">
                          <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/5DPopoH61Dj5fqZ5lmMM0gWZsXekd3EopM4KP6QO.png" alt="JojoVIP Club" class="slider-bottom-image">
                      </div>
                  </div>
              </div>
          `;
          */
          const sliderBottom = ''; // Pasif - kaldırıldı



       // Sport Banner Container - Geçici olarak pasife alındı (ilerde tekrar eklenebilir)
       /*
       const sportBannerContainer = `
           <div class="banner-container" style="">
               <div class="banner-inner">
                   <div class="banner-content">
                       <div class="banner-left">
                           <div class="banner-text-wrapper">
                               <div class="banner-text">
                                   <h2 class="banner-title">${t.sportBannerTitle}</h2>
                                   <p class="banner-subtitle">${t.sportBannerSubtitle}</p>
                               </div>
                           </div>
                           
                           <div class="sports-buttons" onclick="window.open('https://jojovatv.com/', '_blank')">
                               <button class="sports-button">
                                   <img src="https://cdn.lexcore.space/playico/assets/football-2.png" alt="Futbol" class="sports-icon">
                                   <span id="football-text">${t.football}</span>
                               </button>
                               <span class="separator">|</span>
                               <button class="sports-button">
                                   <img src="https://cdn.lexcore.space/playico/assets/basketball-2.png" alt="Basketbol" class="sports-icon">
                                   <span id="basketball-text">${t.basketball}</span>
                               </button>
                               <span class="separator">|</span>
                               <button class="sports-button">
                                   <img src="https://cdn.lexcore.space/playico/assets/tennis-2.png" alt="Tenis" class="sports-icon">
                                   <span id="tennis-text">${t.tennis}</span>
                               </button>
                           </div>
                       </div>
                       <div class="banner-right">
                           <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/MZBbAtrG9ueqTvmzjVo25cHaHn16oDVO5kpKB49d.png" alt="Players" class="players-image">
                       </div>
                   </div>
               </div>
           </div>
       `;
       */




      // Big Wins wrapper'ı ve VIP bölümünü gizle, Jackpot container'ı en alta al
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        #jackpots-container { 
          position: relative !important;
          margin-top: 20px !important;
        }
        #big-wins-wrapper {
          display: block !important; 
          opacity: 1 !important;
          visibility: visible !important;
          position: relative !important;
          left: auto !important;
          pointer-events: auto !important;
          z-index: auto !important;
        }
        .vip, .vip__title, .vip__text, .vip__btn {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          position: absolute !important;
          left: -9999px !important;
        }
        div.row:has(.vip) {
          display: none !important;
        }
        /* Jackpot Container Konumlandırma */
        #jackpots-container {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          margin: 20px 0 !important;
          padding: 0 !important;
        }
        
        @media (max-width: 768px) {
          #jackpots-container {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .popular-sports-container {
            order: 5 !important; /* Mobilde normal sırada */
          }
          .container {
            display: flex !important;
            flex-direction: column !important;
          }
        }
        
        /* ——— JOJOVA JACKPOT TEMA - DÜZENLİ RENKLER ——— */
        /* Jackpot Görsel Değiştirme */
        /* Jackpot logoları doğrudan hedeflenen elementlerde değiştirildi */
        .jackpot__logo.try {
          content: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/IgRDqbUdcdEu8Y68oWxmR7cygTrGSAjac1QIu0MP.png') !important;
        }
        
        .jackpot__logo.usd {
          content: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/mJZfyoxEkJNxSqAw4sMDHyRar6JUXOZ6HOAHqCqO.png') !important;
        }
        
        .jackpot__logo.btc {
          content: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/Hn14MBJa2UOMdOiiIkc4MushJW0mRZPgS48pwrjL.png') !important;
        }
        
        /* Ana Jackpot Container - Şeffaf Arka Plan + Sarı Border */
        .jackpot {
          background: transparent !important;
          border: 2px solid #FFE55C !important;
          box-shadow: none !important;
          border-radius: 12px !important;
        }
        
        .jackpot:after {
          display: none !important;
        }
        
        .jackpot:before {
          display: none !important;
        }
        
        /* Tüm Jackpot Değerleri - Siyah Arka Plan + Beyaz Yazı + Sarı Border */
        .jackpot__value--grand,
        .jackpot__value--grand-gold,
        .jackpot__value--grand-7,
        .jackpot__value--major,
        .jackpot__value--major-gold,
        .jackpot__value--major-7,
        .jackpot__value--major-zebra,
        .jackpot__value--minor,
        .jackpot__value--minor-gold,
        .jackpot__value--minor-7,
        .jackpot__value--minor-zebra,
        .jackpot__value--mini,
        .jackpot__value--mini-gold,
        .jackpot__value--mini-7,
        .jackpot__value--mini-zebra,
        .jackpot__value--zebra {
          background: #000000 !important;
          border: 0.2px solid #FFE55C !important;
          box-shadow: none !important;
        }
        
        .jackpot__value--grand span,
        .jackpot__value--grand-gold span,
        .jackpot__value--grand-7 span,
        .jackpot__value--major span,
        .jackpot__value--major-gold span,
        .jackpot__value--major-7 span,
        .jackpot__value--major-zebra span,
        .jackpot__value--minor span,
        .jackpot__value--minor-gold span,
        .jackpot__value--minor-7 span,
        .jackpot__value--minor-zebra span,
        .jackpot__value--mini span,
        .jackpot__value--mini-gold span,
        .jackpot__value--mini-7 span,
        .jackpot__value--mini-zebra span,
        .jackpot__value--zebra span {
          background: #000000 !important;
          color: #ffffff !important;
        }
        
        /* Tüm before elementlerini kaldır (glow efektleri) */
        .jackpot__value--grand:before,
        .jackpot__value--grand-gold:before,
        .jackpot__value--grand-7:before,
        .jackpot__value--major:before,
        .jackpot__value--major-gold:before,
        .jackpot__value--major-7:before,
        .jackpot__value--major-zebra:before,
        .jackpot__value--minor:before,
        .jackpot__value--minor-gold:before,
        .jackpot__value--minor-7:before,
        .jackpot__value--minor-zebra:before,
        .jackpot__value--mini:before,
        .jackpot__value--mini-gold:before,
        .jackpot__value--mini-7:before,
        .jackpot__value--mini-zebra:before,
        .jackpot__value--zebra:before {
          display: none !important;
          box-shadow: none !important;
        }
        
        /* Tüm Nokta Efektleri - Düzeltilmiş Iconlar */
        .jackpot__value span:after,
        .jackpot__value span:before {
          background-color: #FFE55C !important;
          box-shadow: none !important;
          content: "●" !important;
          font-size: 8px !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
        }
        
        /* Bozuk iconları düzelt */
        .jackpot__value--grand span:after,
        .jackpot__value--grand span:before,
        .jackpot__value--grand-gold span:after,
        .jackpot__value--grand-gold span:before {
          content: "♦" !important;
          background: none !important;
          color: #FFE55C !important;
          font-size: 12px !important;
          width: auto !important;
          height: auto !important;
        }
        
        .jackpot__value--major span:after,
        .jackpot__value--major span:before,
        .jackpot__value--major-7 span:after,
        .jackpot__value--major-7 span:before {
          content: "7" !important;
          background: none !important;
          color: #FFE55C !important;
          font-size: 12px !important;
          width: auto !important;
          height: auto !important;
        }
        
        .jackpot__value--zebra span:after,
        .jackpot__value--zebra span:before {
          content: "●" !important;
          background: #FFE55C !important;
          color: #000 !important;
          font-size: 8px !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
        }
        
        /* Jackpot Logo Wrapper - Çerçevesiz ve Glow'suz */
        .jackpot__logo-wrapper,
        .jackpot__logo-wrapper--try,
        .jackpot__logo-wrapper--usd,
        .jackpot__logo-wrapper--btc {
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        
        /* Jackpot Başlık ve Metin */
        .jackpot__title {
          color: #FFE55C !important;
          text-shadow: none !important;
        }
        
        .jackpot__text {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        
        .jackpot__text b {
          color: #FFE55C !important;
        }
        
        /* Jackpot Button */
        .jackpot__btn {
          background: linear-gradient(135deg, #FFE55C 0%, #FFD24D 100%) !important;
          color: #000 !important;
          font-weight: 700 !important;
          box-shadow: none !important;
          transition: all 0.3s ease !important;
        }
        
        .jackpot__btn:hover {
          background: linear-gradient(135deg, #FFD24D 0%, #FFC940 100%) !important;
          color: #000 !important;
          box-shadow: none !important;
          transform: translateY(-2px) !important;
        }
        
        /* Animasyon Kaldırıldı - Glow Yok */
        .jackpot__value--grand,
        .jackpot__value--grand-gold,
        .jackpot__value--zebra {
          animation: none !important;
        }
        
        /* Mobil Uyumluluk */
        @media (max-width: 768px) {
          .jackpot {
            margin: 8px 4px !important;
            padding: 0 6px !important;
          }
          
          .jackpot__btn {
            width: 100px !important;
            height: 36px !important;
            font-size: 11px !important;
          }
          
          .jackpot__logo {
            max-width: 80px !important;
          }
        }
      `;
      document.head.appendChild(styleElement);
      
      // Jackpot container'ı pb-component-wrapper altına al
      const jackpotsContainer = document.getElementById('jackpots-container');
      if (jackpotsContainer) {
        jackpotsContainer.style.cssText = 'background: transparent !important; border: none !important; margin: 20px 0 !important; padding: 0 !important;';
      }
      
      // Big Wins wrapper'ını göster
      const bigWinsWrapper = document.getElementById('big-wins-wrapper');
      if (bigWinsWrapper) {
        bigWinsWrapper.style.cssText = 'display: block !important; opacity: 1 !important; visibility: visible !important; position: relative !important; left: auto !important; pointer-events: auto !important; z-index: auto !important;';
      }
      
      // VIP elementlerini gizle
      const vipElements = document.querySelectorAll('.vip, .vip__title, .vip__text, .vip__btn');
      vipElements.forEach(element => {
        element.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; position: absolute !important; left: -9999px !important;';
      });
      
      // VIP içeren row'ları gizle
      const vipRows = document.querySelectorAll('div.row');
      vipRows.forEach(row => {
        if (row.querySelector('.vip')) {
          row.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; position: absolute !important; left: -9999px !important;';
        }
      });
      
      // FAVORİ YÖNTEMLER bölümünü gizle
      document.querySelectorAll('.section__title--head').forEach(function(h1) {
        if (h1.textContent.trim().indexOf('FAVOR') !== -1) {
          var headingRow = h1.closest('.row');
          if (headingRow) {
            headingRow.style.cssText = 'display: none !important;';
            var nextRow = headingRow.nextElementSibling;
            if (nextRow && nextRow.classList.contains('row') && !nextRow.querySelector('.section__title')) {
              nextRow.style.cssText = 'display: none !important;';
            }
          }
        }
      });

      // Last Bets Wrapper'ı gizle (Web & Mobil)
      const lastBetsWrapper = document.getElementById('last-bets-wrapper');
      if (lastBetsWrapper) {
        lastBetsWrapper.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important;';
      }
      
      const futbolSekmesiContainer = '';

      // İçeriği targetDiv'e ekle - slider en üstte (futbol sekmesi aşağıya taşınacak)
      targetDiv.innerHTML = '<div class="container">' + sliderContainer + '</div>';
      
      // Futbol banner devre disi
      
      // Jackpot container'ı pb-component-wrapper altına taşı
      setTimeout(() => {
        const jackpotContainer = document.getElementById('jackpots-container');
        const pbWrapper = document.querySelector('.pb-component-wrapper');
        const containerDiv = document.querySelector('.container');
        
        if (jackpotContainer && pbWrapper && containerDiv) {
          // Önce jackpot'u container'dan çıkar
          if (jackpotContainer.parentNode) {
            jackpotContainer.parentNode.removeChild(jackpotContainer);
          }
          // Sonra pb-component-wrapper'ın altına ekle
          pbWrapper.insertAdjacentElement('afterend', jackpotContainer);
        }
      }, 300);
      


      // İçerik eklendikten sonra DOM'dan elementleri al
      const topGamesWrapper = document.getElementById('top-games-wrapper');
      const bannerswrapper = document.getElementById('banners-wrapper');

      // Elementler varsa topGamesWrapper'ı banners-wrapper'dan sonra ekle
      if (topGamesWrapper && bannerswrapper && bannerswrapper.parentNode) {
        bannerswrapper.parentNode.insertBefore(topGamesWrapper, bannerswrapper.nextSibling);
      } else {
      }

      // Futbol Sekmesi CSS devre disi

      // Slider'ları başlat - Timeout ile bekle DOM yüklensin
      setTimeout(() => {
        initializeSliders();
      }, 800);
    } else {
    }
  }

  // Slider initialization fonksiyonu (Splide.js)
  function initializeSliders() {

    // Splide CSS yükle
    if (!document.querySelector('link[href*="splide"]')) {
      const splideCSS = document.createElement('link');
      splideCSS.rel = 'stylesheet';
      splideCSS.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/css/splide.min.css';
      document.head.appendChild(splideCSS);

      setTimeout(() => {
        if (!document.querySelector('#custom-slider-css')) {
          const customCSS = document.createElement('link');
          customCSS.id = 'custom-slider-css';
          customCSS.rel = 'stylesheet';
          customCSS.href = './Genel_Style/swiper-slider.css';
          document.head.appendChild(customCSS);
        }
      }, 100);
    }

    function createSliders() {
      if (typeof Splide === 'undefined') return;

      // Desktop Slider
      var desktopEl = document.querySelector('.main-slider');
      if (desktopEl && !desktopEl._splideMounted) {
        desktopEl._splideMounted = true;
        new Splide('.main-slider', {
          type: 'loop',
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          speed: 500,
          pagination: true,
          arrows: false,
          drag: true,
          perPage: 1,
          gap: 0,
          rewind: false,
          lazyLoad: false,
        }).mount();
      }

      // Mobile Slider
      var mobileEl = document.querySelector('.mobile-slider');
      if (mobileEl && !mobileEl._splideMounted) {
        mobileEl._splideMounted = true;
        new Splide('.mobile-slider', {
          type: 'loop',
          autoplay: true,
          interval: 5000,
          speed: 400,
          pagination: true,
          arrows: false,
          drag: true,
          perPage: 1,
          gap: 0,
          rewind: false,
          lazyLoad: false,
        }).mount();
      }
    }

    // Splide JS yükle veya varsa direkt kullan
    if (typeof Splide !== 'undefined') {
      createSliders();
    } else {
      if (!document.querySelector('script[src*="splide"]')) {
        var splideJS = document.createElement('script');
        splideJS.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js';
        splideJS.onload = function() {
          setTimeout(createSliders, 50);
        };
        document.head.appendChild(splideJS);
      } else {
        var attempts = 0;
        var checkSplide = setInterval(function() {
          attempts++;
          if (typeof Splide !== 'undefined') {
            clearInterval(checkSplide);
            createSliders();
          } else if (attempts > 50) {
            clearInterval(checkSplide);
          }
        }, 100);
      }
    }
  }

  // Dil algılama fonksiyonu
  function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.includes('/en/') || path.startsWith('/en')) {
      return 'en';
    }
    return 'tr'; // Varsayılan Türkçe
  }

  // Çoklu dil metinleri
  const translations = {
    tr: {
      welcomeTitle1: "Türkiye'nin İlk Kripto",
      welcomeTitle2: "Casinosu!",
      welcomeTitleMobile: "Türkiye'nin İlk Kripto Casinosu!",
      joinButton: "Jojova'ya Katıl",
      casinoTitle: "Casino",
      sportsTitle: "Sports",
      paymentTitle: "Güvenli Kripto İşlemleri",
      paymentSubtitle: "10'dan fazla para birimi ile bahis yap!",
      paymentButton: "Kripto Satın Al",


      sportsTitle2: "Popüler Sporlar",
      sportsAll: "Tümü",
      football: "Futbol",
      basketball: "Basketbol",
      volleyball: "Voleybol",
      tennis: "Tenis",
      esports: "E-spor",
      sportBannerTitle: "Tüm sporları izle",
      sportBannerSubtitle: "ve canlı bahis yap."
    },
    en: {
      welcomeTitle1: "Crypto Casino and",
      welcomeTitle2: "Crypto Trade",
      welcomeTitleMobile: "Crypto Casino and Crypto Trade",
      joinButton: "Join Jojova",
      casinoTitle: "Casino",
      sportsTitle: "Sports",
      paymentTitle: "Secure Crypto Transactions",
      paymentSubtitle: "Bet with more than 10 currencies!",
      paymentButton: "Buy Crypto",


      sportsTitle2: "Popular Sports",
      sportsAll: "All",
      football: "Football",
      basketball: "Basketball",
      volleyball: "Volleyball",
      tennis: "Tennis",
      esports: "E-sports",
      sportBannerTitle: "Watch all sports",
      sportBannerSubtitle: "and place live bets."
    }
  };

  // Ana sayfada olup olmadığımızı kontrol eden fonksiyon - daha kapsamlı
  function isHomePage() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = window.location.search;
    
    // Ana sayfa kontrolü - hem TR hem EN için
    return path === '/' || 
           path === '/tr/' || 
           path === '/tr' ||
           path === '/en/' ||
           path === '/en' ||
           path === '/index.html' || 
           path === '/index' ||
           path === '' ||
           path.endsWith('/') ||
           path.match(/^\/(tr|en)?\/?$/);
  }

  // Mobil cihaz kontrolü
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
  }

  // Sayfa cache'den gelip gelmediğini kontrol et
  function isPageFromCache() {
    return window.performance && 
           window.performance.navigation && 
           (window.performance.navigation.type === 2 || // TYPE_BACK_FORWARD
            window.performance.navigation.type === 1);  // TYPE_RELOAD
  }

  // Süper agresif güncelleme - hiçbir durumda kaçırma
  function superForceUpdate() {
    if (isHomePage()) {
      // Anında güncelle
      updatePageContent();
      
      // Tek güncelleme ile yeterli
      setTimeout(() => {
        if (isHomePage()) {
          const welcomeContainer = document.getElementById("welcome-id-new");
          if (!welcomeContainer) {
            updatePageContent();
          }
        }
      }, 100);
    }
  }

  // Optimize edilmiş kontrol sistemi
  function startContinuousCheck() {
    // Ana kontrol döngüsü - daha az agresif
    const mainIntervalId = setInterval(function() {
      if (isHomePage()) {
        const targetDiv = document.getElementById("banners-wrapper");
        const sliderContainer = document.querySelector('.main-slider-container');
        
        // Eğer banners-wrapper var ama slider-container yoksa güncelle
        if (targetDiv && !sliderContainer) {
          updatePageContent();
        }
        
        // Main slider görünürse tekrar gizle
        const mainSlider = document.getElementById("main-slider");
        if (mainSlider && mainSlider.style.display !== 'none') {
          mainSlider.style.display = 'none';
          mainSlider.innerHTML = '';
        }
        
        // Jackpot container'ın konumunu kontrol et ve düzelt
        const jackpotContainer = document.getElementById('jackpots-container');
        const pbWrapper = document.querySelector('.pb-component-wrapper');
        if (jackpotContainer && pbWrapper && jackpotContainer.previousElementSibling !== pbWrapper) {
          if (jackpotContainer.parentNode) {
            jackpotContainer.parentNode.removeChild(jackpotContainer);
          }
          pbWrapper.insertAdjacentElement('afterend', jackpotContainer);
        }
        
        // Altta çıkan mini-slider'ı kaldır
        const miniSwipers = document.querySelectorAll('.swiper-initialized.swiper-horizontal.swiper-backface-hidden');
        miniSwipers.forEach(swiper => {
          // İçeriğinde jackpot görselleri var mı kontrol et
          const jackpotImages = swiper.querySelectorAll('img[src*="mini-sliders/mJZfyoxEkJNxSqAw4sMDHyRar6JUXOZ6HOAHqCqO.png"], img[src*="mini-sliders/IgRDqbUdcdEu8Y68oWxmR7cygTrGSAjac1QIu0MP.png"], img[src*="mini-sliders/Hn14MBJa2UOMdOiiIkc4MushJW0mRZPgS48pwrjL.png"]');
          if (jackpotImages.length > 0) {
            swiper.style.display = 'none';
            swiper.style.visibility = 'hidden';
            swiper.style.height = '0';
            swiper.style.overflow = 'hidden';
          }
        });
        
        // VIP elementlerini ve Big Wins wrapper'ını sürekli kontrol et ve gizle
        const vipElements = document.querySelectorAll('.vip, .vip__title, .vip__text, .vip__btn');
        vipElements.forEach(element => {
          if (element.style.display !== 'none') {
            element.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; position: absolute !important; left: -9999px !important;';
          }
        });
        
        // Big Wins wrapper'ını sürekli göster
        const bigWinsWrapper = document.getElementById('big-wins-wrapper');
        if (bigWinsWrapper) {
          bigWinsWrapper.style.cssText = 'display: block !important; opacity: 1 !important; visibility: visible !important; position: relative !important; left: auto !important; pointer-events: auto !important; z-index: auto !important;';
        }
        
        const vipRows = document.querySelectorAll('div.row');
        vipRows.forEach(row => {
          if (row.querySelector('.vip') && row.style.display !== 'none') {
            row.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; position: absolute !important; left: -9999px !important;';
          }
        });
        
        // Last Bets Wrapper'ı gizle (Web & Mobil)
        const lastBetsWrapper = document.getElementById('last-bets-wrapper');
        if (lastBetsWrapper) {
          lastBetsWrapper.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important;';
        }
      }
    }, 3000); // Her 3 saniyede kontrol et
    
    // İlk yükleme için hızlı kontrol - sadece 2 saniye
    let quickCheckCount = 0;
    const quickIntervalId = setInterval(function() {
      quickCheckCount++;
      
      if (quickCheckCount > 10) { // 2 saniye sonra durdur
        clearInterval(quickIntervalId);
        return;
      }
      
      if (isHomePage()) {
        const targetDiv = document.getElementById("banners-wrapper");
        const sliderContainer = document.querySelector('.main-slider-container');
        
        if (targetDiv && !sliderContainer) {
          updatePageContent();
        }
      }
    }, 200); // Her 200ms kontrol et
  }

  // Jojova Sohbet butonunu yükle
  function loadJojovaSohbetResources() {
    // Sadece JS yükle (CSS kaldırıldı, stiller JS içinde)
    if (!document.querySelector('script[src*="jojova_sohbet.js"]')) {
      const chatJS = document.createElement('script');
      chatJS.src = './header_button_ekleme/jojova_sohbet.js';
      document.head.appendChild(chatJS);
    }
  }

  // Safari için History API Override - Her URL değişikliğini yakala
  function overrideHistoryForSafari() {
    const pushState = history.pushState;
    const replaceState = history.replaceState;
    
    history.pushState = function() {
      pushState.apply(history, arguments);
      setTimeout(() => {
        superForceUpdate();
      }, 50);
    };
    
    history.replaceState = function() {
      replaceState.apply(history, arguments);
      setTimeout(() => {
        superForceUpdate();
      }, 50);
    };
  }

  // Sayfa yüklendiğinde ve URL değiştiğinde içeriği güncelle
  function initializePageUpdater() {
    // Hemen çalıştır
    superForceUpdate();

    // Safari için History API Override
    overrideHistoryForSafari();

    // Sürekli kontrol başlat
    startContinuousCheck();
    
    // Jojova Sohbet butonunu yükle
    loadJojovaSohbetResources();

    // URL değişikliklerini izle - Safari için daha agresif
    let lastUrl = location.href; 
    let lastCheck = Date.now();
    
    // Safari için URL değişikliğini sürekli kontrol et
    setInterval(function() {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        superForceUpdate();
      }
    }, 100); // Her 100ms kontrol et
    
    // MutationObserver ile DOM değişikliklerini izle - Safari için daha hassas
    let mutationTimeout;
    const observer = new MutationObserver(function(mutations) {
      // URL değişti mi kontrol et
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        superForceUpdate();
        return;
      }
      
      // Çok fazla mutation varsa throttle et
      if (mutationTimeout) return;
      
      mutationTimeout = setTimeout(() => {
        mutationTimeout = null;
        
        if (isHomePage()) {
          const sliderContainer = document.querySelector('.main-slider-container');
          if (!sliderContainer) {
            updatePageContent();
          }
        }
      }, 300); // Safari için daha kısa gecikme
    });
    
    // Body'yi izle - Safari için subtree: true
    observer.observe(document.body, {
      childList: true,
      subtree: true // Safari için alt elemanları da izle
    });
    
    // Safari için tüm önemli event'leri dinle
    const allEvents = [
      'popstate', 'hashchange', 'pageshow', 'pagehide', 
      'beforeunload', 'visibilitychange'
    ];
    
    allEvents.forEach(function(eventName) {
      window.addEventListener(eventName, function(e) {
        // Safari için hemen güncelle
        if (isHomePage()) {
          superForceUpdate();
        }
      }, true);
    });

    // Document event'leri
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        superForceUpdate();
      }
    });

    // Safari için click event'lerini izle - Link tıklamalarını yakala
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (link && link.href && !link.target) {
        // Internal link'se kontrol et
        const url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin) {
          setTimeout(() => {
            superForceUpdate();
          }, 100);
        }
      }
    }, true);

    // Mobil için ek event'ler
    if (isMobile()) {
      const mobileEvents = [
        'orientationchange',
        'touchstart',
        'touchend'
      ];
      
      mobileEvents.forEach(function(eventName) {
        document.addEventListener(eventName, function() {
          if (isHomePage()) {
            const sliderContainer = document.querySelector('.main-slider-container');
            if (!sliderContainer) {
              setTimeout(updatePageContent, 200);
            }
          }
        }, { passive: true });
      });
    }

    // Safari için daha sık backup kontrol
    setInterval(function() {
      if (isHomePage()) {
        const sliderContainer = document.querySelector('.main-slider-container');
        if (!sliderContainer) {
          updatePageContent();
        }
      }
    }, 2000); // 2 saniyede bir kontrol et
  }

  // DOM yüklendikten sonra veya hemen çalıştır
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePageUpdater);
  } else {
    initializePageUpdater();
  }

  // Her olası load durumu için kontrol
  window.addEventListener('load', function() {
    superForceUpdate();
  });

  // Gereksiz çoklu call'ları kaldır - sadece bir kere yeterli

  // Toastify close button fix - drag yutmasını engelle ve tıklamada kapat
  function initToastifyCloseFix() {
    function bindButtons(root) {
      var ctx = root && root.querySelectorAll ? root : document;
      var buttons = ctx.querySelectorAll('.Toastify__close-button');
      buttons.forEach(function(btn){
        if (btn.dataset.jojovaToastifyFix === '1') return;
        btn.dataset.jojovaToastifyFix = '1';
        // Drag/sürükleme olaylarını üst seviyeye çıkmadan durdur
        ['pointerdown','mousedown','touchstart'].forEach(function(ev){
          btn.addEventListener(ev, function(e){
            // OneSignal elementlerini koru
            if (e.target.closest && (e.target.closest('[id*="onesignal"]') || e.target.closest('[class*="onesignal"]'))) {
              return;
            }
            e.stopPropagation();
            e.stopImmediatePropagation();
          }, true);
        });
        // Click'te güvenli kapat (Toastify handler çalışsa da sorun olmaz)
        btn.addEventListener('click', function(e){
          e.stopPropagation();
          var toast = btn.closest('.Toastify__toast');
          if (toast) {
            toast.style.transition = 'opacity 160ms ease, transform 160ms ease';
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-8px)';
            setTimeout(function(){
              if (toast && toast.parentNode) {
                toast.parentNode.removeChild(toast);
              }
            }, 170);
          }
        }, true);
      });
    }
    // İlk bağlama
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function(){ bindButtons(document); });
    } else {
      bindButtons(document);
    }
    // Yeni toastlar için gözlemci
    var obs = new MutationObserver(function(mutations){
      mutations.forEach(function(m){
        m.addedNodes && m.addedNodes.forEach(function(node){
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('Toastify__toast')) {
            bindButtons(node);
          } else if (node.querySelectorAll) {
            var any = node.querySelectorAll('.Toastify__toast');
            if (any && any.length) bindButtons(node);
          }
        });
      });
    });
    try { obs.observe(document.body, { childList: true, subtree: true }); } catch(_){}
  }
  // Anında başlat
  initToastifyCloseFix();

  // Sidebar collapsed (ok) butonu tek tık düzeltmesi
  function initSidebarCollapsedFix() {
    function findCollapseContainer(btn) {
      try {
        var id = btn.getAttribute('data-bs-target') || btn.getAttribute('aria-controls');
        if (id) {
          var sel = id.charAt(0) === '#' ? id : ('#' + id);
          var target = document.querySelector(sel);
          if (target) return target;
        }
        var wrapper = btn.closest('.menu-item-wrapper') || btn.closest('li') || btn.parentElement;
        if (wrapper) {
          var collapse = wrapper.querySelector('.collapse');
          if (collapse) return collapse;
        }
        // Yakın kardeşlerde ara
        var n = btn.nextElementSibling;
        for (var i = 0; i < 4 && n; i++, n = n.nextElementSibling) {
          if (n.classList && n.classList.contains('collapse')) return n;
        }
        // Parent kardeşlerinde ara
        var p = btn.parentElement ? btn.parentElement.nextElementSibling : null;
        for (var j = 0; j < 4 && p; j++, p = p.nextElementSibling) {
          if (p.classList && p.classList.contains('collapse')) return p;
        }
      } catch(_){}
      return null;
    }

    // Drag/hover etkilerini kes ve tek tık garantile
    document.addEventListener('pointerdown', function(e){
      var btn = e.target.closest && e.target.closest('.sidebar__collapsed');
      if (!btn) return;
      // OneSignal elementlerini koru
      if (e.target.closest && (e.target.closest('[id*="onesignal"]') || e.target.closest('[class*="onesignal"]'))) {
        return;
      }
      e.stopPropagation();
      e.stopImmediatePropagation();
    }, true);

    document.addEventListener('click', function(e){
      var btn = e.target.closest && e.target.closest('.sidebar__collapsed');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      var collapse = findCollapseContainer(btn);
      if (!collapse) return;
      var isOpen = collapse.classList.contains('show') || collapse.style.display === 'block';
      if (isOpen) {
        collapse.classList.remove('show');
        collapse.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        collapse.classList.add('show');
        collapse.style.display = 'block';
        btn.setAttribute('aria-expanded', 'true');
      }
    }, true);
  }
  initSidebarCollapsedFix();

  // Auth modal CSS kaldırıldı (temizlik)
  try {
    var oldAuthLink = document.querySelector('link[href$="/Genel_Style/auth_modal.css"], link[href$="Genel_Style/auth_modal.css"]');
    if (oldAuthLink && oldAuthLink.parentNode) {
      oldAuthLink.parentNode.removeChild(oldAuthLink);
    }
  } catch(_){}

  // Minimal Sidebar Effects CSS'i enjekte et (glow kapalı, sade hover)
  function injectMinimalSidebarEffects() {
    if (document.getElementById('sidebar-minimal-effects')) return;
    var css = `
/* ——— Minimal Sidebar Effects: Glow Kaldırma + Sade Hover ——— */
/* Tüm ana elemanlarda glow/animasyonları kapat */
.sidebar .sidebar__nav a,
.sidebar .sidebar__nav button,
.sidebar .sidebar__link,
.sidebar .sidebar__link-small,
.sidebar .sidebar__nav-small a,
.sidebar .sidebar__nav-small button,
.sidebar .crypto-link,
.sidebar .crypto-link-small,
.sidebar .sidebar__lang-btn,
.sidebar .sidebar__lang-small-btn,
.sidebar .menu-item-wrapper .sidebar__collapsed {
  box-shadow: none !important;
  text-shadow: none !important;
  filter: none !important;
  animation: none !important;
}

/* Basit ve kaliteli hover: hafif arkaplan + ince border */
.sidebar .sidebar__nav a:hover,
.sidebar .sidebar__nav button:hover,
.sidebar .sidebar__link:hover,
.sidebar .sidebar__link-small:hover,
.sidebar .sidebar__nav-small a:hover,
.sidebar .sidebar__nav-small button:hover,
.sidebar .crypto-link:hover,
.sidebar .crypto-link-small:hover,
.sidebar .sidebar__lang-btn:hover,
.sidebar .sidebar__lang-small-btn:hover,
.sidebar .menu-item-wrapper .sidebar__collapsed:hover {
  transform: none !important;
  background: rgba(255, 255, 255, 0.06) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  box-shadow: none !important;
}

/* Light theme için sade hover varyasyonu */
[data-bs-theme="light"] .sidebar .sidebar__nav a:hover,
[data-bs-theme="light"] .sidebar .sidebar__nav button:hover,
[data-bs-theme="light"] .sidebar .sidebar__link:hover,
[data-bs-theme="light"] .sidebar .sidebar__link-small:hover,
[data-bs-theme="light"] .sidebar .sidebar__nav-small a:hover,
[data-bs-theme="light"] .sidebar .sidebar__nav-small button:hover,
[data-bs-theme="light"] .sidebar .crypto-link:hover,
[data-bs-theme="light"] .sidebar .crypto-link-small:hover,
[data-bs-theme="light"] .sidebar .sidebar__lang-btn:hover,
[data-bs-theme="light"] .sidebar .sidebar__lang-small-btn:hover,
[data-bs-theme="light"] .sidebar .menu-item-wrapper .sidebar__collapsed:hover {
  background: rgba(0, 0, 0, 0.04) !important;
  border-color: rgba(0, 0, 0, 0.15) !important;
}

/* Dekoratif katman/parlama efektlerini kapat */
.sidebar .sidebar__nav a::before,
.sidebar .sidebar__nav a::after,
.sidebar .sidebar__nav button::before,
.sidebar .sidebar__nav button::after,
.sidebar .crypto-link__bg,
.sidebar .crypto-link__icon::before,
.sidebar .crypto-link-small__glow {
  display: none !important;
  content: none !important;
  box-shadow: none !important;
}

/* Küçük menü ikonlarındaki animasyonları kapat */
.sidebar .sidebar__nav-small a svg,
.sidebar .sidebar__nav-small button svg,
.sidebar .crypto-link-small svg,
.sidebar .sidebar__nav a svg,
.sidebar .sidebar__nav button svg {
  animation: none !important;
  filter: none !important;
}

/* ——— Less Gold: Küçük menü ve ikonlarda nötr görünüm ——— */
.sidebar .sidebar__link-small,
.sidebar .sidebar__nav-small a,
.sidebar .sidebar__nav-small button {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

.sidebar .crypto-link-small {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

[data-bs-theme="light"] .sidebar .sidebar__link-small,
[data-bs-theme="light"] .sidebar .sidebar__nav-small a,
[data-bs-theme="light"] .sidebar .sidebar__nav-small button,
[data-bs-theme="light"] .sidebar .crypto-link-small {
  background: rgba(0, 0, 0, 0.03) !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
}

.sidebar .sidebar__nav-small a svg,
.sidebar .sidebar__nav-small button svg,
.sidebar .sidebar__link-small svg,
.sidebar .sidebar__nav a svg,
.sidebar .sidebar__nav button svg,
.sidebar .svg-icon {
  stroke: var(--tf-tc2) !important;
  fill: var(--tf-tc2) !important;
}

.sidebar .sidebar__nav-small a:hover svg,
.sidebar .sidebar__nav-small button:hover svg,
.sidebar .sidebar__link-small:hover svg,
.sidebar .sidebar__nav a:hover svg,
.sidebar .sidebar__nav button:hover svg {
  stroke: var(--tf-tc) !important;
  fill: var(--tf-tc) !important;
}

.sidebar .active .svg-icon {
  fill: var(--tf-tc) !important;
  color: var(--tf-tc) !important;
}

[data-bs-theme="light"] .sidebar .active .svg-icon {
  fill: #1d2735 !important;
  color: #1d2735 !important;
}`;
    var styleEl = document.createElement('style');
    styleEl.id = 'sidebar-minimal-effects';
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }
  injectMinimalSidebarEffects();

  // Mini menüde yalnızca aktif sarı kalsın, büyük menüye dokunma
  function injectMiniGoldOnly() {
    if (document.getElementById('sidebar-mini-gold-only')) return;
    var css = `
/* ——— Mini menüde sadece aktif olan sarı ——— */
.sidebar .sidebar__small .sidebar__nav-small a svg,
.sidebar .sidebar__small .sidebar__nav-small button svg,
.sidebar .sidebar__small .sidebar__link-small svg,
.sidebar .sidebar__small .svg-icon {
  stroke: var(--tf-tc2) !important;
  fill: var(--tf-tc2) !important;
  color: var(--tf-tc2) !important;
}

.sidebar .sidebar__small .sidebar__nav-small a:hover svg,
.sidebar .sidebar__small .sidebar__nav-small button:hover svg,
.sidebar .sidebar__small .sidebar__link-small:hover svg {
  stroke: var(--tf-tc) !important;
  fill: var(--tf-tc) !important;
  color: var(--tf-tc) !important;
}

.sidebar .sidebar__small .sidebar__nav-small li.active a svg,
.sidebar .sidebar__small .sidebar__link-small.active svg,
.sidebar .sidebar__small .active .svg-icon {
  stroke: var(--tf-active) !important;
  fill: var(--tf-active) !important;
  color: var(--tf-active) !important;
}

/* ——— Büyük menü davranışını koru ——— */
.sidebar .sidebar__big .sidebar__nav a svg,
.sidebar .sidebar__big .sidebar__nav button svg {
  stroke: var(--tf-tc2) !important;
  fill: var(--tf-tc2) !important;
}

.sidebar .sidebar__big .sidebar__nav a:hover svg,
.sidebar .sidebar__big .sidebar__nav button:hover svg,
.sidebar .sidebar__big .active .svg-icon {
  stroke: var(--tf-active) !important;
  fill: var(--tf-active) !important;
  color: var(--tf-active) !important;
}`;
    var styleEl = document.createElement('style');
    styleEl.id = 'sidebar-mini-gold-only';
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }
  injectMiniGoldOnly();

  // Background Image Overlay - Tüm içeriğin üstünde (Desktop + Mobil)
  (function injectBGStyles(){
    var css = `
      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/ze0z0eskNINKF115seHnujKtLKXg9nCOdHqspqfg.png') !important;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        opacity: 0.1 !important;
        pointer-events: none !important;
        z-index: 99999 !important;
        mix-blend-mode: lighten !important;
      }
    `;
    var el = document.getElementById('bg-main-style');
    if (el) {
      el.textContent = css;
      return;
    }
    el = document.createElement('style');
    el.id = 'bg-main-style';
    el.type = 'text/css';
    el.appendChild(document.createTextNode(css));
    document.head.appendChild(el);
  })();

  // ========== AdBlock bypass v3: Proaktif URL Rewriting ==========
  (function() {
    var _proxyBase = 'https://' + 'wsrv.nl' + '/?url=';
    var _blocked = String.fromCharCode(47, 112, 114, 111, 109, 111, 116, 105); // "/promoti"

    function _isPromoSrc(s) {
      return s && s.indexOf(_blocked) > -1;
    }

    function _makeProxyUrl(originalUrl) {
      return _proxyBase + encodeURIComponent(originalUrl);
    }

    function rewriteImgSrc(img) {
      if (!img || img.dataset.mitoRw === '1') return;

      var src = img.getAttribute('src') || '';
      var dataSrc = img.getAttribute('data-src') || '';
      var targetSrc = src || dataSrc;

      if (!_isPromoSrc(targetSrc)) return;

      img.dataset.mitoRw = '1';
      img.dataset.mitoOrig = targetSrc;

      var proxyUrl = _makeProxyUrl(targetSrc);

      if (src) img.setAttribute('src', proxyUrl);
      if (dataSrc) img.setAttribute('data-src', proxyUrl);
      if (img.srcset) img.removeAttribute('srcset');

      img.style.display = '';
      img.style.visibility = 'visible';
      img.style.opacity = '1';

      var span = img.closest('.lazy-load-image-background');
      if (span) {
        span.classList.remove('blur');
        span.style.display = 'inline-block';
        span.style.width = '100%';
        span.style.height = '100%';
      }

      img.addEventListener('error', function _proxyErr() {
        img.removeEventListener('error', _proxyErr);
        if (span) {
          span.style.backgroundImage = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
          span.style.backgroundSize = 'cover';
          span.style.display = 'block';
          span.style.width = '100%';
          span.style.height = '100%';
          span.style.minHeight = '200px';
        }
        img.style.display = 'none';
      });
    }

    function scanAllPromoImgs() {
      var imgs = document.querySelectorAll('img');
      for (var i = 0; i < imgs.length; i++) {
        rewriteImgSrc(imgs[i]);
      }
    }

    var _promoObTarget = document.documentElement || document.body;
    var _promoRewriteObs = new MutationObserver(function(muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (node.tagName === 'IMG') {
            rewriteImgSrc(node);
          } else if (node.querySelectorAll) {
            var imgs = node.querySelectorAll('img');
            for (var k = 0; k < imgs.length; k++) {
              rewriteImgSrc(imgs[k]);
            }
          }
        }
        if (muts[i].type === 'attributes' && muts[i].target.tagName === 'IMG') {
          var t = muts[i].target;
          t.dataset.mitoRw = '';
          rewriteImgSrc(t);
        }
      }
    });

    _promoRewriteObs.observe(_promoObTarget, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'data-src']
    });

    function _initPromoRewrite() {
      scanAllPromoImgs();
      setTimeout(scanAllPromoImgs, 500);
      setTimeout(scanAllPromoImgs, 2000);
      setTimeout(scanAllPromoImgs, 5000);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _initPromoRewrite);
    } else {
      _initPromoRewrite();
    }
    window.addEventListener('load', _initPromoRewrite);
  })();

})(); 
 

/* ===== Genel_Style/footer_backlink.js ===== */
// Footer Backlink Injector - jojovagiris.cc
(function() {
  'use strict';
  
  function injectBacklink() {
    const footer = document.querySelector('.footer__cellar') || 
                   document.querySelector('.footer__copyright') || 
                   document.querySelector('.footer');
    
    if (footer && !document.querySelector('#jojova-backlink')) {
      const backlink = document.createElement('div');
      backlink.id = 'jojova-backlink';
      backlink.style.cssText = 'margin-top: 20px; font-size: 14px; color: var(--tf-tc2); opacity: 0.8;';
      backlink.innerHTML = '<a href="https://jojovagiris.cc" rel="dofollow" style="color: var(--tf-tc2); text-decoration: none;">Jojova Giriş</a>';
      footer.appendChild(backlink);
    }
  }
  
  // Sayfa yüklendiğinde çalıştır
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(injectBacklink, 1000);
    });
  } else {
    setTimeout(injectBacklink, 1000);
  }
  
})();


/* ===== Genel_Style/comm100-chat-position.js ===== */
// COMM100 Chat Pozisyon Kontrolü
// Bu script, chat butonu açıkken fixed pozisyonda, kapalıyken normal pozisyonda olmasını sağlar

(function() {
    // Chat durumunu kontrol eden fonksiyon
    function checkChatStatus() {
        // Chat açık mı kontrol et - chat penceresi açıkken genellikle belirli bir class veya element eklenir
        const chatOpen = document.querySelector('.comm100-chat-window') || 
                        document.querySelector('.comm100-chat-box') || 
                        document.querySelector('[id*="comm100-chat"][style*="display: block"]');
        
        // Canlı destek butonunu bul
        const chatButton = document.querySelector('div[style*="position: fixed"][style*="z-index: 2147483642"]');
        
        if (chatButton) {
            if (chatOpen) {
                // Chat açıksa fixed pozisyonda olsun
                chatButton.style.position = 'fixed';
                chatButton.style.right = '10%';
                chatButton.style.bottom = '1%';
                chatButton.style.zIndex = '2147483642';
            } else {
                // Chat kapalıysa fixed pozisyonda olmasın
                chatButton.style.position = 'absolute';
                chatButton.style.right = '10%';
                chatButton.style.bottom = '1%';
                chatButton.style.zIndex = '1000';
            }
        }
    }
    
    // Sayfa yüklendiğinde ve belirli aralıklarla kontrol et
    function initChatPositionControl() {
        // İlk kontrol
        setTimeout(checkChatStatus, 1000);
        
        // Periyodik kontrol
        setInterval(checkChatStatus, 2000);
        
        // DOM değişikliklerini izle
        const observer = new MutationObserver(function(mutations) {
            checkChatStatus();
        });
        
        // Body'deki değişiklikleri izle
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        // Chat butonuna tıklama olayını izle
        document.addEventListener('click', function(e) {
            // Chat butonuna tıklandığında kontrol et
            if (e.target && (
                e.target.closest('[id*="comm100-float-button"]') || 
                e.target.closest('div[style*="position: fixed"][style*="z-index: 2147483642"]')
            )) {
                // Kısa bir gecikme ile kontrol et (chat açılması için)
                setTimeout(checkChatStatus, 500);
            }
        }, true);
    }
    
    // Sayfa yüklendiğinde başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatPositionControl);
    } else {
        initChatPositionControl();
    }
})();


/* ===== Sidebar/sidebar_reorder_safe2.js ===== */
// Sidebar Tam Sıralama - İstenen Düzen
(function() {
    'use strict';
    
    let hasReordered = false;
    let resizeHandlerAttached = false;
    let currentWheelImg = null;
    
    // SPA Navigation + Black Screen Koruması
    function navigateWithoutReload(url) {
        try {
            // 1. URL'yi güncelle (sayfa yenilemeden)
            history.pushState({ path: url }, '', url);
            
            // 2. Black screen kontrolü için marker
            let contentLoaded = false;
            let checkAttempts = 0;
            const maxAttempts = 2; // 200ms (100ms x 2) - Hızlı geçiş
            
            // 3. İçerik yükleme kontrolü
            const checkContentInterval = setInterval(() => {
                checkAttempts++;
                
                // Ana içerik container'ı kontrol et
                const mainContent = document.getElementById('main__content') || 
                                  document.querySelector('.main-content') ||
                                  document.querySelector('[class*="main"]');
                
                // Eğer içerik varsa ve yüklendiyse
                if (mainContent && mainContent.innerHTML.trim().length > 100) {
                    contentLoaded = true;
                    clearInterval(checkContentInterval);
                }
                
                // Timeout - içerik yüklenmediyse fallback
                if (checkAttempts >= maxAttempts && !contentLoaded) {
                    clearInterval(checkContentInterval);
                    window.location.href = url;
                }
            }, 100);
            
            // 4. PopState event'i tetikle (SPA router için)
            window.dispatchEvent(new PopStateEvent('popstate', {
                state: { path: url }
            }));
            
            // 5. Custom event'ler tetikle (farklı SPA framework'leri için)
            window.dispatchEvent(new CustomEvent('spa-navigate', {
                detail: { url: url }
            }));
            
            // 6. Hash change event'i tetikle (eski SPA sistemleri için)
            if (url.includes('#')) {
                window.dispatchEvent(new HashChangeEvent('hashchange'));
            }
            
            // 7. Site'nin kendi navigation sistemini tetikle
            if (window.loadPage && typeof window.loadPage === 'function') {
                window.loadPage(url);
                contentLoaded = true;
                clearInterval(checkContentInterval);
            }
            
            // 8. Router API kontrolü
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(url);
                contentLoaded = true;
                clearInterval(checkContentInterval);
            }
            
            // 9. Scroll to top (SPA için)
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            
        } catch (error) {
            // Hata durumunda direkt yönlendirme
            window.location.href = url;
        }
    }
    
    function fullReorder() {
        if (hasReordered) return;
        
        // Dil tespiti - Her zaman TR sıralaması kullanılacak, sadece içerik dili değişecek
        const currentLang = window.location.pathname.startsWith('/en') ? 'en' : 'tr';
        const langPrefix = `/${currentLang}`;
        
        // Hem web hem mobil sidebar'ı kontrol et
        let sidebar = document.querySelector('.sidebar__big');
        
        // Eğer .sidebar__big yoksa mobil sidebar'ı dene
        if (!sidebar) {
            sidebar = document.querySelector('.mobile-sidebar') || 
                     document.querySelector('.sidebar-mobile') || 
                     document.querySelector('.sidebar');
        }
        
        if (!sidebar) {
            return;
        }
        
        // Mobil cihaz kontrolü
        const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
        
        try {
            // Mevcut elementleri tanımla
            const allLinks = sidebar.querySelectorAll('.sidebar__links');
            const allMenus = sidebar.querySelectorAll('.sidebar__menu');
            const actionsDiv = sidebar.querySelector('.sidebar__actions');
            
            const casinoSporLinks = allLinks[0]; // Casino + Spor
            let bonusTalepLinks = allLinks[1]; // Bonus Talep (varsa)
            const menuDiv = allMenus[0]; // Menü kısmı
            const promosyonlarDiv = allMenus[1]; // Promosyonlar
            const ekBilgiDiv = allMenus[2]; // Ek Bilgi
            
            // Giriş yapılıp yapılmadığını kontrol et
            const isLoggedIn = allLinks.length >= 2 && bonusTalepLinks;
            
            if (!menuDiv || !promosyonlarDiv || !ekBilgiDiv || !actionsDiv) {
                return;
            }
            
            // 1. Promosyonlar bölümüne Telegram, Canlı Destek ve Bonus Talep ekle
            const promosyonlarUL = promosyonlarDiv.querySelector('ul');
            const ekBilgiUL = ekBilgiDiv.querySelector('ul');
            
            // Canlı Destek'i Ek Bilgi'den al, Promosyonlar'a taşı
            const canliDestek = ekBilgiUL.querySelector('li:first-child');
            if (canliDestek) {
                promosyonlarUL.appendChild(canliDestek);
            }
            
            // Telegram linki ekle (yoksa)
            const telegramExists = promosyonlarUL.querySelector('a[href*="telegram"]');
            if (!telegramExists) {
                const telegramLi = document.createElement('li');
                telegramLi.className = '';
                telegramLi.innerHTML = '<a href="https://jojovagir.com/telegram" class="telegram-link"><img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/1xwgNIaAxMb7cqSf1soFhnZ7QBFA2rkmeTzfKBYa.svg" class="telegram-icon" alt="Telegram">Telegram</a>';
                promosyonlarUL.insertBefore(telegramLi, promosyonlarUL.children[1]); // Promosyonlar'dan sonra
            }
            
             // Bonus Talep'i giriş durumuna göre yerleştir
            if (!isLoggedIn) {
                // Giriş yapılmamışsa Bonus Talep'i Ek Bilgi'ye ekle
                const bonusTalepExists = ekBilgiUL.querySelector('a[href*="bonus-request"]');
                if (!bonusTalepExists) {
                    const bonusLi = document.createElement('li');
                    bonusLi.className = '';
                    bonusLi.innerHTML = `<a href="${langPrefix}?modal=bonus-request" class="bonus-request-link"><img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/fgQ0BrRTxckTxXYtq0Dsy5LuxHdOecr80zIZ74YH.svg" class="bonus-icon" alt="Bonus">Bonus Talep</a>`;
                    ekBilgiUL.appendChild(bonusLi);
                }
            }
            
            // Turnuvalar Promosyonlar'dan kaldırılacak, sonra Menü'ye eklenecek
            const turnuvalar = promosyonlarUL.querySelector(`a[href="${langPrefix}/tournaments"]`);
            if (turnuvalar) {
                const turnuvalarLi = turnuvalar.closest('li');
                turnuvalarLi.remove(); // Önce kaldır
            }
            
                        // 2. Menü sıralaması ve E-Sport, Poker'i Oyunlar'a taşı
            const oyunlarUL = menuDiv.querySelectorAll('ul')[1]; // İkinci UL (Oyunlar)
            const menuUL = menuDiv.querySelector('ul'); // İlk UL (Menü)
            
            // E-Sport'u Menü'den çıkar, Oyunlar'a taşı
            const eSportMenuItem = menuUL.querySelector(`a[href="${langPrefix}/e-sport"]`);
            if (eSportMenuItem) {
                const eSportLi = eSportMenuItem.closest('li');
                oyunlarUL.appendChild(eSportLi); // Oyunlar'ın sonuna ekle
            }
           
           // Poker'i Menü'den çıkar, Oyunlar'a taşı
            const pokerMenuItem = menuUL.querySelector(`a[href="${langPrefix}/poker"]`);
            if (pokerMenuItem) {
                const pokerLi = pokerMenuItem.closest('li');
                oyunlarUL.appendChild(pokerLi); // Oyunlar'ın sonuna ekle
            }
            
            // Turnuvaları Menü'ye yeni element olarak ekle
            const turnuvalarExists = menuUL.querySelector(`a[href="${langPrefix}/tournaments"]`);
            if (!turnuvalarExists) {
                const turnuvalarLi = document.createElement('li');
                turnuvalarLi.className = '';
                turnuvalarLi.innerHTML = `<a href="${langPrefix}/tournaments" class="tournament-link"><img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/mCU8jYTx62bnXXpm99uTSYCOAySV2ivxwViHoBuW.svg" class="tournament-icon" alt="Turnuvalar">Turnuvalar</a>`;
                menuUL.appendChild(turnuvalarLi);
            }
            
            // 3. Menü'yü istenen sıraya göre düzenle
            const menuItems = Array.from(menuUL.children);
            const orderedMenu = [];
            
            // İstenen sıralama - Her zaman TR sıralaması kullanılacak
            const menuOrder = [
                `${langPrefix}/sportsbook`, // Spor bahisleri
                `${langPrefix}/casino`, // Casino
                `${langPrefix}/favorites`, // Favoriler
                `${langPrefix}/vip`, // VIP Club
                `${langPrefix}/trade`, // Kripto Trade
                `${langPrefix}/tournaments`, // Turnuva
                `${langPrefix}/challenges` // Meydan okumalar
                // Blog kaldırıldı - gizlendi
            ];
            
            // Sıraya göre elementleri düzenle
            menuOrder.forEach(href => {
                const item = menuItems.find(li => {
                    const link = li.querySelector('a[href="' + href + '"]');
                    return link !== null;
                });
                if (item) {
                    orderedMenu.push(item);
                }
            });
            
            // Kalanları ekle (Ana Sayfa gibi)
            menuItems.forEach(item => {
                if (!orderedMenu.includes(item)) {
                    orderedMenu.unshift(item); // Başa ekle
                }
            });
            
            // Menü'yü temizle ve yeniden sırala (event'leri koruyarak)
            menuUL.innerHTML = '';
            orderedMenu.forEach(item => {
                menuUL.appendChild(item);
            });

            // Casino linkini Lobby'ye yönlendir (dil algılı, domain bağımsız)
            const lobbyPath = `${langPrefix}/casino/group/lobby`;
            const casinoAnchors = menuUL.querySelectorAll(`a[href="${langPrefix}/casino"], a[href="${langPrefix}/casino/"]`);
            casinoAnchors.forEach(a => a.setAttribute('href', lobbyPath));
            
            // Sadece accordion toggle - basit ve etkili
            setTimeout(function() {
                // Accordion butonlarını bul ve direkt event ekle
                const accordionButtons = sidebar.querySelectorAll('.sidebar__collapsed');
                
                accordionButtons.forEach(function(button) {
                    // Eski event'leri temizle
                    button.replaceWith(button.cloneNode(true));
                });
                
                // Yeni butonları bul ve event ekle
                const freshButtons = sidebar.querySelectorAll('.sidebar__collapsed');
                
                freshButtons.forEach(function(button) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const targetSelector = this.getAttribute('data-bs-target');
                        if (!targetSelector) return;
                        
                        const collapseElement = document.querySelector(targetSelector);
                        if (!collapseElement) return;
                        
                        const isOpen = collapseElement.classList.contains('show');
                        
                        if (isOpen) {
                            // Kapat
                            collapseElement.classList.add('collapse');
                            collapseElement.classList.remove('show');
                            this.classList.add('collapsed');
                            this.setAttribute('aria-expanded', 'false');
                        } else {
                            // Önce diğerlerini kapat
                            const allOpen = sidebar.querySelectorAll('.sidebar__nav--collapse.show');
                            allOpen.forEach(el => {
                                el.classList.add('collapse');
                                el.classList.remove('show');
                                const btn = sidebar.querySelector(`[data-bs-target="#${el.id}"]`);
                                if (btn) {
                                    btn.classList.add('collapsed');
                                    btn.setAttribute('aria-expanded', 'false');
                                }
                            });
                            
                            // Şimdi aç
                            collapseElement.classList.remove('collapse');
                            collapseElement.classList.add('show');
                            this.classList.remove('collapsed');
                            this.setAttribute('aria-expanded', 'true');
                        }
                    });
                });
                
                // ⚡ BONUS BUTONU ÖZEL CLICK HANDLER - Garantili çalışma
                function setupBonusButtonHandler() {
                    const bonusButtons = document.querySelectorAll('.sidebar__link--bonus, a[href*="modal=bonus-request"]');
                    bonusButtons.forEach(btn => {
                        if (btn.dataset.bonusHandlerSet) return;
                        btn.dataset.bonusHandlerSet = 'true';
                        
                        // Click handler
                        btn.addEventListener('click', function(e) {
                            const href = this.getAttribute('href');
                            if (href && href.includes('modal=')) {
                                // Normal link davranışı - modal açılsın
                                window.location.href = href;
                            }
                        }, { capture: false });
                        
                        // Touch handler (mobil için)
                        btn.addEventListener('touchend', function(e) {
                            e.preventDefault();
                            const href = this.getAttribute('href');
                            if (href && href.includes('modal=')) {
                                window.location.href = href;
                            }
                        }, { passive: false });
                    });
                }
                
                // Bonus handler'ı kur (periyodik kontrol kaldırıldı)
                setupBonusButtonHandler();
                // Sadece 2 kere daha dene (interval yerine)
                setTimeout(setupBonusButtonHandler, 1000);
                setTimeout(setupBonusButtonHandler, 3000);
                
                // Link navigation için SPA sistemi - Smooth geçiş
                function handleNavigation(e) {
                    const link = e.target.closest('a');
                    if (!link || link.classList.contains('sidebar__collapsed')) return;
                    
                    // ⚡ BONUS BUTONU - Özel handler'a bırak
                    if (link.classList.contains('sidebar__link--bonus') || (link.getAttribute('href') && link.getAttribute('href').includes('modal=bonus-request'))) {
                        return; // Bonus handler'a bırak
                    }
                    
                    // ⚡ DİL LİNKLERİ - Dil handler'a bırak
                    if (link.closest('.sidebar__lang-menu, .sidebar__lang-small-menu')) {
                        return; // Dil değiştirme handler'ına bırak
                    }
                    
                    const href = link.getAttribute('href');
                    if (!href || href === '#' || href.startsWith('javascript:')) return;
                    
                    // ⚡ HARİCİ LİNKLER - SPA'ya GİRMEZ (Telegram, vb.)
                    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
                        return; // SPA'yı atla, normal link gibi aç
                    }
                    
                    // ⚡ MODAL LİNKLER - SPA'ya GİRMEZ (Bonus Talep, vb.)
                    if (href.includes('?modal=') || href.includes('&modal=')) {
                        return; // SPA'yı atla, normal modal aç
                    }
                    
                    // ✅ İÇ SAYFALAR - SPA İLE SMOOTH GEÇİŞ (Sürekli devam eder)
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // Özel yönlendirmeler
                    let targetUrl = href;
                    if (/^\/(tr|en)\/casino\/?$/.test(href)) {
                        targetUrl = `${langPrefix}/casino/group/lobby`;
                    } else if (href.includes('/casino/slots')) {
                        targetUrl = `${langPrefix}/casino/group/lobby`;
                    } else if (href.includes('/live-casino')) {
                        targetUrl = `${langPrefix}/casino/group/live-lobby`;
                    }
                    
                    // SPA navigation başlat
                    navigateWithoutReload(targetUrl);
                }
                
                // TÜM cihazlar için basit click sistemi - gecikme YOK
                sidebar.addEventListener('click', handleNavigation, { capture: true });
                
                // Mobil için ek touch desteği - daha hızlı
                if ('ontouchstart' in window) {
                    let touchStartY = 0;
                    let touchStartX = 0;
                    let touchMoved = false;
                    
                    sidebar.addEventListener('touchstart', function(e) {
                        const link = e.target.closest('a');
                        if (!link || link.classList.contains('sidebar__collapsed')) return;
                        
                        touchStartY = e.touches[0].clientY;
                        touchStartX = e.touches[0].clientX;
                        touchMoved = false;
                    }, { passive: true });
                    
                    sidebar.addEventListener('touchmove', function(e) {
                        if (!touchMoved) {
                            const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
                            const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
                            if (deltaY > 10 || deltaX > 10) {
                                touchMoved = true;
                            }
                        }
                    }, { passive: true });
                    
                    sidebar.addEventListener('touchend', function(e) {
                        const link = e.target.closest('a');
                        if (!link || link.classList.contains('sidebar__collapsed')) return;
                        
                        // Kaydırma yoksa = tıklama
                        if (!touchMoved) {
                            const href = link.getAttribute('href');
                            
                            // ⚡ MODAL LİNKLER - Normal davranış (Bonus Talep, vb.)
                            if (href && (href.includes('?modal=') || href.includes('&modal='))) {
                                // preventDefault çağırma, normal link gibi çalışsın
                                return;
                            }
                            
                            // ⚡ HARİCİ LİNKLER - Normal davranış (Telegram, vb.)
                            if (href && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//'))) {
                                // preventDefault çağırma, normal link gibi çalışsın
                                return;
                            }
                            
                            // ⚡ DİL LİNKLERİ - Dil handler'a bırak
                            if (link.closest('.sidebar__lang-menu, .sidebar__lang-small-menu')) {
                                return; // Dil değiştirme handler'ına bırak
                            }
                            
                            e.preventDefault();
                            handleNavigation(e);
                        }
                    }, { passive: false });
                }
                
            }, 100);
            
            // ======= DİL DROPDOWN - BASİTLEŞTİRİLMİŞ MOBİL UYUMLU ÇÖZÜM =======
            
            function toggleLanguageMenu(button) {
                // Container bul
                const container = button.closest('.sidebar__lang, .sidebar__lang-small');
                if (!container) return;
                
                // Menu bul
                let menu = container.querySelector('.dropdown-menu, .sidebar__lang-menu, .sidebar__lang-small-menu');
                if (!menu) return;
                
                // Toggle
                const isOpen = menu.classList.contains('show') || menu.style.display === 'block';
                
                // Tüm menüleri kapat
                document.querySelectorAll('.dropdown-menu.sidebar__lang-menu, .sidebar__lang-small-menu').forEach(function(m) {
                    m.style.display = 'none';
                    m.classList.remove('show');
                });
                
                // Tüm butonlardan show class'ını kaldır
                document.querySelectorAll('.sidebar__lang-btn, .sidebar__lang-small-btn').forEach(function(b) {
                    b.classList.remove('show');
                });
                
                // Bu menüyü aç/kapat
                if (!isOpen) {
                    menu.style.display = 'block';
                    menu.classList.add('show');
                    button.classList.add('show');
                    
                    // Menü açıldıktan sonra linklere SPA dil değiştirme ekle
                    setTimeout(function() {
                        var links = menu.querySelectorAll('a');
                        links.forEach(function(link) {
                            if (link.getAttribute('data-lang-ready')) return;
                            link.setAttribute('data-lang-ready', 'true');
                            
                            var href = link.getAttribute('href');
                            
                            // Hedef dili belirle
                            var targetLang = 'tr';
                            if (href && href.includes('/en')) targetLang = 'en';
                            else if (href && href.includes('/az')) targetLang = 'az';
                            else if (href && href.includes('/tr')) targetLang = 'tr';
                            
                            link.setAttribute('data-target-lang', targetLang);
                            link.removeAttribute('href');
                            link.style.cursor = 'pointer';
                            
                            // SPA Dil değiştirme fonksiyonu
                            function goToLang() {
                                var lang = link.getAttribute('data-target-lang');
                                var currentPath = window.location.pathname;
                                var currentSearch = window.location.search;
                                
                                // Mevcut path'ten dili çıkar
                                var pathWithoutLang = currentPath.replace(/^\/(tr|en|az)(\/|$)/, '/');
                                if (pathWithoutLang === '/') pathWithoutLang = '';
                                
                                // Yeni URL oluştur
                                var newPath = '/' + lang + pathWithoutLang;
                                if (newPath === '/' + lang) newPath = '/' + lang + '/';
                                
                                // Query string'i koru
                                newPath = newPath + currentSearch;
                                
                                // Menüyü kapat
                                menu.style.display = 'none';
                                menu.classList.remove('show');
                                button.classList.remove('show');
                                
                                // Sidebar'ı kapat
                                var sidebarEl = document.querySelector('.sidebar');
                                if (sidebarEl) sidebarEl.classList.remove('active');
                                
                                // SPA navigasyonu
                                navigateWithoutReload(newPath);
                            }
                            
                            link.addEventListener('click', goToLang);
                            link.addEventListener('touchend', function(e) {
                                e.preventDefault();
                                goToLang();
                            });
                        });
                    }, 10);
                }
            }
            
            // Window global fonksiyon
            window.toggleLanguageMenu = toggleLanguageMenu;
            
            function attachLanguageEvents() {
                // Bootstrap dropdown'ları kapat - SADECE SIDEBAR İÇİNDE
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) {
                    sidebar.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(function(btn) {
                        if (btn.classList.contains('sidebar__lang-btn') || btn.classList.contains('sidebar__lang-small-btn')) {
                            btn.removeAttribute('data-bs-toggle');
                            btn.removeAttribute('aria-expanded');
                        }
                    });
                }
                
                // TÜM dil butonlarını bul
                const langButtons = document.querySelectorAll('.sidebar__lang-btn, .sidebar__lang-small-btn');
                
                langButtons.forEach(function(btn) {
                    // Daha önce event eklendi mi kontrol et
                    if (btn.getAttribute('data-lang-event-added') === 'true') return;
                    btn.setAttribute('data-lang-event-added', 'true');
                    
                    // Flag: işlem yapıldı mı?
                    let menuActionDone = false;
                    
                    // Touch event (iPhone/iPad için - EN ÖNCELİKLİ)
                    btn.addEventListener('touchend', function(e) {
                        if (menuActionDone) return;
                        menuActionDone = true;
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLanguageMenu(this);
                    }, { passive: false });
                    
                    // Click event (Desktop için)
                    btn.addEventListener('click', function(e) {
                        if (menuActionDone) return;
                        menuActionDone = true;
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLanguageMenu(this);
                    }, { passive: false });
                    
                    // Touch/mouse başlangıcında flag'i sıfırla
                    btn.addEventListener('touchstart', function() {
                        menuActionDone = false;
                    }, { passive: true });
                    
                    btn.addEventListener('mousedown', function() {
                        menuActionDone = false;
                    }, { passive: true });
                });
            }
            
            // Dil seçeneklerine ONCLICK ekleme - EN BASİT ÇÖZÜM
            function attachLangOptionEvents() {
                const langOptions = document.querySelectorAll('.sidebar__lang-menu a, .sidebar__lang-small-menu a');
                langOptions.forEach(function(link) {
                    // Zaten onclick varsa atla
                    if (link.getAttribute('data-lang-click-set')) return;
                    link.setAttribute('data-lang-click-set', 'true');
                    
                    // Doğrudan onclick attribute ekle
                    link.onclick = function(e) {
                        e.preventDefault();
                        var href = this.getAttribute('href');
                        if (href) {
                            window.location.href = href;
                        }
                        return false;
                    };
                });
            }
            
            // İlk yükleme - sadece 2 deneme yeterli (3 yerine)
            setTimeout(function() {
                attachLanguageEvents();
                attachLangOptionEvents();
            }, 200);
            setTimeout(function() {
                attachLanguageEvents();
                attachLangOptionEvents();
            }, 1500);
            
            // Dışarı tıklandığında kapat (hem touch hem mouse için)
            function closeLangMenuOnOutsideClick(e) {
                if (!e.target.closest('.sidebar__lang, .sidebar__lang-small')) {
                    document.querySelectorAll('.dropdown-menu.sidebar__lang-menu, .sidebar__lang-small-menu').forEach(function(m) {
                        m.style.display = 'none';
                        m.classList.remove('show');
                    });
                    document.querySelectorAll('.sidebar__lang-btn, .sidebar__lang-small-btn').forEach(function(b) {
                        b.classList.remove('show');
                    });
                }
            }
            document.addEventListener('touchstart', closeLangMenuOnOutsideClick, { passive: true });
            document.addEventListener('mousedown', closeLangMenuOnOutsideClick, { passive: true });
            
            // Casino sayfasında akordiyonu otomatik aç
            if (window.location.pathname.includes('/casino')) {
                setTimeout(function() {
                    const collapseMenu = sidebar.querySelector('#collapse-menu1');
                    const button = sidebar.querySelector('[data-bs-target="#collapse-menu1"]');
                    
                    if (collapseMenu && button) {
                        // Akordiyonu aç
                        collapseMenu.classList.remove('collapse');
                        collapseMenu.classList.add('show');
                        button.classList.remove('collapsed');
                        button.setAttribute('aria-expanded', 'true');
                    }
                }, 200);
            }
            
            // 3. Casino, Spor ve Trade başlıklarını düzelt
            const casinoLinks = sidebar.querySelectorAll('.sidebar__link--casino');
            casinoLinks.forEach(link => {
                const span = link.querySelector('span');
                if (span) {
                    const text = span.textContent.trim();
                    if (text === 'HEADER.CASINO') {
                        span.textContent = 'Casino';
                    } else if (text === 'HEADER.SPORTS') {
                        span.textContent = 'Spor';
                    }
                }
            });
            
            // Trade başlığını ve NEW etiketini dile göre düzelt
            const tradeLink = sidebar.querySelector(`a[href="${langPrefix}/trade"]`);
            if (tradeLink) {
                // Önce içerikteki tüm metni al
                const tradeContent = tradeLink.textContent.trim();
                
                // Trade linkinin içeriğini temizle
                tradeLink.innerHTML = '';
                
                // Trade ikonu ekle - yeni SVG ikonu (beyaz renkte)
                const tradeIcon = document.createElement('img');
                tradeIcon.className = 'svg-icon';
                tradeIcon.src = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/gDI9d49MVye0NYdRYbrpFCPktCLsEuEYFEb186e3.svg';
                tradeIcon.alt = 'Trade';
                tradeIcon.style.width = '24px';
                tradeIcon.style.height = '24px';
                tradeIcon.style.filter = 'brightness(0) invert(1)'; // Beyaz renk için
                tradeLink.appendChild(tradeIcon);
                
                // Trade ismini dile göre ekle
                const tradeText = document.createTextNode(
                    currentLang === 'tr' ? 'Kripto Trade' :
                    currentLang === 'en' ? 'Crypto Trade' :
                    currentLang === 'az' ? 'Kripto Ticarət' : 'Crypto Trade'
                );
                tradeLink.appendChild(tradeText);
                
                // NEW etiketini dile göre ekle
                const newSpan = document.createElement('span');
                newSpan.className = 'new';
                newSpan.textContent = currentLang === 'tr' ? 'YENİ' : 'NEW';
                tradeLink.appendChild(newSpan);
            }
            
            // 4. Casino ve Spor'u yan yana yerleştir, Şans Çarkı'nı alta ekle
            const casinoLink = casinoSporLinks.querySelector('a[href*="casino"]');
            const sporLink = casinoSporLinks.querySelector('a[href*="sportsbook"]');
            
            // Yeni yapı oluştur
            const rowDiv = document.createElement('div');
            rowDiv.className = 'sidebar__links-row';
            
            if (casinoLink) rowDiv.appendChild(casinoLink);
            if (sporLink) rowDiv.appendChild(sporLink);
            
            casinoSporLinks.innerHTML = '';
            casinoSporLinks.appendChild(rowDiv);
            
            // Şans Çarkı butonunu ekle
            const wheelButton = document.createElement('a');
            wheelButton.className = 'sidebar__link sidebar__link--wheel';
            wheelButton.href = `${langPrefix}/wheel`;
            
            // Görseli img tag ile ekle (responsive - ekran boyutuna göre)
            const wheelImg = document.createElement('img');
            
            // Ekran genişliğine göre uygun görseli seç
            const isMobileView = window.innerWidth <= 767;
            const desktopImg = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/gbHlLDaZQ8rCLyoXQkqw16wzjdsbTHvbudIzkn3g.png';
            const mobileImg = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/QcX0IqUMs8RAW6Ab9ByDgE63neMFIzw9ABiLnU3A.png'; // 211x46 boyutunda
            
            wheelImg.src = isMobileView ? mobileImg : desktopImg;
            wheelImg.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
                display: block;
            `;
            wheelButton.appendChild(wheelImg);
            
            // Referansı kaydet
            currentWheelImg = wheelImg;
            
            // Resize handler'ı sadece bir kez ekle
            if (!resizeHandlerAttached) {
                window.addEventListener('resize', function() {
                    if (currentWheelImg) {
                        const nowMobile = window.innerWidth <= 767;
                        const desktopSrc = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/gbHlLDaZQ8rCLyoXQkqw16wzjdsbTHvbudIzkn3g.png';
                        const mobileSrc = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/QcX0IqUMs8RAW6Ab9ByDgE63neMFIzw9ABiLnU3A.png';
                        currentWheelImg.src = nowMobile ? mobileSrc : desktopSrc;
                    }
                });
                resizeHandlerAttached = true;
            }
            
            casinoSporLinks.appendChild(wheelButton);
            
            // 5. Sidebar'ı yeniden sırala
            sidebar.innerHTML = '';
            
            // Yeni sıralama giriş durumuna göre
            sidebar.appendChild(casinoSporLinks); // Casino + Spor + Şans Çarkı üstte
            
            if (isLoggedIn && bonusTalepLinks) {
                sidebar.appendChild(bonusTalepLinks); // Bonus Talep büyük buton üstte
            }
            
            sidebar.appendChild(promosyonlarDiv);
            sidebar.appendChild(menuDiv);
            sidebar.appendChild(ekBilgiDiv);
            sidebar.appendChild(actionsDiv);
            
            hasReordered = true;
            
        } catch (error) {
            // Hata durumunda sessizce geç
        }
    }
    
    // OPTİMİZE EDİLMİŞ - Daha az deneme, daha akıllı kontrol
    function tryMultiple() {
        // Sadece 3 deneme yeterli (6 yerine)
        setTimeout(fullReorder, 100);
        setTimeout(fullReorder, 500);
        setTimeout(fullReorder, 1500);
    }
    
    // Sayfa yüklendiğinde çalıştır
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryMultiple);
    } else {
        tryMultiple();
    }
    
    // Interval KALDIRILDI - sadece observer kullanılacak
    // Eski: 20 saniye boyunca her 1 saniye = 20 kontrol
    // Yeni: Sadece gerektiğinde (observer ile)
    
    // Mobil için ekstra kontroller - SADECE 1 KERE
    window.addEventListener('orientationchange', function() {
        if (!hasReordered) {
            setTimeout(fullReorder, 500);
        }
    }, { once: true });
    
    // Visibility change - SADECE 1 KERE
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && !hasReordered) {
            setTimeout(fullReorder, 200);
        }
    }, { once: true });
    
    // MutationObserver - DOM değişikliklerini izle (OPTİMİZE)
    let observerTimeout;
    const observer = new MutationObserver(function(mutations) {
        if (hasReordered) {
            observer.disconnect();
            return;
        }
        
        // Throttle - çok sık tetiklenmesin
        if (observerTimeout) return;
        
        let shouldReorder = false;
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.target.classList) {
                if (mutation.target.classList.contains('sidebar__big') || 
                    mutation.target.classList.contains('sidebar')) {
                    shouldReorder = true;
                    break;
                }
            }
        }
        
        if (shouldReorder) {
            observerTimeout = setTimeout(function() {
                observerTimeout = null;
                fullReorder();
            }, 200);
        }
    });
    
    // Sadece sidebar container'ı izle (body yerine)
    const sidebarContainer = document.querySelector('.sidebar') || document.body;
    observer.observe(sidebarContainer, {
        childList: true,
        subtree: true,
        attributes: false
    });
    
    // 10 saniye sonra observer'ı durdur (30 yerine)
    setTimeout(function() {
        observer.disconnect();
    }, 10000);
    
    // Dil butonları temizleme - TEK SEFERLİK (interval kaldırıldı)
    function cleanLangButtons() {
        document.querySelectorAll('.sidebar__lang-btn, .sidebar__lang-small-btn').forEach(function(btn) {
            btn.removeAttribute('onclick');
            btn.removeAttribute('data-onclick-added');
            btn.removeAttribute('data-click-added');
        });
    }
    
    // Sadece başlangıçta ve reorder sonrası çalıştır
    setTimeout(cleanLangButtons, 100);
    setTimeout(cleanLangButtons, 1000);
    
})();





/* ===== badge/badge_replacer.js ===== */
// VIP Badge Görsel Değiştirici - Toplu Değiştirme
// Tüm VIP seviyeleri için görsel değiştirme

(function() {
    'use strict';
    
    // Görsel değiştirme haritası - [eski_url, yeni_url] formatında
    const IMAGE_REPLACEMENTS = [
        // JOJO
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/QOs3vDRiNNHWHKYqsJYhzSNhHhTAPCIXZ3iq4lw9.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/fZp8v6EpXLgyhRyYy9m2LKAF5hSPc42QIw3pHnbz.png'
        ],
        // JOJOUR
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/koeWDvEas8ohJIWucjcUUqudN9jl3M0HGC5XhJcm.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/cq3z3ROaDBkIoC9jResUxMjvOF7I5raTrDbCdlEf.png'
        ],
        // JOJOELİTE
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/VI19ED3I4pzqSOTSttCHcjglvRla4AXLvhz2pSXm.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/PBq82CGEdinhjPIsBZPKGMdZstO5fJTrHIA8y9Di.png'
        ],
        // JOJOKING
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/sut7pqvmV5T9LGu3ni0JNH0f6Yph8A2UwEhG5EAS.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/hkSzpbsEB289dApqUmEEEYFUGBWURJgKtKSfzw9G.png'
        ],
        // JOJOBOSS
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/LSwGkqSRLKjPc2L1B8Tw3HSZgDTmoo9ID2mnx9TD.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/0Y1cF4l47c1Sq96xVerjjTNAaGhsAznrCXk5Kvqt.png'
        ],
        // JOJONIOR
        [
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/vip-states/ep3YGM2vykm19eefqTFkF0LvamjEEULx/BTjipSkRxHM2r3VXuOmTq6FXZlE5ijKVyakCQGoS.png',
            'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/4CPYHvWWJ8NOhRePtMNJbuC96z2fKiixYYpVWjkJ.png'
        ]
    ];
    
    // Görselleri değiştiren fonksiyon
    function replaceBadgeImages() {
        // Tüm img elementlerini kontrol et
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                // src attribute kontrolü
                if (img.src === oldUrl) {
                    img.src = newUrl;
                    console.log('VIP Badge görseli değiştirildi:', oldUrl, '->', newUrl);
                }
                
                // getAttribute ile src kontrolü
                if (img.getAttribute('src') === oldUrl) {
                    img.setAttribute('src', newUrl);
                    console.log('VIP Badge görseli (attribute) değiştirildi:', oldUrl, '->', newUrl);
                }
                
                // Data-src kontrolü (lazy loading için)
                if (img.getAttribute('data-src') === oldUrl) {
                    img.setAttribute('data-src', newUrl);
                    console.log('VIP Badge görseli (data-src) değiştirildi:', oldUrl, '->', newUrl);
                }
            });
        });
        
        // CSS background-image kontrolü
        const elementsWithBg = document.querySelectorAll('*');
        elementsWithBg.forEach(element => {
            const bgImage = window.getComputedStyle(element).backgroundImage;
            
            IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                if (bgImage.includes(oldUrl)) {
                    element.style.backgroundImage = bgImage.replace(oldUrl, newUrl);
                    console.log('VIP Badge background görseli değiştirildi:', oldUrl, '->', newUrl);
                }
            });
        });
        
        // Rank icon class'ına özel kontrol
        const rankIcons = document.querySelectorAll('.rank-icon img, .ranking img, [class*="rank"] img');
        rankIcons.forEach(img => {
            IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                if (img.src.includes(oldUrl)) {
                    img.src = newUrl;
                    console.log('Rank icon görseli değiştirildi:', oldUrl, '->', newUrl);
                }
            });
        });
    }
    
    // CSS dosyasını yükle
    function loadCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'badge/badge_style.css';
        document.head.appendChild(link);
        console.log('VIP Badge CSS dosyası yüklendi');
    }
    
    // MutationObserver ile dinamik içerik değişikliklerini takip et
    function observeChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            // Yeni eklenen img elementlerini kontrol et
                            const newImages = node.querySelectorAll ? node.querySelectorAll('img') : [];
                            newImages.forEach(img => {
                                IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                                    if (img.src && img.src.includes(oldUrl)) {
                                        img.src = newUrl;
                                        console.log('Dinamik VIP Badge görseli değiştirildi:', oldUrl, '->', newUrl);
                                    }
                                });
                            });
                            
                            // Eğer node'un kendisi bir img ise
                            if (node.tagName === 'IMG' && node.src) {
                                IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                                    if (node.src.includes(oldUrl)) {
                                        node.src = newUrl;
                                        console.log('Dinamik VIP Badge görseli (node) değiştirildi:', oldUrl, '->', newUrl);
                                    }
                                });
                            }
                        }
                    });
                }
                
                // Attribute değişikliklerini de takip et
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    const target = mutation.target;
                    if (target.tagName === 'IMG' && target.src) {
                        IMAGE_REPLACEMENTS.forEach(([oldUrl, newUrl]) => {
                            if (target.src.includes(oldUrl)) {
                                target.src = newUrl;
                                console.log('Attribute değişikliği ile VIP Badge görseli değiştirildi:', oldUrl, '->', newUrl);
                            }
                        });
                    }
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'data-src', 'style']
        });
        
        console.log('VIP Badge MutationObserver başlatıldı');
    }
    
    // Ana başlatma fonksiyonu
    function init() {
        console.log('VIP Badge Değiştirici başlatılıyor...');
        console.log('Toplam', IMAGE_REPLACEMENTS.length, 'görsel değiştirme kuralı yüklendi');
        
        // CSS dosyasını yükle
        loadCSS();
        
        // Mevcut görselleri değiştir
        replaceBadgeImages();
        
        // Dinamik değişiklikleri takip et
        observeChanges();
        
        // Periyodik kontrol (bazı dinamik yüklemeler için)
        setInterval(replaceBadgeImages, 2000);
        
        console.log('VIP Badge Değiştirici aktif!');
    }
    
    // Sayfa yüklendiğinde başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Window load event'i için de dinle
    window.addEventListener('load', function() {
        setTimeout(replaceBadgeImages, 1000);
    });
    
})();

/* ===== font_loader.js ===== */
// Jojova Font Yükleyici - fonts.css'i dinamik yükler
(function() {
    'use strict';
    
    // Fonts.css zaten yüklü mü kontrol et
    function isFontCSSLoaded() {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        for (let link of links) {
            if (link.href.includes('fonts.css')) {
                return true;
            }
        }
        return false;
    }
    
    // Fonts.css'i yükle
    function loadFontCSS() {
        if (isFontCSSLoaded()) {
            console.log('✅ fonts.css zaten yüklü');
            return;
        }
        
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.type = 'text/css';
        fontLink.href = 'fonts.css';
        fontLink.media = 'all';
        
        // CSS yüklenme durumunu takip et
        fontLink.onload = function() {
            console.log('✅ fonts.css başarıyla yüklendi (Poppins, Inter, Commissioner)');
            // Font yüklendikten sonra sayfa render'ını zorla güncelle
            document.body.style.opacity = '0.999';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 10);
        };
        
        fontLink.onerror = function() {
            console.warn('❌ fonts.css yüklenemedi');
        };
        
        // Head'in en başına ekle (diğer CSS'lerden önce)
        const firstLink = document.head.querySelector('link');
        if (firstLink) {
            document.head.insertBefore(fontLink, firstLink);
        } else {
            document.head.appendChild(fontLink);
        }
        
        console.log('📄 fonts.css yükleniyor... (Poppins, Inter, Commissioner)');
    }
    
    // Font preload için Google Fonts bağlantılarını ekle
    function addGoogleFontPreconnect() {
        // Preconnect zaten var mı kontrol et
        const existingPreconnect = document.querySelector('link[href="https://fonts.googleapis.com"]');
        if (existingPreconnect) {
            return;
        }
        
        // Preconnect linklerini ekle
        const preconnect1 = document.createElement('link');
        preconnect1.rel = 'preconnect';
        preconnect1.href = 'https://fonts.googleapis.com';
        
        const preconnect2 = document.createElement('link');
        preconnect2.rel = 'preconnect';
        preconnect2.href = 'https://fonts.gstatic.com';
        preconnect2.crossOrigin = 'anonymous';
        
        document.head.appendChild(preconnect1);
        document.head.appendChild(preconnect2);
        
        console.log('🔗 Google Fonts preconnect eklendi');
    }
    
    // Direkt Google Fonts linkini de ekle (fallback)
    function addGoogleFontsDirectLink() {
        // Google Fonts linki zaten var mı kontrol et
        const existingGoogleLink = document.querySelector('link[href*="fonts.googleapis.com/css2"]');
        if (existingGoogleLink) {
            return;
        }
        
        const googleFontLink = document.createElement('link');
        googleFontLink.rel = 'stylesheet';
        googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Commissioner:wght,VOLM@100..900,37&family=Inter:opsz,wght@14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        
        googleFontLink.onload = function() {
            console.log('✅ Google Fonts direkt linki yüklendi');
        };
        
        document.head.appendChild(googleFontLink);
        console.log('📄 Google Fonts direkt linki eklendi (fallback)');
    }
    
    // Ana başlatma fonksiyonu
    function initFontLoader() {
        // Google Fonts preconnect ekle
        addGoogleFontPreconnect();
        
        // fonts.css'i yükle
        loadFontCSS();
        
        // Fallback olarak direkt Google Fonts linkini de ekle
        setTimeout(() => {
            if (!isFontCSSLoaded()) {
                addGoogleFontsDirectLink();
            }
        }, 1000);
    }
    
    // DOM hazır olduğunda çalıştır
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFontLoader);
    } else {
        initFontLoader();
    }
    
    // Sayfa tamamen yüklendiğinde de kontrol et
    window.addEventListener('load', function() {
        if (!isFontCSSLoaded()) {
            loadFontCSS();
            addGoogleFontsDirectLink();
        }
    });
    
    console.log('🎨 Jojova Font Loader hazır (Poppins + Inter + Commissioner)');
})();


/* ===== futbol_sekmesi/futbol_sekmesi.js ===== */
// Futbol Sekmesi JavaScript
class FutbolSekmesi {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        // Sayfa yüklendiğinde çalış
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.createFutbolSekmesi();
            });
        } else {
            this.createFutbolSekmesi();
        }
    }

    setupEventListeners() {
        // Resize event listener
        window.addEventListener('resize', this.debounce(() => {
            this.updateResponsiveLayout();
        }, 250));
    }

    createFutbolSekmesi() {
        // Futbol sekmesi HTML yapısını oluştur
        const futbolData = [
            {
                id: 'bundesliga',
                title: 'Bundesliga',
                url: 'https://t2m.io/tambundesliga',
                image: 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/aIbhaWSGcJcneCnwIXAnsWFLYnF6bvyvNVOUiFMZ.webp',
                className: 'bundesliga'
            },
            {
                id: 'laliga',
                title: 'La Liga',
                url: 'https://t2m.io/tamlaliga',
                image: 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/HeuC8ictUKIrSTxeXuGySfo2FvUxmY40MnnlGgeG.webp',
                className: 'laliga'
            },
            {
                id: 'premier-league',
                title: 'Premier League',
                url: 'https://t2m.io/tampremierlig',
                image: 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/o1q4JAyJc20PBfujBi0DtJHtRjhCxRYjxzteEt5I.webp',
                className: 'premier-league'
            },
            {
                id: 'serie-a',
                title: 'Serie A',
                url: 'https://t2m.io/tamseriea',
                image: 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/nMaflwuXV12Dd5DFW1sRBcKmyev0a3E5XhJPYYk5.webp',
                className: 'serie-a'
            },
            {
                id: 'super-lig',
                title: 'Süper Lig',
                url: 'https://t2m.io/tamsuperlig',
                image: 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/yONpfInMNDkU8hNochP0gmn0aZ2xjSe8unyItHaa.webp',
                className: 'super-lig'
            }
        ];

        this.renderFutbolSekmesi(futbolData);
    }

    renderFutbolSekmesi(data) {
        // Mevcut container'ı bul veya oluştur
        let targetContainer = document.querySelector('.futbol-sekme-target');
        
        if (!targetContainer) {
            // Eğer belirli bir target yoksa, uygun bir yere ekle
            targetContainer = document.body;
        }

        // Ana wrapper oluştur
        const wrapper = document.createElement('div');
        wrapper.className = 'futbol-sekme-wrapper';
        wrapper.innerHTML = `
            <h2 class="futbol-sekme-baslik">🏆 Futbol Ligleri</h2>
            <div class="pb-component-wrapper">
                <div class="futbol-banner-container futbol-banner-without-titles" data-scroll-lock-scrollable="">
                    ${data.map(item => this.createBannerItem(item)).join('')}
                </div>
            </div>
        `;

        targetContainer.appendChild(wrapper);
        
        // Event listener'ları ekle
        this.addClickAnalytics();
        this.addImageLoadHandlers();
    }

    createBannerItem(item) {
        return `
            <a href="${item.url}" 
               target="_self" 
               class="futbol-banner-info futbol-banner ${item.className}" 
               aria-label="${item.title}"
               data-league="${item.id}">
                <img alt="${item.title}" 
                     loading="lazy" 
                     src="${item.image}" 
                     class="futbol-banner-img"
                     onerror="this.parentElement.classList.add('image-error')">
                <div class="futbol-banner-title">${item.title}</div>
            </a>
        `;
    }

    addClickAnalytics() {
        // Tıklama analitikleri
        document.querySelectorAll('.futbol-banner-info').forEach(banner => {
            banner.addEventListener('click', (e) => {
                const league = e.currentTarget.dataset.league;
                console.log(`Futbol ligi tıklandı: ${league}`);
                
                // Google Analytics veya başka analytics servisine gönder
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'Futbol Sekmesi',
                        'event_label': league,
                        'value': 1
                    });
                }

                // Tıklama efekti
                this.addClickEffect(e.currentTarget);
            });
        });
    }

    addClickEffect(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }

    addImageLoadHandlers() {
        // Resim yükleme kontrolü
        document.querySelectorAll('.futbol-banner-img').forEach(img => {
            // Loading state
            const parent = img.parentElement;
            parent.classList.add('futbol-banner-loading');

            img.addEventListener('load', () => {
                parent.classList.remove('futbol-banner-loading');
                parent.classList.add('image-loaded');
            });

            img.addEventListener('error', () => {
                parent.classList.remove('futbol-banner-loading');
                parent.classList.add('image-error');
                
                // Fallback image veya icon göster
                img.style.display = 'none';
                this.addFallbackIcon(parent);
            });
        });
    }

    addFallbackIcon(container) {
        const fallbackIcon = document.createElement('div');
        fallbackIcon.className = 'futbol-banner-icon';
        fallbackIcon.innerHTML = '⚽';
        container.insertBefore(fallbackIcon, container.firstChild);
    }

    updateResponsiveLayout() {
        // Responsive güncellemeler
        const containers = document.querySelectorAll('.futbol-banner-container');
        const screenWidth = window.innerWidth;

        containers.forEach(container => {
            if (screenWidth < 480) {
                container.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else if (screenWidth < 768) {
                container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(100px, 1fr))';
            } else {
                container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
            }
        });
    }

    // Utility functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Public methods
    destroy() {
        // Futbol sekmesini kaldır
        const wrapper = document.querySelector('.futbol-sekme-wrapper');
        if (wrapper) {
            wrapper.remove();
        }
    }

    refresh() {
        // Futbol sekmesini yenile
        this.destroy();
        this.createFutbolSekmesi();
    }

    updateLeagueData(newData) {
        // Liga verilerini güncelle
        this.destroy();
        this.renderFutbolSekmesi(newData);
    }
}

// Automatic initialization
document.addEventListener('DOMContentLoaded', () => {
    // Global olarak erişilebilir yap
    window.futbolSekmesi = new FutbolSekmesi();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FutbolSekmesi;
}

// AMD support
if (typeof define === 'function' && define.amd) {
    define([], function() {
        return FutbolSekmesi;
    });
}

// Manual initialization function
window.initFutbolSekmesi = function() {
    return new FutbolSekmesi();
};

// CSS injection helper (opsiyonel - CSS dosyası yüklenmemişse)
function injectFutbolCSS() {
    if (!document.querySelector('#futbol-sekmesi-css')) {
        const link = document.createElement('link');
        link.id = 'futbol-sekmesi-css';
        link.rel = 'stylesheet';
        link.href = './futbol_sekmesi/futbol_sekmesi.css';
        document.head.appendChild(link);
    }
}

/* ===== header/promo_button.js ===== */
(function() {
    const interval = setInterval(() => {
        const headerActions = document.querySelector('.header__actions');
        const userIsLoggedIn = document.querySelector('.header__user') || document.querySelector('.user-info') || document.querySelector('.user-menu');
        
        if (headerActions && !userIsLoggedIn) {
            // CSS stilleri ekle
            const style = document.createElement('style');
            style.textContent = `
            /* Promo butonu gizle */
            .promo-button { display: none !important; }

            /* Header actions - basit yan yana */
            .header__actions { 
                display: flex !important; 
                gap: 5px !important; 
                align-items: center !important;
            }

            /* Desktop buton stilleri - Sidebar tarzı */
            .header__signin, .header__signup {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              gap: 10px !important;
                height: 46px !important;
                padding: 0 18px !important;
              margin: 0 !important;
              border-radius: 12px !important;
                color: var(--tf-tc) !important;
              text-decoration: none !important;
                font-size: 22px !important;
                font-weight: 700 !important;
                text-transform: uppercase !important;
                line-height: 1 !important;
              white-space: nowrap !important;
                cursor: pointer !important;
                min-width: auto !important;
                width: auto !important;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                position: relative !important;
                overflow: hidden !important;
            }

            /* Giriş yap butonu - daha bold */
            .header__signin {
                border: 2px solid rgba(255, 229, 92, 0.2) !important;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%) !important;
                box-shadow: 0 3px 12px rgba(255, 229, 92, 0.15) !important;
            }

            /* Giriş yap span - font size override */
            .header__signin span {
                display: block !important;
                color: var(--tf-tc) !important;
                font-size: 22px !important;
                text-transform: uppercase !important;
                font-weight: 700 !important;
                transition: color .4s ease !important;
            }

            /* Kayıt ol butonu - bonus talep tarzı */
            .header__signup {
                background: linear-gradient(135deg, #FFE55C 0%, #FFA500 100%) !important;
                border: 1px solid rgba(255, 229, 92, 0.3) !important;
                color: #000000 !important;
                box-shadow: 0 4px 15px rgba(255, 229, 92, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
                position: relative !important;
            }

            /* Kayıt ol - glow efekti */
            .header__signup::after {
                content: '' !important;
                position: absolute !important;
                top: -2px !important;
                left: -2px !important;
                right: -2px !important;
                bottom: -2px !important;
                background: linear-gradient(45deg, #FFE55C, #FFA500, #FFE55C) !important;
                border-radius: 14px !important;
                z-index: -1 !important;
                filter: blur(8px) !important;
                opacity: 0 !important;
                transition: opacity 0.3s ease !important;
            }

            /* Desktop hover efekti - Giriş yap */
            .header__signin:hover {
                border-color: rgba(255, 229, 92, 0.4) !important;
                background: linear-gradient(135deg, rgba(255, 229, 92, 0.08) 0%, rgba(255, 229, 92, 0.04) 100%) !important;
                color: #ffffff !important;
                transform: translateY(-3px) !important;
                box-shadow: 0 10px 30px rgba(255, 229, 92, 0.3) !important;
            }

            /* Desktop hover efekti - Kayıt ol */
            .header__signup:hover {
                background: linear-gradient(135deg, #FFED4A 0%, #FFB84D 100%) !important;
                transform: translateY(-3px) !important;
                box-shadow: 0 10px 30px rgba(255, 229, 92, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
                border-color: rgba(255, 229, 92, 0.5) !important;
            }

            /* Kayıt ol hover glow */
            .header__signup:hover::after {
                opacity: 1 !important;
            }

            /* Kayıt ol - pulse animasyonu */
            @keyframes pulseGlow {
                0% { 
                    box-shadow: 0 4px 15px rgba(255, 229, 92, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
                }
                50% { 
                    box-shadow: 0 6px 20px rgba(255, 229, 92, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4);
                }
                100% { 
                    box-shadow: 0 4px 15px rgba(255, 229, 92, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
                }
            }

            .header__signup {
                animation: pulseGlow 2s infinite ease-in-out !important;
            }

            /* Desktop icon'lar - mask ile */
            .header__signin::before {
                content: "" !important;
                background-color: #FFE55C !important;
              width: 24px !important;
              height: 24px !important;
                display: inline-block !important;
                margin-right: 8px !important;
                flex-shrink: 0 !important;
                -webkit-mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/RkZDEmpclHrP6YwfPWcXjY0lDhU0lMtK3ZwYWeMr.svg') no-repeat center !important;
              -webkit-mask-size: 24px 24px !important;
                mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/RkZDEmpclHrP6YwfPWcXjY0lDhU0lMtK3ZwYWeMr.svg') no-repeat center !important;
              mask-size: 24px 24px !important;
                transition: transform 0.3s ease !important;
                filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) !important;
            }

            .header__signup::before {
                content: "" !important;
                background-color: #000000 !important;
                width: 22px !important;
                height: 22px !important;
                display: inline-block !important;
                margin-right: 6px !important;
              flex-shrink: 0 !important;
                -webkit-mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/WkRzEpsFEVlYbEwIwEVNEeVuYkkzOHmBVy5pXIyh.svg') no-repeat center !important;
                -webkit-mask-size: 22px 22px !important;
                mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/WkRzEpsFEVlYbEwIwEVNEeVuYkkzOHmBVy5pXIyh.svg') no-repeat center !important;
                mask-size: 22px 22px !important;
                transition: transform 0.3s ease !important;
                animation: iconBounce 2.5s infinite ease-in-out !important;
            }

            /* SVG animasyonları - desktop */
            @keyframes iconBounce {
                0%, 100% { 
                    transform: translateY(0px) scale(1);
                }
                50% { 
                    transform: translateY(-2px) scale(1.02);
                }
            }

            /* Hover'da iconları büyüt */
            .header__signin:hover::before {
                transform: scale(1.1) !important;
            }

            .header__signup:hover::before {
                transform: scale(1.1) !important;
                background-color: #000000 !important;
            }

            /* Shine efekti - sadece giriş yap için */
            .header__signin::after {
                content: '' !important;
                position: absolute !important;
                top: 0 !important;
                left: -100% !important;
                width: 100% !important;
                height: 100% !important;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent) !important;
                transition: left 0.6s ease !important;
                z-index: 1 !important;
            }

            .header__signin:hover::after {
                left: 100% !important;
            }

            /* Mobil - yazılı butonlar */
            @media (max-width: 767px) {
                .header__actions { 
                    gap: 6px !important; 
                }

                .header__signin, .header__signup {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    height: 50px !important;
                    padding: 0 14px !important;
                    font-size: 15px !important;
                    font-weight: 700 !important;
                    text-transform: uppercase !important;
                    border-radius: 8px !important;
                    gap: 6px !important;
                    min-width: 110px !important;
                    width: auto !important;
                    white-space: nowrap !important;
                }

                /* Mobilde giriş yap - sadece icon */
                .header__signin {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%) !important;
                    border: 1px solid rgba(255, 229, 92, 0.1) !important;
                    color: var(--tf-tc) !important;
                    width: 50px !important;
                    min-width: 50px !important;
                    max-width: 50px !important;
                    height: 50px !important;
                    padding: 0 !important;
                    gap: 0 !important;
                    justify-content: center !important;
                    align-items: center !important;
                    overflow: hidden !important;
                }

                /* Mobilde giriş yap yazısını tamamen gizle */
                .header__signin span {
                    display: none !important;
                    visibility: hidden !important;
                    width: 0 !important;
                    height: 0 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }

                /* Giriş yap text elementini tamamen kaldır */
                .header__signin::after {
                    display: none !important;
                }

                /* Mobilde kayıt ol - web stilinde */
                .header__signup {
                    background: linear-gradient(135deg, #FFE55C 0%, #e6ad00 100%) !important;
                    border: 2px solid #FFE55C !important;
                    color: #000000 !important;
                    box-shadow: 
                        0 4px 12px rgba(255, 193, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
                    position: relative !important;
                    overflow: hidden !important;
                    animation: none !important;
                }

                /* Mobilde kayıt ol - shine efekti */
                .header__signup::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: -100% !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent) !important;
                    animation: mobileShine 3s infinite !important;
                    z-index: 1 !important;
                }

                @keyframes mobileShine {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }

                /* Mobil iconlar - 20px uniform with animation */
                .header__signin::before {
                    content: "" !important;
                    width: 20px !important;
                    height: 20px !important;
                    margin-right: 0 !important;
                    flex-shrink: 0 !important;
                    /* Mask yerine data-URI SVG kullan */
                    -webkit-mask: none !important;
                    mask: none !important;
                    background-color: transparent !important;
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffc100"><path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/></svg>') !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-size: 20px 20px !important;
                    display: inline-block !important;
                }

                .header__signup::before {
                    content: "" !important;
                    width: 20px !important;
                    height: 20px !important;
                    -webkit-mask-size: 20px 20px !important;
                    mask-size: 20px 20px !important;
                    margin-right: 8px !important;
                    flex-shrink: 0 !important;
                    transition: transform 0.3s ease !important;
                    animation: iconPulse 2s infinite ease-in-out !important;
                    background-color: #000000 !important;
                    -webkit-mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/WkRzEpsFEVlYbEwIwEVNEeVuYkkzOHmBVy5pXIyh.svg') no-repeat center !important;
                    mask: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/mini-sliders/WkRzEpsFEVlYbEwIwEVNEeVuYkkzOHmBVy5pXIyh.svg') no-repeat center !important;
                    display: inline-block !important;
                    z-index: 2 !important;
                }

                /* SVG animasyonları - mobil */
                @keyframes iconPulse {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% { 
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                }

                /* Mobil hover */
                .header__signin:hover {
                    background: linear-gradient(135deg, rgba(255, 229, 92, 0.08) 0%, rgba(255, 229, 92, 0.04) 100%) !important;
                    border-color: rgba(255, 229, 92, 0.3) !important;
                    color: #ffffff !important;
                }

                .header__signup:hover {
                    background: linear-gradient(135deg, #FFED4A 0%, #FFB84D 100%) !important;
                    box-shadow: 0 4px 15px rgba(255, 229, 92, 0.3) !important;
                    transform: translateY(-1px) !important;
                }

                /* Mobilde glow efektini kapat */
                .header__signup::after {
                    display: none !important;
                }
            }
            `;
            document.head.appendChild(style);

            // Metin ekle - iconlar CSS'te
            const signinBtn = headerActions.querySelector('.header__signin');
            const signupBtn = headerActions.querySelector('.header__signup');

            if (signinBtn) {
                signinBtn.innerHTML = '<span>Giriş Yap</span>';
            }

            if (signupBtn) {
                signupBtn.innerHTML = '<span>Kayıt Ol</span>';
            }

            clearInterval(interval);
        }
    }, 100);
})();

/* ===== header/logo_css_loader.js ===== */
// Header Logo CSS Yükleyici - logo_up.css'i zorunlu yükler
(function() {
    'use strict';
    
    console.log('🎯 Header Logo CSS Yükleyici başlatılıyor...');
    
    // logo_up.css zaten yüklü mü kontrol et
    function isLogoCSSLoaded() {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        for (let link of links) {
            if (link.href.includes('logo_up.css')) {
                console.log('✅ logo_up.css zaten yüklü:', link.href);
                return true;
            }
        }
        return false;
    }
    
    // logo_up.css'i yükle
    function loadLogoCSS() {
        if (isLogoCSSLoaded()) {
            console.log('✅ logo_up.css zaten yüklü, kontrol ediliyor...');
            return;
        }
        
        const logoLink = document.createElement('link');
        logoLink.rel = 'stylesheet';
        logoLink.type = 'text/css';
        logoLink.href = './header/logo_up.css';
        logoLink.media = 'all';
        logoLink.id = 'header-logo-styles';
        
        // CSS yüklenme durumunu takip et
        logoLink.onload = function() {
            console.log('✅ Header logo_up.css başarıyla yüklendi!');
            // CSS yüklendiğini document'e bildir
            document.documentElement.setAttribute('data-logo-css-loaded', 'true');
            
            // Hemen CSS test et
            setTimeout(() => {
                const headerLogo = document.querySelector('.header__logo');
                if (headerLogo) {
                    console.log('🔍 Header logo bulundu, stiller kontrol ediliyor...');
                    const style = getComputedStyle(headerLogo);
                    console.log('📏 Logo boyutları:', {
                        width: style.width,
                        height: style.height,
                        backgroundSize: style.backgroundSize,
                        position: style.position,
                        left: style.left
                    });
                }
            }, 100);
        };
        
        logoLink.onerror = function() {
            console.error('❌ logo_up.css yüklenemedi!');
            console.log('🔄 Alternatif yol deneniyor...');
            
            // Alternatif yol - inline styles
            loadInlineStyles();
        };
        
        // Head'in en sonuna ekle (diğer CSS'lerden sonra - override için)
        document.head.appendChild(logoLink);
        
        console.log('📄 logo_up.css yükleniyor...', logoLink.href);
    }
    
    // Inline styles - backup
    function loadInlineStyles() {
        console.log('🔧 Inline logo styles enjekte ediliyor...');
        
        const inlineStyle = document.createElement('style');
        inlineStyle.id = 'header-logo-inline-backup';
        inlineStyle.textContent = `
        /* Header Logo Backup Styles */
        .header__logo {
            background: var(--tf-logo) no-repeat left center !important;
            width: 140px !important;
            height: 70px !important;
            padding: 35px !important;
            background-size: auto 45px !important;
            transition: all 0.3s ease !important;
            display: flex !important;
            align-items: center !important;
            cursor: pointer !important;
            text-decoration: none !important;
            position: relative !important;
            z-index: 50 !important;
        }
        
        /* Login olmayan kullanıcılar - %15 büyük */
        .header:not(.header--logged) .header__logo {
            width: 230px !important;
            height: 109px !important;
            background-size: auto 66px !important;
        }
        
        /* Sidebar kapalıyken ortalı */
        @media (min-width: 1200px) {
            .sidebar.active + * .header__logo,
            .sidebar.active ~ * .header__logo,
            body.sidebar-closed .header__logo {
                position: relative !important;
                left: auto !important;
                top: auto !important;
                z-index: 1060 !important;
                margin: 0 auto !important;
            }
            
            .sidebar.active ~ * .header__content,
            body.sidebar-closed .header__content {
                justify-content: center !important;
                padding-left: 90px !important;
            }
        }
        `;
        
        document.head.appendChild(inlineStyle);
        console.log('✅ Inline backup styles yüklendi');
    }
    
    // CSS yükleme kontrolü
    function ensureLogoStyles() {
        const interval = setInterval(() => {
            const headerLogo = document.querySelector('.header__logo');
            if (headerLogo) {
                console.log('🎯 Header logo elementi bulundu');
                loadLogoCSS();
                clearInterval(interval);
            }
        }, 100);
        
        // 10 saniye sonra timeout
        setTimeout(() => {
            clearInterval(interval);
            console.log('⏰ Header logo yükleme timeout - backup styles kullanılıyor');
            loadInlineStyles();
        }, 10000);
    }
    
    // DOM hazır olduğunda başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureLogoStyles);
    } else {
        ensureLogoStyles();
    }
    
    // Sayfa tamamen yüklendiğinde de kontrol et
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!isLogoCSSLoaded()) {
                console.log('🔄 Sayfa yüklendi ama logo CSS yok, tekrar deneniyor...');
                loadLogoCSS();
            }
        }, 500);
    });
    
    console.log('🎯 Header Logo CSS Yükleyici hazır');
})();


/* ===== iframe_spor/spor_css_replacer.js ===== */
(function() {
    // Spor CSS Değiştirici - Sarı-Siyah Tema Entegrasyonu
    function initSporCSSReplacer() {
        console.log('🎨 Spor CSS Değiştirici başlatılıyor...');
        
        // Yeni CSS dosyası URL'i
        const newCSSUrl = 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/styles/wbXCB7WJQitKbqrKRDy5W8tWoLdI7dXZ.css';
        
        // Eski CSS dosyası pattern'i
        const oldCSSPattern = /D8LdIMjLmlFFD9WdC8XXYcT9sUshpVza\.css/g;
        
        // Spor iframe'ini bul ve CSS'ini değiştir
        function replaceSporCSS() {
            // Spor iframe'ini bul
            const sporIframe = document.getElementById('bcsportsbookiframe');
            
            if (sporIframe) {
                const currentSrc = sporIframe.src;
                
                // Eğer eski CSS kullanılıyorsa yenisiyle değiştir
                if (oldCSSPattern.test(currentSrc)) {
                    const newSrc = currentSrc.replace(oldCSSPattern, 'wbXCB7WJQitKbqrKRDy5W8tWoLdI7dXZ.css');
                    sporIframe.src = newSrc;
                    console.log('✅ Spor iframe CSS güncellendi - Sarı-Siyah tema aktif');
                    console.log('🔗 Yeni CSS:', newCSSUrl);
                    return true;
                }
            }
            return false;
        }
        
        // Spor iframe container'ını bul ve içeriğini değiştir  
        function updateSporIframeHTML() {
            // Spor iframe HTML dosyasının içeriğini güncelleyen fonksiyon
            const sporContainers = document.querySelectorAll('iframe[src*="spor-iframe.html"], iframe[src*="esportings.com"]');
            
            sporContainers.forEach(iframe => {
                const currentSrc = iframe.src;
                if (oldCSSPattern.test(currentSrc)) {
                    const newSrc = currentSrc.replace(oldCSSPattern, 'wbXCB7WJQitKbqrKRDy5W8tWoLdI7dXZ.css');
                    iframe.src = newSrc;
                    console.log('✅ Spor container CSS güncellendi');
                }
            });
        }
        
        // URL'deki CSS parametresini değiştir
        function replaceCSSInURL(url) {
            return url.replace(oldCSSPattern, 'wbXCB7WJQitKbqrKRDy5W8tWoLdI7dXZ.css');
        }
        
        // Spor sayfası kontrolü
        function isSportPage() {
            const path = window.location.pathname;
            const hash = window.location.hash;
            
            return path.includes('/sportsbook') || 
                   path.includes('/sport') || 
                   hash.includes('sport') ||
                   document.querySelector('iframe[src*="esportings.com"]') !== null;
        }
        
        // MutationObserver ile yeni iframe'leri izle
        function observeNewIframes() {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            // Yeni iframe eklendiğinde kontrol et
                            if (node.tagName === 'IFRAME' && node.src && oldCSSPattern.test(node.src)) {
                                node.src = replaceCSSInURL(node.src);
                                console.log('✅ Yeni iframe CSS güncellendi');
                            }
                            
                            // İçinde iframe olan elementler için
                            const iframes = node.querySelectorAll && node.querySelectorAll('iframe[src*="esportings.com"], iframe[src*="D8LdIMjLmlFFD9WdC8XXYcT9sUshpVza"]');
                            if (iframes && iframes.length > 0) {
                                iframes.forEach(iframe => {
                                    if (oldCSSPattern.test(iframe.src)) {
                                        iframe.src = replaceCSSInURL(iframe.src);
                                        console.log('✅ İç iframe CSS güncellendi');
                                    }
                                });
                            }
                        }
                    });
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            return observer;
        }
        
        // Ana çalıştırma fonksiyonu
        function runCSSReplacer() {
            // Hemen kontrol et ve değiştir
            if (replaceSporCSS()) {
                console.log('🎯 İlk kontrol: CSS başarıyla değiştirildi');
            }
            
            // HTML container'ları da kontrol et
            updateSporIframeHTML();
            
            // Sürekli kontrol için interval (daha az sıklıkta)
            setInterval(function() {
                if (isSportPage()) {
                    replaceSporCSS();
                    updateSporIframeHTML();
                }
            }, 3000); // Her 3 saniyede kontrol et
            
            // Yeni iframe'leri izle
            observeNewIframes();
            
            console.log('🚀 Spor CSS değiştirici aktif - Sarı-Siyah tema hazır');
        }
        
        // Hemen başlat
        runCSSReplacer();
        
        // Sayfa yüklendiğinde tekrar kontrol et
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runCSSReplacer);
        } else {
            setTimeout(runCSSReplacer, 100);
        }
        
        // Window load'da da kontrol et
        window.addEventListener('load', function() {
            setTimeout(runCSSReplacer, 500);
        });
    }
    
    // Hemen başlat
    initSporCSSReplacer();
    
    // Global fonksiyon olarak da export et
    window.replaceSporCSS = initSporCSSReplacer;
    
})();


/* ===== promo_buton/promo_image_fixer.js ===== */
/* Promosyon Butonları Görsel URL Düzeltici */
(function() {
    // Doğru görsel URL'leri - Vendor provider kullanıyor
    const correctImageUrls = {
        'Casino': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/casino.png',
        'Spor': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/spor.png',
        'Slot': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/slot.png',
        'Live Casino': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/live-casino.png',
        'Poker': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/poker.png',
        'Blackjack': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/blackjack.png',
        'Rulet': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/rulet.png',
        'Aviator': 'https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/ep3YGM2vykm19eefqTFkF0LvamjEEULx/promo-icons/aviator.png'
    };

    // Görsel URL'lerini düzelten fonksiyon
    function fixPromoImages() {
        // Tüm kategori tile'larını bul
        const categoryTiles = document.querySelectorAll('.category-tile');
        
        categoryTiles.forEach(tile => {
            const titleElement = tile.querySelector('.category-title');
            const imgElement = tile.querySelector('.category-image img');
            
            if (titleElement && imgElement) {
                const categoryTitle = titleElement.textContent.trim();
                
                // Eğer bu kategori için doğru URL varsa hemen güncelle
                if (correctImageUrls[categoryTitle]) {
                    const correctSrc = correctImageUrls[categoryTitle];
                    
                    // Hemen doğru URL'yi ata (yüklenmesini bekleme)
                    imgElement.src = correctSrc;
                    imgElement.alt = categoryTitle;
                    
                    // Görsel yüklenme hatası durumunda fallback
                    imgElement.onerror = function() {
                        console.warn(`Görsel yüklenemedi: ${correctSrc}`);
                        // Varsayılan bir görsel veya ikon kullan
                        this.style.background = 'linear-gradient(45deg, #333, #555)';
                        this.style.display = 'flex';
                        this.style.alignItems = 'center';
                        this.style.justifyContent = 'center';
                        this.innerHTML = '<span style="color: #FFE55C; font-size: 24px;">★</span>';
                    };
                    
                    console.log(`Görsel hemen güncellendi: ${categoryTitle} -> ${correctSrc}`);
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

/* ===== yatirim_uyari_sistemi/yatirim_uyari.js ===== */
(function() {
    'use strict';
    
    // Konfigürasyon
    const CONFIG = {
        cssPath: 'yatirim_uyari_sistemi/yatirim_uyari.css',
        warningId: 'jojova-smart-contract-warning',
        selectors: {
            walletModal: ['#wallet-modal', '[id*="wallet"]', '.modal[style*="display: block"]'],
            formCellar: '.form__cellar',
            formErrors: '.form__note.error',
            withdrawButtons: 'button, input[type="submit"], .btn',
            currencySelectors: [
                '.currency-selector',
                '.currency-dropdown',
                '[data-currency]',
                '.selected-currency',
                '.currency-item.active',
                '.currency-item.selected',
                '.modal__form select',
                '.form-select',
                'select[name*="currency"]',
                'select[name*="coin"]',
                '.currency-symbol',
                '.coin-symbol'
            ]
        },
        withdrawKeywords: ['Çek', 'Withdraw', 'TALEP'],
        // Kripto para birimleri listesi
        cryptoCurrencies: [
            'USDT', 'BTC', 'ADA', 'AVAX', 'XRP', 'SHIB', 'LINK', 'USDC', 'BNB', 'ETH', 'TRX', 'DOGE', 'LTC',
            // Ek yaygın kriptolar
            'SOL', 'DOT', 'MATIC', 'UNI', 'BCH', 'XLM', 'ALGO', 'VET', 'ICP', 'FIL', 'ETC', 'NEAR', 'ATOM', 'HBAR'
        ],
        messages: {
            tr: {
                warning: '<strong>• Dikkat:</strong> Akıllı sözleşme cüzdanlarından yapılan para yatırma işlemleri desteklenmemektedir. Bu tür işlemlerde fonlarınızın kaybolma riski bulunmaktadır.'
            },
            en: {
                warning: '<strong>• Warning:</strong> Deposits from smart contract wallets are not supported. There is a risk of losing your funds in such transactions.'
            }
        }
    };
    
    // Durum yönetimi
    let isInitialized = false;
    let observers = [];
    let periodicInterval = null;
    
    // Dil tespiti
    function getCurrentLanguage() {
        return window.location.href.includes('/tr/') ? 'tr' : 'en';
    }

    // Mevcut seçili para birimini tespit et
    function getCurrentCurrency() {
        // Önce URL'den para birimi tespiti - en güvenilir yöntem
        const urlParams = new URLSearchParams(window.location.search);
        const currencyFromUrl = urlParams.get('currency');
        if (currencyFromUrl) {
            console.log('JOJOVA Currency detected from URL:', currencyFromUrl.toUpperCase());
            return currencyFromUrl.toUpperCase();
        }
        
        // URL'de currency yoksa hash'ten kontrol et
        const hash = window.location.hash;
        const hashMatch = hash.match(/currency=([^&]+)/);
        if (hashMatch) {
            console.log('JOJOVA Currency detected from hash:', hashMatch[1].toUpperCase());
            return hashMatch[1].toUpperCase();
        }
        
        // URL'de currency yoksa DOM'dan seçili para birimini tespit et
        const domCurrency = getCurrentCurrencyFromDOM();
        if (domCurrency) {
            console.log('JOJOVA Currency detected from DOM:', domCurrency.toUpperCase());
            return domCurrency.toUpperCase();
        }
        
        console.log('JOJOVA No currency detected');
        return null;
    }

    // DOM'dan mevcut seçili para birimini tespit et
    function getCurrentCurrencyFromDOM() {
        // Çeşitli selektörlerle seçili para birimini bul
        const selectors = [
            '.currency-item.active',
            '.currency-item.selected',
            '.selected-currency',
            '.currency-selector .active',
            '.currency-dropdown .selected',
            '[data-currency].active',
            '[data-currency].selected',
            '.modal__form select option:checked',
            '.form-select option:checked',
            'select[name*="currency"] option:checked',
            'select[name*="coin"] option:checked',
            '.currency-symbol.active',
            '.coin-symbol.active',
            '.currency-list .selected',
            '.crypto-currency.active'
        ];
        
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                // Element'in text içeriğinden para birimini çıkar
                let currency = element.textContent?.trim() || 
                              element.getAttribute('data-currency') || 
                              element.value;
                
                if (currency) {
                    // Sadece para birimi kodunu al (örn: "BTC Bitcoin" -> "BTC")
                    const currencyMatch = currency.match(/^([A-Z]{2,5})/);
                    if (currencyMatch) {
                        return currencyMatch[1];
                    }
                    
                    // Eğer direkt para birimi kodu ise
                    if (/^[A-Z]{2,5}$/.test(currency)) {
                        return currency;
                    }
                }
            }
        }
        
        // Alternatif yöntem: Modal içindeki tüm elementleri tara
        const modal = findWalletModal();
        if (modal) {
            const allElements = modal.querySelectorAll('*');
            for (const element of allElements) {
                const text = element.textContent?.trim();
                if (text) {
                    // Kripto para birimi pattern'ini ara
                    for (const crypto of CONFIG.cryptoCurrencies) {
                        if (text.includes(crypto) && 
                            (element.classList.contains('active') || 
                             element.classList.contains('selected') ||
                             element.style.display !== 'none')) {
                            return crypto;
                        }
                    }
                }
            }
        }
        
        return null;
    }
    
    // Para biriminin kripto olup olmadığını kontrol et
    function isCryptoCurrency(currency) {
        if (!currency) return false;
        
        const upperCurrency = currency.toUpperCase();
        
        // Direkt eşleşme kontrolü
        if (CONFIG.cryptoCurrencies.includes(upperCurrency)) {
            return true;
        }
        
        // Kısmi eşleşme kontrolü (örn: "BTC Bitcoin" için)
        return CONFIG.cryptoCurrencies.some(crypto => 
            upperCurrency.includes(crypto) || crypto.includes(upperCurrency)
        );
    }

    // Deposit ve Withdraw tab kontrolü - kripto kontrolü eklendi
    function isTargetTabActive() {
        // Wallet modal açıksa kontrol et
        if (!window.location.href.includes('modal=wallet')) {
            return false;
        }
        
        // Kripto para birimi kontrolü
        const currentCurrency = getCurrentCurrency();
        const isCrypto = isCryptoCurrency(currentCurrency);
        
        console.log('JOJOVA Currency check:', {
            currency: currentCurrency,
            isCrypto: isCrypto,
            url: window.location.href,
            domDetection: !!getCurrentCurrencyFromDOM()
        });
        
        if (!isCrypto) {
            return false; // Kripto değilse uyarı gösterme
        }
        
        // Eğer tab parametresi yoksa default deposit tab'ı aktiftir
        if (!window.location.href.includes('tab=')) {
            return true; // Default deposit tab
        }
        
        // Tab parametresi varsa deposit veya withdraw kontrolü yap
        return window.location.href.includes('tab=deposit') || 
               window.location.href.includes('tab=withdraw');
    }
    
    // CSS yükleme
    function loadCSS() {
        if (document.querySelector(`link[href="${CONFIG.cssPath}"]`)) return;
        
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = CONFIG.cssPath;
        document.head.appendChild(cssLink);
    }

    // Mevcut warning'leri temizle
    function removeExistingWarnings() {
        document.querySelectorAll(`#${CONFIG.warningId}`).forEach(warning => {
            warning.parentElement?.remove();
        });
    }
    
    // Wallet modal bulma
    function findWalletModal() {
        for (const selector of CONFIG.selectors.walletModal) {
            const modal = document.querySelector(selector);
            if (modal) return modal;
        }
        return null;
    }
    
    // Warning ekleme - deposit ve withdraw tab'larında
    function addWarningToWallet() {
        // Önce target tab kontrolü yap
        if (!isTargetTabActive()) {
            removeExistingWarnings();
            return false;
        }
        
        const walletModal = findWalletModal();
        if (!walletModal) return false;
        
        // Eğer warning zaten varsa tekrar ekleme
        if (document.querySelector(`#${CONFIG.warningId}`)) {
            return true;
        }
        
        // modal__form div'ini bul
        const modalFormDiv = walletModal.querySelector('.modal__form');
        if (!modalFormDiv) return false;
        
        // Dil bazlı mesaj al
        const currentLang = getCurrentLanguage();
        const warningMessage = CONFIG.messages[currentLang].warning;
        
        const warningHTML = `
            <div style="margin-top: 10px; margin-bottom: 10px; position: relative; z-index: 1000;">
                <div class="jojova-warning-container" id="${CONFIG.warningId}">
                    <div class="jojova-warning-text">
                        ${warningMessage}
                    </div>
                </div>
            </div>
        `;
        
        // modal__form'ın en altına ekle
        modalFormDiv.insertAdjacentHTML('beforeend', warningHTML);
        return true;
    }
    
    // Form error stillerini güncelle
    function updateFormErrorStyles() {
        if (!isTargetTabActive()) return;
        
        document.querySelectorAll(CONFIG.selectors.formErrors).forEach(error => {
            if (!error.classList.contains('jojova-updated')) {
                error.classList.add('jojova-updated');
            }
        });
    }
    
    // Ana güncelleme fonksiyonu
    function updateWarningSystem() {
        if (isTargetTabActive()) {
            addWarningToWallet();
            updateFormErrorStyles();
        } else {
            // Target tab değilse warning'i kaldır
            removeExistingWarnings();
        }
    }
    
    // Debounce fonksiyonu
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Çekim butonu kontrolü
    function isWithdrawButton(button) {
        const text = button.textContent || '';
        return CONFIG.withdrawKeywords.some(keyword => text.includes(keyword));
    }
    
    // Event listener'ları temizle
    function cleanup() {
        observers.forEach(observer => observer.disconnect());
        observers = [];
        
        if (periodicInterval) {
            clearInterval(periodicInterval);
            periodicInterval = null;
        }
    }
    
    // URL değişiklik izleme - OPTİMİZE EDİLDİ (interval kaldırıldı)
    function watchURLChanges() {
        // History API override - tek seferlik (interval yerine event-driven)
        if (!window.jojovaHistoryPatched) {
            const originalPushState = history.pushState;
            const originalReplaceState = history.replaceState;
            
            history.pushState = function() {
                originalPushState.apply(history, arguments);
                setTimeout(updateWarningSystem, 100);
            };
            
            history.replaceState = function() {
                originalReplaceState.apply(history, arguments);
                setTimeout(updateWarningSystem, 100);
            };
            
            window.jojovaHistoryPatched = true;
        }
        
        window.addEventListener('popstate', updateWarningSystem);
        window.addEventListener('hashchange', updateWarningSystem);
    }
    
    // DOM değişiklik observer'ı - DAHA DA OPTİMİZE
    function setupDOMObserver() {
        const debouncedUpdate = debounce(updateWarningSystem, 500); // 300 yerine 500
        
        let mutationCount = 0;
        const observer = new MutationObserver(function(mutations) {
            mutationCount++;
            
            // 50 mutation sonra observer'ı durdur
            if (mutationCount > 50) {
                observer.disconnect();
                return;
            }
            
            let shouldUpdate = false;
            
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const id = node.id || '';
                            const className = typeof node.className === 'string' ? node.className : '';
                            
                            // Sadece wallet/modal ile ilgili değişiklikleri izle
                            if (id.includes('wallet') || id.includes('modal') ||
                                className.includes('modal') || className.includes('wallet')) {
                                shouldUpdate = true;
                                break;
                            }
                        }
                    }
                    if (shouldUpdate) break;
                }
            }
            
            if (shouldUpdate) {
                debouncedUpdate();
            }
        });
        
        // Sadece main content'i izle (body yerine)
        const mainContent = document.getElementById('main__content') || document.body;
        observer.observe(mainContent, {
            childList: true,
            subtree: true,
            attributes: false // Attribute izleme kaldırıldı
        });
        
        observers.push(observer);
        
        // 60 saniye sonra observer'ı durdur
        setTimeout(() => observer.disconnect(), 60000);
    }
    
    // Tab click observer'ı - optimize edilmiş
    function setupTabClickObserver() {
        // Event delegation kullanarak performansı artır
        document.body.addEventListener('click', function(e) {
            const target = e.target;
            
            // Tab benzeri elementlere tıklanırsa
            if (target.tagName === 'BUTTON' || 
                target.classList.contains('tab') ||
                target.classList.contains('nav-link') ||
                target.hasAttribute('data-tab')) {
                setTimeout(updateWarningSystem, 50);
            }
        }, { passive: true });
    }
    
    // Periyodik kontrol - KALDIRILDI, sadece event-driven
    function startPeriodicCheck() {
        // Artık periyodik kontrol yok, history API ve observer yeterli
        // Bu fonksiyon geriye dönük uyumluluk için boş bırakıldı
    }
    
    // Ana başlatma fonksiyonu - optimize edilmiş
    function init() {
        if (isInitialized) return;
        
        // CSS yükle
        loadCSS();
        
        // İlk güncelleme
        updateWarningSystem();
        
        // Observer'ları başlat
        setupDOMObserver();
        setupTabClickObserver();
        watchURLChanges();
        startPeriodicCheck();
        
        isInitialized = true;
    }
    
    // Event listener'lar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    window.addEventListener('load', init);
    
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            updateWarningSystem();
        }
    });
    
    // Sayfa kapatılırken temizlik
    window.addEventListener('beforeunload', cleanup);
    
})(); 

/* ===== page_loader.js ===== */
// Loader Kontrol Sistemi - OPTİMİZE EDİLMİŞ VERSİYON
// Periyodik kontroller kaldırıldı, sadece MutationObserver kullanılıyor
(function() {
    'use strict';
    
    let loaderHidden = false;
    let autoHidePrevented = false;
    
    // Root loader'ını bul
    function findRootLoader() {
        const root = document.getElementById('root');
        if (root) {
            const loaderContainer = root.querySelector('div[style*="background-color: rgb(0, 0, 0)"]');
            if (loaderContainer) {
                return { root, loaderContainer };
            }
        }
        return null;
    }
    
    // Loader'ı gizle (manuel kontrol için)
    window.hidePageLoader = function() {
        if (loaderHidden) return;
        
        const loader = findRootLoader();
        if (loader) {
            const { root, loaderContainer } = loader;
            
            loaderContainer.style.transition = 'opacity 0.5s ease-out';
            loaderContainer.style.opacity = '0';
            
            setTimeout(() => {
                root.style.display = 'none';
                loaderHidden = true;
            }, 500);
        }
    };
    
    // Loader'ı göster (manuel kontrol için)
    window.showPageLoader = function() {
        const loader = findRootLoader();
        if (loader) {
            const { root, loaderContainer } = loader;
            
            root.style.display = 'block';
            loaderContainer.style.opacity = '1';
            loaderHidden = false;
        }
    };
    
    // Loader'ı X saniye sonra gizle
    window.hidePageLoaderAfter = function(seconds) {
        setTimeout(() => {
            window.hidePageLoader();
        }, seconds * 1000);
    };
    
    // Otomatik kaybolmayı engelle - SADECE OBSERVER KULLAN (interval kaldırıldı)
    function preventAutoHide() {
        if (autoHidePrevented) return;
        
        const loader = findRootLoader();
        if (loader) {
            autoHidePrevented = true;
            
            const { root, loaderContainer } = loader;
            
            // 1. Root'un display:none olmasını engelle
            const rootObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        const target = mutation.target;
                        if (target.style.display === 'none') {
                            target.style.display = 'block';
                        }
                    }
                });
            });
            
            rootObserver.observe(root, {
                attributes: true,
                attributeFilter: ['style']
            });
            
            // 2. Loader container'ın opacity değişimini engelle
            const containerObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        const target = mutation.target;
                        if (target.style.opacity === '0') {
                            target.style.opacity = '1';
                        }
                    }
                });
            });
            
            containerObserver.observe(loaderContainer, {
                attributes: true,
                attributeFilter: ['style']
            });
            
            // 3. CSS override ekle (interval yerine CSS ile koruma)
            const style = document.createElement('style');
            style.id = 'loader-protection';
            style.textContent = `
                #root {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                #root > div[style*="background-color: rgb(0, 0, 0)"] {
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: flex !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Loader'ı bul ve kontrolü başlat - MAX 5 DENEME
    let initAttempts = 0;
    function initLoader() {
        if (initAttempts >= 5) return; // Max 5 deneme
        initAttempts++;
        
        const loader = findRootLoader();
        if (loader) {
            preventAutoHide();
        } else {
            setTimeout(initLoader, 200); // 100ms yerine 200ms
        }
    }
    
    // DOM hazır olduğunda başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoader);
    } else {
        initLoader();
    }
})();


/* ===== SCRIPT/login.js ===== */
// Modal açıldığında çalışacak fonksiyon
function removeRowAndColClasses() {
    // Tüm settings__form div'lerini yakala
    var settingsForms = document.querySelectorAll('#signup-modal .modal__form .settings__form');
    
    // 3. ve 4. settings__form div'lerini seç (index 2 ve 3)
    if (settingsForms.length >= 4) {
        var thirdForm = settingsForms[2];  // 3. div (index 2)
        var fourthForm = settingsForms[3]; // 4. div (index 3)
        
        // 3. settings__form içindeki row ve col class'larını sil
        if (thirdForm) {
            var rowElements = thirdForm.querySelectorAll('.row');
            rowElements.forEach(function(row) {
                row.classList.remove('row');
            });
            
            var colElements = thirdForm.querySelectorAll('.col-6, .col-xl-6, .col-xxl-6');
            colElements.forEach(function(col) {
                col.classList.remove('col-6', 'col-xl-6', 'col-xxl-6');
            });
        }
        
        // 4. settings__form içindeki row ve col class'larını sil
        if (fourthForm) {
            var rowElements = fourthForm.querySelectorAll('.row');
            rowElements.forEach(function(row) {
                row.classList.remove('row');
            });
            
            var colElements = fourthForm.querySelectorAll('.col-6, .col-xl-6, .col-xxl-6');
            colElements.forEach(function(col) {
                col.classList.remove('col-6', 'col-xl-6', 'col-xxl-6');
            });
        }
        
        console.log('3. ve 4. settings__form div\'lerindeki row ve col class\'ları silindi!');
        console.log('Toplam settings__form sayısı:', settingsForms.length);
    } else {
        console.log('Yeterli settings__form bulunamadı. Mevcut sayı:', settingsForms.length);
    }
}

// Modal açıldığında çalıştır
document.addEventListener('DOMContentLoaded', function() {
    // Modal elementini bul
    var modal = document.getElementById('signup-modal');
    
    if (modal) {
        // Bootstrap modal event'lerini dinle
        modal.addEventListener('shown.bs.modal', function() {
            // Modal tamamen açıldıktan sonra çalıştır
            setTimeout(function() {
                removeRowAndColClasses();
            }, 100);
        });
        
        // Eğer modal zaten açıksa hemen çalıştır
        if (modal.classList.contains('show')) {
            removeRowAndColClasses();
        }
    }
    
    // Modal içeriği değiştiğinde de çalıştır (MutationObserver ile)
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Modal içeriği değişti mi kontrol et
                var modalContent = document.querySelector('#signup-modal .modal__form');
                if (modalContent) {
                    setTimeout(function() {
                        removeRowAndColClasses();
                    }, 200);
                }
            }
        });
    });
    
    // Modal'ı observe et
    if (modal) {
        observer.observe(modal, {
            childList: true,
            subtree: true
        });
    }
});