const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
  text: 'www.idepet.org',
  width: 70,
  height: 70
});
