function scrolltocontant() {
    document.getElementById("contact").scrollIntoView({behavior : 'auto'});
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerText =
    "pesan berhasil dikirim. Terima kasih";
    this.reset();
});