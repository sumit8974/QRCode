const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // not input just return
  // get the qr image for the qrgo.me api by passing the input
  generateBtn.innerText = "Generating QR Code...";
  generateBtn.style.opacity = "0.7";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active"); // once image is loaded the active class will be added
    generateBtn.innerText = "Generate QR Code";
    generateBtn.style.opacity = null;
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
