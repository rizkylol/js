atOptions = {
    'key': 'e502fe78a724b36e429b5a0ffe3f37af',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
};

// Buat elemen <script> untuk iklan
var script = document.createElement("script");
script.src = "//bananascasketuntrue.com/e502fe78a724b36e429b5a0ffe3f37af/invoke.js";

// Coba cari elemen "#article-content" untuk meletakkan iklan di atas artikel
var targetDiv = document.getElementById("article-content");

if (targetDiv) {
    targetDiv.insertBefore(script, targetDiv.firstChild);
} else {
    // Jika tidak ditemukan, letakkan di dalam <body> sebagai fallback
    document.body.appendChild(script);
}
