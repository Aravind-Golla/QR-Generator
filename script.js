const form = document.getElementById('qr-form');
const qrImage = document.getElementById('qr-image');
const qrResult = document.getElementById('qr-result');
const downloadLink = document.getElementById('download-link');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('url-input').value;

  const response = await fetch('/generate', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ url })
  });

  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);
  qrImage.src = imageUrl;
  downloadLink.href = imageUrl;
  qrResult.style.display = 'block';
});
