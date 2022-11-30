let header = document.getElementById("header");
const tog = document.getElementById("toggle");

tog.onclick = function (e) {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    e.target.src = "/assets/images/sun.png";
  } else {
    if (header.offsetTop > 0) {
      e.target.src = "/assets/images/moonblack.png";
    } else {
      e.target.src = "/assets/images/moon.png";
    }
  }
};

window.onload = function (e) {
  document.body.onscroll = function (e) {
    if (header.offsetTop > 0) {
      header.classList.add("active-header");
      header.classList.remove("inactive-header");
      if (tog.src.includes("moon")) {
        tog.src = "/assets/images/moonblack.png";
      }
    } else {
      header.classList.add("inactive-header");
      header.classList.remove("active-header");
      if (tog.src.includes("moon")) {
        tog.src = "/assets/images/moon.png";
      }
    }
  };
};

var typingElement = document.querySelector(".typing-text");

var typeArray = [
  " have a college degree also a self taught.",
  "'m passionate on what i do.",
  " play slow-rock musics while coding",
  " strive for cusscess on my goal",
];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);

      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          setTimeout(function () {
            playAnim();
          }, 1000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;

          typeIndex++;
          if (typeIndex >= typeArray.length) {
            typeIndex = 0;
          }
        } else {
          index--;
        }
      }
      playAnim();
    },

    isAdding ? 60 : 20
  );
}

playAnim();

const kenal_section = document.querySelector("#kenal_section");
const lango_section = document.querySelector("#lango_section");
const toko_section = document.querySelector("#toko_section");
const tasky_section = document.querySelector("#tasky_section");

const kenal_card = document.querySelector("#kenal_card");
const lango_card = document.querySelector("#lango_card");
const toko_card = document.querySelector("#toko_card");
const tasky_card = document.querySelector("#tasky_card");

kenal_section.addEventListener("mousemove", function (rotate) {
  let x = (kenal_section.clientWidth / 2 - rotate.x) / 15;
  let y = (kenal_section.clientHeight / 2 - rotate.y) / 15;
  kenal_card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});
lango_section.addEventListener("mousemove", function (rotate) {
  let x = (lango_section.clientWidth / 2 - rotate.x) / 15;
  let y = (lango_section.clientHeight / 2 - rotate.y) / 15;
  lango_card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});
toko_section.addEventListener("mousemove", function (rotate) {
  let x = (toko_section.clientWidth / 2 - rotate.x) / 15;
  let y = (toko_section.clientHeight / 2 - rotate.y) / 15;
  toko_card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});
tasky_section.addEventListener("mousemove", function (rotate) {
  let x = (tasky_section.clientWidth / 2 - rotate.x) / 15;
  let y = (tasky_section.clientHeight / 2 - rotate.y) / 15;
  tasky_card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

kenal_section.addEventListener("mouseout", function () {
  kenal_card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
lango_section.addEventListener("mouseout", function () {
  lango_card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
toko_section.addEventListener("mouseout", function () {
  toko_card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
tasky_section.addEventListener("mouseout", function () {
  tasky_card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
