document.addEventListener("DOMContentLoaded", function () {
  const scrollLottie = document.querySelector(".scroll-lottie");
  let lastScrollTop = 0;
  let ticking = false;

  function updateLottieVisibility(scrollTop) {
    if (scrollTop <= 100) {
      scrollLottie.style.opacity = "1";
      scrollLottie.style.transform = "translate(-50%, 0)";
    } else {
      scrollLottie.style.opacity = "0";
      scrollLottie.style.transform = "translate(-50%, 100%)";
    }
  }

  function onScroll() {
    lastScrollTop = window.pageYOffset;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateLottieVisibility(lastScrollTop);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial call to set the correct state on page load
  updateLottieVisibility(window.pageYOffset);
});
