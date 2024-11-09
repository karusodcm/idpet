const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
  text: 'idpet.org',
  width: 110,
  height: 110
});
