//memanggil id hitung luas dan hitung keliling di index.html
document.getElementById("hitung-luas").addEventListener("click", hitungLuas);
document.getElementById("hitung-keliling").addEventListener("click", hitungKeliling);

//proses untuk menghitung luas
function hitungLuas(event) {
  event.preventDefault();

  var sisi = document.getElementById("sisi-luas").value;

  if (sisi === "") {
    alert("Please enter a value for sisi.");
    return;
  }

  var sisiNum = parseFloat(sisi);
  var luas = sisiNum * sisiNum;

  document.getElementById("output_luas").innerHTML = "Luas: " + luas;
}

//proses untuk menghitung keliling
function hitungKeliling(event) {
  event.preventDefault();

  var sisi = document.getElementById("sisi-keliling").value;

  if (sisi === "") {
    alert("Please enter a value for sisi.");
    return;
  }

  var sisiNum = parseFloat(sisi);
  var keliling = 4 * sisiNum;

  document.getElementById("output_keliling").innerHTML = "Keliling: " + keliling;
}

document.getElementById("reset-button").addEventListener("click", reset);

//proses untuk reset/clear input angka(sisi)
function reset(event) {
  event.preventDefault();

  document.getElementById("sisi-luas").value = "";
  document.getElementById("output_luas").innerHTML = "";

  document.getElementById("sisi-keliling").value = "";
  document.getElementById("output_keliling").innerHTML = "";
}