const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
  text: 'www.idepet.org',
  width: 110,
  height: 110
});
