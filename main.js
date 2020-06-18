let div = document.getElementById("canvas");
let painting = false;
// 鼠标按下去
div.onmousedown = (a) => {
  painting = true;
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
div.onmousemove = (a) => {
  if (painting) {
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
  } else {
  }
};
// 鼠标松开
div.onmouseup = () => {
  painting = false;
};
