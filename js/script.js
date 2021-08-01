
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let posX = 100,
posY = 0;

canvas.addEventListener('mousemove', e => {

  posX = e.offsetX;
  posY = e.offsetY;
  console.log(posX, posY);
});

function anim() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.beginPath();
  //ctx.rect(posX - 175, 0, 350, 950);
  ctx.arc(posX,posY, 100, 0, 2 * Math.PI);
  ctx.clip();

  ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

  ctx.restore();
  requestAnimationFrame(anim);
}
anim();