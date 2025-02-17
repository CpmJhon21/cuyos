function toggleOption(id) {
  let element = document.getElementById(id);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "table-row";  // Menampilkan opsi
  } else {
    element.style.display = "none";  // Menyembunyikan opsi
  }
}
