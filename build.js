/**
 * JOJOVA - Build Script
 * Tüm aktif CSS ve JS dosyalarını versiyonlu bundle'a birleştirir.
 * 
 * Kullanım:
 *   node build.js          → Mevcut versiyonu build eder
 *   node build.js v2       → v2 olarak build eder
 *   node build.js --new    → Mevcut versiyonu +1 artırıp build eder
 */

const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const DIST = path.join(BASE, 'dist');
const CONFIG_FILE = path.join(DIST, 'version.json');

// ============================================================
// AKTİF CSS DOSYALARI (CMS'deki aktif style'lar)
// ============================================================

const CSS_FILES = [
    'fonts.css',
    'Genel_Style/background-effects.css',
    'Genel_Style/banner-slider.css',
    'Genel_Style/features-container.css',
    'Genel_Style/footer-fix.css',
    'Genel_Style/mobile-responsive.css',
    'Genel_Style/originals-container.css',
    'Genel_Style/payment-container.css',
    'Genel_Style/slider-bottom.css',
    'Genel_Style/sport-banner.css',
    'Genel_Style/swiper-slider.css',
    'Genel_Style/welcome-container.css',
    'Genel_Style/comm100-position.css',
    'Sidebar/sidebar_styles2.css',
    'header/logo_up.css',
    'header/header_dropdown.css',
    'header_button_ekleme/beniarabuton.css',
    'badge/badge_style.css',
    'bildirim/bildirim.css',
    'futbol_sekmesi/futbol_sekmesi_fix.css',
    'giris_gorseli/giris_gorseli.css',
    'iframe_spor/D8LdIMjLmlFFD9WdC8XXYcT9sUshpVza.css',
    'popup_new/popup.css',
    'promo_buton/promo_buton.css',
    'promos_img/promos_img.css',
    'signup/signal-modal.css',
    'slot_oncesi_css/slot_oncesi_css.css',
    'slot_oncesi_css/slot_unavailable.css',
    'Sport_Kısmı/css.css',
    'yatirim_uyari_sistemi/yatirim_uyari.css',
    'CSS/main-content.css',
];

// ============================================================
// AKTİF JS DOSYALARI (CMS'deki aktif script'ler)
// ============================================================

const JS_FILES = [
    'Genel_Style/style2.js',
    'Genel_Style/footer_backlink.js',
    'Genel_Style/comm100-chat-position.js',
    'Sidebar/sidebar_reorder_safe2.js',
    'badge/badge_replacer.js',
    'font_loader.js',
    'futbol_sekmesi/futbol_sekmesi.js',
    'header/promo_button.js',
    'header/logo_css_loader.js',
    'iframe_spor/spor_css_replacer.js',
    'promo_buton/promo_image_fixer.js',
    'yatirim_uyari_sistemi/yatirim_uyari.js',
    'page_loader.js',
    'SCRIPT/login.js',
];

// ============================================================
// VERSİYON YÖNETİMİ
// ============================================================

function getConfig() {
    if (fs.existsSync(CONFIG_FILE)) {
        return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
    }
    return { active: 'v1', versions: [] };
}

