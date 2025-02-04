// toogle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghiolangh
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})


function sendToWhatsApp() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nohp = document.getElementById("nohp").value;
    var pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || nohp === "" || pesan === "") {
    alert("Harap isi semua kolom!");
    return;
    }

    var pesanWA = "Halo, saya ingin melaporkan bug atau kesalahan.\n\n";
    pesanWA += "Nama: " + nama + "\n";
    pesanWA += "Email: " + email + "\n";
    pesanWA += "No HP: " + nohp + "\n";
    pesanWA += "Pesan: " + pesan + "\n";

    var nomorWhatsApp = "6289530099864"; // Ganti dengan nomor WhatsApp tujuan (format internasional tanpa "+")
    var url = "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(pesanWA);

    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("nama").focus();
    }, 300);
} )