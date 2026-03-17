<script>
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
</script>
 