function saveConfig(config) {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

function getTargetVersion() {
    var arg = process.argv[2];
    var config = getConfig();

    if (arg === '--new') {
        var max = 0;
        config.versions.forEach(function(v) {
            var num = parseInt(v.replace('v', ''));
            if (num > max) max = num;
        });
        return 'v' + (max + 1);
    } else if (arg && arg.startsWith('v')) {
        return arg;
    } else if (arg) {
        return 'v' + arg;
    } else {
        return config.active || 'v1';
    }
}

// ============================================================
// BUILD
// ============================================================

function build(version) {
    var versionDir = path.join(DIST, version);

    if (!fs.existsSync(DIST)) fs.mkdirSync(DIST);
    if (!fs.existsSync(versionDir)) fs.mkdirSync(versionDir);

    // CSS bundle
    var cssContent = '';
    var cssCount = 0;
    CSS_FILES.forEach(function(file) {
        var filePath = path.join(BASE, file);
        if (fs.existsSync(filePath)) {
            var content = fs.readFileSync(filePath, 'utf-8');
            cssContent += '\n/* ===== ' + file + ' ===== */\n' + content + '\n';
            cssCount++;
        } else {
            console.warn('  [!] CSS bulunamadı: ' + file);
        }
    });

    function stripScriptWrappers(content) {
        return content
            .split('\n')
            .filter(function(line) {
                var trimmed = line.trim();
                return !/^<script\b[^>]*>$/i.test(trimmed) && !/^<\/script>$/i.test(trimmed);
            })
            .join('\n');
    }

    // JS bundle
    var jsContent = '';
    var jsCount = 0;
    JS_FILES.forEach(function(file) {
        var filePath = path.join(BASE, file);
        if (fs.existsSync(filePath)) {
            var content = fs.readFileSync(filePath, 'utf-8');
            var normalizedContent = stripScriptWrappers(content);
            jsContent += '\n/* ===== ' + file + ' ===== */\n' + normalizedContent + '\n';
            jsCount++;
        } else {
            console.warn('  [!] JS bulunamadı: ' + file);
        }
    });

    var cssBundlePath = path.join(versionDir, 'bundle.css');
    var jsBundlePath = path.join(versionDir, 'bundle.js');
    fs.writeFileSync(cssBundlePath, cssContent.trim());
    fs.writeFileSync(jsBundlePath, jsContent.trim());

    var config = getConfig();
    if (!config.versions.includes(version)) {
        config.versions.push(version);
        config.versions.sort();
    }
    config.active = version;
    config.lastBuild = new Date().toISOString();
    saveConfig(config);

    buildLoader(version);

    console.log('');
    console.log('  JOJOVA Build - ' + version);
    console.log('  ─────────────────────────────');
    console.log('  CSS: ' + cssCount + ' dosya → ' + cssBundlePath);
    console.log('  JS:  ' + jsCount + ' dosya  → ' + jsBundlePath);
    console.log('  Aktif versiyon: ' + version);
    console.log('  Versiyonlar: ' + config.versions.join(', '));
    console.log('');
    console.log('  CDN URL\'leri (push sonrası):');
    console.log('  CSS: https://cdn.jsdelivr.net/gh/osxmeta/jojova-style@main/dist/' + version + '/bundle.css');
    console.log('  JS:  https://cdn.jsdelivr.net/gh/osxmeta/jojova-style@main/dist/' + version + '/bundle.js');
    console.log('');
}

// ============================================================
// LOADER
// ============================================================

function buildLoader(activeVersion) {
    var loaderContent = '/* JOJOVA Loader */\n' +
        '(function() {\n' +
        '    var V = "' + activeVersion + '";\n' +
        '    var BASE = "https://cdn.jsdelivr.net/gh/osxmeta/jojova-style@main/dist/" + V;\n' +
        '\n' +
        '    var link = document.createElement("link");\n' +
        '    link.rel = "stylesheet";\n' +
        '    link.href = BASE + "/bundle.css";\n' +
        '    document.head.appendChild(link);\n' +
        '\n' +
        '    function loadJS() {\n' +
        '        var script = document.createElement("script");\n' +
        '        script.src = BASE + "/bundle.js";\n' +
        '        (document.body || document.head).appendChild(script);\n' +
        '    }\n' +
        '\n' +
        '    if (document.body) {\n' +
        '        loadJS();\n' +
        '    } else {\n' +
        '        document.addEventListener("DOMContentLoaded", loadJS);\n' +
        '    }\n' +
        '})();\n';

    fs.writeFileSync(path.join(DIST, 'loader.js'), loaderContent);
}

// ============================================================
// ÇALIŞTIR
// ============================================================

var version = getTargetVersion();
build(version);
