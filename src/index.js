import THREE from "n3d-threejs"
import Display from "./display/Display.js"

var display;

//해당 함수는 시작하는 순간 한번만 실행됩니다.
var setup = function() {
  display = new Display();
  update();
}

//해당 함수는 종료 될때까지 무한히 반복됩니다.
var update = function() {
  display.update();
  display.render();

  //update함수를 호출하는것을 예약해둡니다. (재귀적 형태)
  requestAnimationFrame(update);
}

document.body.onload = setup;
