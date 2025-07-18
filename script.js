<<<<<<< HEAD
const imageInput = document.getElementById('imageInput');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');
const gallery = document.getElementById('gallery');

// Partage
const shareFacebook = document.getElementById('shareFacebook');
const shareTwitter = document.getElementById('shareTwitter');
const shareWhatsApp = document.getElementById('shareWhatsApp');

let image = new Image();

function drawMeme() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  ctx.font = '30px Impact';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';

  const topText = topTextInput.value.toUpperCase();
  const bottomText = bottomTextInput.value.toUpperCase();

  ctx.fillText(topText, canvas.width / 2, 40);
  ctx.strokeText(topText, canvas.width / 2, 40);

  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    // Réinitialiser les champs de texte
    topTextInput.value = "";
    bottomTextInput.value = "";

    image.src = reader.result;
    image.onload = drawMeme;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

topTextInput.addEventListener('input', drawMeme);
bottomTextInput.addEventListener('input', drawMeme);

downloadBtn.addEventListener('click', () => {
  const memeURL = canvas.toDataURL('image/png');

  // Télécharger
  const a = document.createElement('a');
  a.href = memeURL;
  a.download = 'meme.png';
  a.click();

  // Ajouter à la galerie
  const img = document.createElement('img');
  img.src = memeURL;
  gallery.prepend(img);
});

function getMemeImageURL() {
  return canvas.toDataURL('image/png');
}

// Boutons de partage
shareFacebook.addEventListener('click', () => {
  alert("Facebook ne permet pas le partage direct d'images générées.\nTélécharge l’image puis publie-la manuellement.");
});

shareTwitter.addEventListener('click', () => {
  const text = encodeURIComponent("Regarde mon mème 😂");
  const shareURL = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(shareURL, '_blank');
});

shareWhatsApp.addEventListener('click', () => {
  const text = encodeURIComponent("Regarde mon mème 😂");
  const shareURL = `https://wa.me/?text=${text}`;
  window.open(shareURL, '_blank');
});
=======
const imageInput = document.getElementById('imageInput');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');
const gallery = document.getElementById('gallery');

// Partage
const shareFacebook = document.getElementById('shareFacebook');
const shareTwitter = document.getElementById('shareTwitter');
const shareWhatsApp = document.getElementById('shareWhatsApp');

let image = new Image();

function drawMeme() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  ctx.font = '30px Impact';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';

  const topText = topTextInput.value.toUpperCase();
  const bottomText = bottomTextInput.value.toUpperCase();

  ctx.fillText(topText, canvas.width / 2, 40);
  ctx.strokeText(topText, canvas.width / 2, 40);

  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    // Réinitialiser les champs de texte
    topTextInput.value = "";
    bottomTextInput.value = "";

    image.src = reader.result;
    image.onload = drawMeme;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

topTextInput.addEventListener('input', drawMeme);
bottomTextInput.addEventListener('input', drawMeme);

downloadBtn.addEventListener('click', () => {
  const memeURL = canvas.toDataURL('image/png');

  // Télécharger
  const a = document.createElement('a');
  a.href = memeURL;
  a.download = 'meme.png';
  a.click();

  // Ajouter à la galerie
  const img = document.createElement('img');
  img.src = memeURL;
  gallery.prepend(img);
});

function getMemeImageURL() {
  return canvas.toDataURL('image/png');
}

// Boutons de partage
shareFacebook.addEventListener('click', () => {
  alert("Facebook ne permet pas le partage direct d'images générées.\nTélécharge l’image puis publie-la manuellement.");
});

shareTwitter.addEventListener('click', () => {
  const text = encodeURIComponent("Regarde mon mème 😂");
  const shareURL = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(shareURL, '_blank');
});

shareWhatsApp.addEventListener('click', () => {
  const text = encodeURIComponent("Regarde mon mème 😂");
  const shareURL = `https://wa.me/?text=${text}`;
  window.open(shareURL, '_blank');
});
>>>>>>> b8fbdfd0874a21b47f3b1952cf13b12c7670aedd
