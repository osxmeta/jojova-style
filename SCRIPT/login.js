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
