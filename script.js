function generateQRCode() {
  var text = document.getElementById("text").value;
  var qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";
  if (text.trim() === "") {
    alert("Lütfen bir metin veya URL girin.");
    return;
  }
  var qrcode = new QRCode(qrcodeDiv, {
    text: text,
    width: 200,
    height: 200,
  });
  document.getElementById("download").style.display = "block";
}

function downloadQRCode() {
  var qrCanvas = document.querySelector("#qrcode canvas");
  var qrDataUrl = qrCanvas.toDataURL("image/png");
  var link = document.createElement("a");
  link.href = qrDataUrl;
  link.download = "qrcode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
