/* JOJOVA Loader */
(function() {
    var V = "v1";
    var BASE = "https://cdn.jsdelivr.net/gh/osxmeta/jojova-style@main/dist/" + V;

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = BASE + "/bundle.css";
    document.head.appendChild(link);

    function loadJS() {
        var script = document.createElement("script");
        script.src = BASE + "/bundle.js";
        (document.body || document.head).appendChild(script);
    }

    if (document.body) {
        loadJS();
    } else {
        document.addEventListener("DOMContentLoaded", loadJS);
    }
})();
