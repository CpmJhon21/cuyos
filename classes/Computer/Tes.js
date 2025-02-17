function toggleOption(optionId, arrowId) {
    let allOptions = document.querySelectorAll('.hidden'); // Ambil semua opsi
    let allArrows = document.querySelectorAll('.option span'); // Ambil semua tanda panah
    
    allOptions.forEach(option => {
        if (option.id !== optionId) {
            option.style.display = "none"; // Tutup semua kecuali yang diklik
        }
    });

    allArrows.forEach(arrow => {
        if (arrow.id !== arrowId) {
            arrow.innerHTML = "▼"; // Reset semua tanda panah ke bawah
        }
    });

    let option = document.getElementById(optionId);
    let arrow = document.getElementById(arrowId);

    if (option.style.display === "none" || option.style.display === "") {
        option.style.display = "table-row";
        arrow.innerHTML = "▲"; // Ubah ikon menjadi panah atas
    } else {
        option.style.display = "none";
        arrow.innerHTML = "▼"; // Ubah ikon kembali ke panah bawah
    }
}

// Fungsi untuk menutup semua opsi saat tombol ✖ ditekan
document.getElementById("hwClose").addEventListener("click", function() {
    let allOptions = document.querySelectorAll('.hidden');
    let allArrows = document.querySelectorAll('.option span');

    allOptions.forEach(option => {
        option.style.display = "none";
    });

    allArrows.forEach(arrow => {
        arrow.innerHTML = "▼";
    });
});
