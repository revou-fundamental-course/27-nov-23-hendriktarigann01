// KELILING
function hitungKeliling() {
  var SisiA = parseFloat(document.getElementById('input-sisiA').value);
  var SisiB = parseFloat(document.getElementById('input-sisiB').value);
  var SisiC = parseFloat(document.getElementById('input-sisiC').value);
  
  if (!isNaN(SisiA) && !isNaN(SisiB) && !isNaN(SisiC)) {
    var keliling = SisiA + SisiB + SisiC;
    document.getElementById('hasilKeliling').innerHTML = 'Keliling Segitiga: ' + keliling;
  } else {
    document.getElementById('hasilKeliling').innerHTML = 'Masukkan angka yang valid untuk alas dan tinggi';
  }
}

// Fungsi untuk mereset hasil perhitungan
function resetHasil() {
  document.getElementById('hasilKeliling').innerHTML = '';
}

// LUAS
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
function resetHasil2() {
document.getElementById('hasilLuas').innerHTML = '';
}