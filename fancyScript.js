let header = document.getElementById("header");
const tog = document.getElementById("toggle");
const burger = document.getElementById("burger");
const herBottom1 = document.getElementById("hero-bottom-1");
const herBottom2 = document.getElementById("hero-bottom-2");
const herBottom3 = document.getElementById("hero-bottom-3");
const heroTexts = document.getElementById("caption-text");
const mobileMenus = document.getElementById("mobile-menus");

function toggleIconState(theme = "dark") {}

function toggleHeaderState(active = true) {
  if (active) {
    header.classList.add("active-header");
    header.classList.remove("inactive-header");
    if (tog.src.includes("moon")) {
      tog.src = "/assets/images/moonblack.png";
      burger.src = "/assets/images/menu-dark.png";
    }
  } else {
    header.classList.add("inactive-header");
    header.classList.remove("active-header");
    if (tog.src.includes("moon")) {
      tog.src = "/assets/images/moon.png";
      burger.src = "/assets/images/menu-light.png";
    }
  }
}
function toggleMenu(e) {
  // when burger menu clicked
  if (header.classList.contains("show")) {
    header.classList.remove("show");
    if (header.offsetTop <= 0) {
      toggleHeaderState(false);
    }
  } else {
    header.classList.add("show");
    toggleHeaderState(true);
  }
}

burger.onclick = toggleMenu;
mobileMenus.onclick = toggleMenu;
tog.onclick = function (e) {
  // toggle theme
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    e.target.src = "/assets/images/sun.png";
    burger.src = "/assets/images/menu-light.png";
  } else {
    if (header.offsetTop > 0) {
      e.target.src = "/assets/images/moonblack.png";
    } else {
      e.target.src = "/assets/images/moon.png";
      if (header.classList.contains("show")) {
        toggleHeaderState(true);
      } else {
      }
    }
  }
};

window.onload = function (e) {
  document.body.onscroll = function (e) {
    let value = window.scrollY;
    if (header.offsetTop > 0) {
      toggleHeaderState(true);
    } else {
      if (!header.classList.contains("show")) {
        toggleHeaderState(false);
      }
    }
    herBottom1.style.bottom = value / -3 + 50 + "px";
    herBottom2.style.bottom = value / -4 + 20 + "px";

    heroTexts.style.top = 40 + value / 9 + "%";
    if (header.offsetTop > 800) {
      heroTexts.style.position = "relative";
    } else {
      heroTexts.style.position = "absolute";
    }
  };
};

var typingElement = document.querySelector(".typing-text");

var typeArray = [
  " have a college degree also a self taught.📚💻",
  "'m passionate on what i do.💖",
  " play musics while coding!🎸",
  " strive for cusscess on my goal.💪",
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

    isAdding ? 35 : 10
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
