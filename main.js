let div = document.getElementById("canvas");

// 鼠标按下去
div.onmousedown = (a) => {
  let x = a.clientX;
  let y = a.clientY;
  let divA = document.createElement("div");
  divA.style =
    "width: 6px; height: 6px; background: red;" +
    "border-radius: 3px; position: absolute;" +
    "left:" +
    (x - 3) +
    "px;" +
    "top:" +
    (y - 3) +
    "px;";
  div.appendChild(divA);
};
// 鼠标移动
div.onmousemove = () => {};
// 鼠标松开
div.onmouseup = () => {};
