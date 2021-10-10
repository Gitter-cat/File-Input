const fileName = document.getElementById('filename');
const file = document.getElementById('file');

file.onchange = e => {
  const img = document.getElementById('fileImg');
  img.src = URL.createObjectURL(e.target.files[0]);
  fileName.textContent = e.target.files[0].name;

  document.getElementById('txt').style.display = 'none';
}