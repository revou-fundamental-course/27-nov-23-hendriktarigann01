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
