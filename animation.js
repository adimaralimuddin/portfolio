const attr = document.querySelectorAll('a[href^="#"]');

attr.forEach(function (elm) {
  elm.addEventListener("click", function (e) {
    e.preventDefault();

    let targetElm = document.querySelector(elm.getAttribute("href"));
    let targetRage = targetElm.getBoundingClientRect().top;

    let smoothScroll = function (range) {
      let position = 0;
      let progress = 0;
      let easeInOutQuint = function (time) {
        return time < 0.5
          ? 16 * Math.pow(time, 5)
          : 1 - Math.pow(-2 * time + 2, 5) / 2;
      };
      let move = function () {
        progress++;
        position = range * easeInOutQuint(progress / 100);

        window.scrollTo(0, position);
        if (position < range) {
          requestAnimationFrame(move);
        }
      };
      requestAnimationFrame(move);
    };
    smoothScroll(targetRage);
  });
});
