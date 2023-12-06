function hitungLuas() {
    var alas = parseFloat(document.getElementById('input-alas').value);
    var tinggi = parseFloat(document.getElementById('input-tinggi').value);
  
    if (!isNaN(alas) && !isNaN(tinggi)) {
      var luas = 0.5 * alas * tinggi;
      document.getElementById('hasilLuas').innerHTML = 'Luas Segitiga: ' + luas;
    } else {
      document.getElementById('hasilLuas').innerHTML = 'Masukkan angka yang valid untuk alas dan tinggi';
    }
  }

// Fungsi untuk mereset hasil perhitungan
function resetHasil() {
  document.getElementById('hasilLuas').innerHTML = '';
}