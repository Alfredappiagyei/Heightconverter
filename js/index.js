const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.getElementById('output').style.visibility = 'visible';

  const feet = document.getElementById('feet').value;
  const inches = document.getElementById('inches').value;

  if (!feet && !inches) {
    alert('Please fill the form');
    return false;
  }

  const feetCenti = feet * 30.48;
  const inchesCenti = inches * 2.84;
  const total = feetCenti + inchesCenti;

  output = document.querySelector('.output');
  output.innerHTML =
    '<h3 class = "total">' +
    total +
    '<span>' +
    'CM' +
    '</span>' +
    '</h3>';

  document.getElementById('form').reset();
});

