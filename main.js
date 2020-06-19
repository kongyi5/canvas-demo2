let yyy = document.getElementById("xxx");
let ctx = yyy.getContext("2d");

xxx();

window.onresize = () => {
  xxx();
};

let using = false;
let lastPoint = {
  x: undefined,
  y: undefined,
};
let eraserEnabled = false;
eraser.onclick = () => {
  eraserEnabled = !eraserEnabled;
};

yyy.onmousedown = (a) => {
  let x = a.clientX;
  let y = a.clientY;
  // 相对于视口的位置
  if (eraserEnabled) {
    using = true;
    ctx.clearRect(x - 5, y - 5, 10, 10);
  } else {
    using = true;
    lastPoint = {
      x: x,
      y: y,
    };
  }
};
yyy.onmousemove = (a) => {
  let x = a.clientX;
  let y = a.clientY;
  // 相对于视口的位置
  if (eraserEnabled) {
    if (using) {
      ctx.clearRect(x - 5, y - 5, 10, 10);
    }
  } else {
    if (using) {
      let newPoint = {
        x: x,
        y: y,
      };
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint;
    } else {
    }
  }
};
yyy.onmouseup = (a) => {
  using = false;
};

function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.moveTo(x1, y1); // 起点
  ctx.lineTo(x2, y2); // 终点
  ctx.stroke();
  ctx.closePath();
}
function xxx() {
  let pageWidth = document.documentElement.clientWidth;
  let pageHeight = document.documentElement.clientHeight;
  yyy.width = pageWidth;
  yyy.height = pageHeight;
}
