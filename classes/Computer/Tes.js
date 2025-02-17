function toggleOption(optionId, arrowId) {
  let option = document.getElementById(optionId);
  let arrow = document.getElementById(arrowId);

  if (option.style.display === "none" || option.style.display === "") {
    option.style.display = "table-row";  // Menampilkan opsi
    arrow.innerHTML = "▲";  // Mengubah ikon jadi ▲
  } else {
    option.style.display = "none";  // Menyembunyikan opsi
    arrow.innerHTML = "▼";  // Mengubah ikon jadi ▼
  }
}
