const formulaSelect = document.getElementById('formula');
const inputsDiv = document.getElementById('inputs');
const resultDiv = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

function createInput(id, label) {
  return `
    <label for="${id}">${label}:</label>
    <input type="number" id="${id}" required />
  `;
}

function updateInputs() {
  let html = '';
  const formula = formulaSelect.value;

  if (formula === 'velocity') {
    html += createInput('distance', 'Jarak (s) dalam meter');
    html += createInput('time', 'Waktu (t) dalam detik');
  } else if (formula === 'force') {
    html += createInput('mass', 'Massa (m) dalam kilogram');
    html += createInput('acceleration', 'Percepatan (a) dalam m/s²');
  } else if (formula === 'kineticEnergy') {
    html += createInput('mass', 'Massa (m) dalam kilogram');
    html += createInput('velocity', 'Kecepatan (v) dalam m/s');
  }

  inputsDiv.innerHTML = html;
  resultDiv.innerHTML = '';
}

function calculate() {
  const formula = formulaSelect.value;
  let res;

  if (formula === 'velocity') {
    const s = parseFloat(document.getElementById('distance').value);
    const t = parseFloat(document.getElementById('time').value);
    if (isNaN(s) || isNaN(t) || t === 0) {
      alert('Masukkan nilai yang valid, dan waktu tidak boleh nol!');
      return;
    }
    res = s / t;
    resultDiv.innerHTML = `Kecepatan (v) = ${res.toFixed(2)} m/s`;
  } else if (formula === 'force') {
    const m = parseFloat(document.getElementById('mass').value);
    const a = parseFloat(document.getElementById('acceleration').value);
    if (isNaN(m) || isNaN(a)) {
      alert('Masukkan nilai yang valid!');
      return;
    }
    res = m * a;
    resultDiv.innerHTML = `Gaya (F) = ${res.toFixed(2)} Newton (N)`;
  } else if (formula === 'kineticEnergy') {
    const m = parseFloat(document.getElementById('mass').value);
    const v = parseFloat(document.getElementById('velocity').value);
    if (isNaN(m) || isNaN(v)) {
      alert('Masukkan nilai yang valid!');
      return;
    }
    res = 0.5 * m * v * v;
    resultDiv.innerHTML = `Energi Kinetik (Ek) = ${res.toFixed(2)} Joule (J)`;
  }
}

formulaSelect.addEventListener('change', updateInputs);
calculateBtn.addEventListener('click', calculate);

// Inisialisasi input saat halaman pertama dimuat
updateInputs();
