let yyy = document.getElementById("xxx");
let ctx = yyy.getContext("2d");

autoSetCanvasSize(yyy);
listenToUser(yyy);

let eraserEnabled = false;
eraser.onclick = () => {
  eraserEnabled = true;
  action.className = "action x";
};
brush.onclick = () => {
  eraserEnabled = false;
  action.className = "action";
};
/** 函数库 **/
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

function autoSetCanvasSize(canvas) {
  setCanvasSize();
  window.onresize = () => {
    setCanvasSize();
  };
  function setCanvasSize() {
    let pageWidth = document.documentElement.clientWidth;
    let pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
  }
}

function listenToUser(canvas) {
  let using = false;
  let lastPoint = {
    x: undefined,
    y: undefined,
  };
  // 特性检测
  if (document.body.ontouchstart !== undefined) {
    // 触屏设备
    canvas.ontouchstart = (a) => {
      let x = a.touches[0].clientX;
      let y = a.touches[0].clientY;
      // 相对于视口的位置
      using = true;
      if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
      } else {
        lastPoint = {
          x: x,
          y: y,
        };
      }
    };
    canvas.ontouchmove = (a) => {
      let x = a.touches[0].clientX;
      let y = a.touches[0].clientY;
      // 相对于视口的位置
      if (!using) {
        return;
      }
      if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
      } else {
        let newPoint = {
          x: x,
          y: y,
        };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    };
    canvas.ontouchend = () => {
      using = false;
    };
  } else {
    // 非触屏设备
    canvas.onmousedown = (a) => {
      let x = a.clientX;
      let y = a.clientY;
      // 相对于视口的位置
      using = true;
      if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
      } else {
        lastPoint = {
          x: x,
          y: y,
        };
      }
    };
    canvas.onmousemove = (a) => {
      let x = a.clientX;
      let y = a.clientY;
      // 相对于视口的位置
      if (!using) {
        return;
      }
      if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
      } else {
        let newPoint = {
          x: x,
          y: y,
        };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    };
    canvas.onmouseup = (a) => {
      using = false;
    };
  }
}
