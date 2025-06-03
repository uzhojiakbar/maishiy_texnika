document.addEventListener("DOMContentLoaded", function () {
  const heroBackgrounds = [
    {
      img: "http://localhost/maishiy_texnika/img/karusel/karusel-1.jpg",
    },
    {
      img: "http://localhost/maishiy_texnika/img/karusel/karusel-2.jpg",
    },
    {
      img: "http://localhost/maishiy_texnika/img/karusel/karusel-3.jpg",
    },
  ];

  let idx = 0;
  function setHeroBg() {
    const hero = document.getElementById("mainHeroBg");
    if (!hero) {
      console.warn("mainHeroBg element topilmadi!");
      return;
    }
    // Prepare next image for swipe
    const nextImg = heroBackgrounds[idx].img;
    hero.style.setProperty(
      "--next-bg",
      `url('${nextImg}') center center / cover no-repeat`
    );
    hero.classList.add("swipe-next");
    // After animation, set as real background and clean up
    setTimeout(() => {
      hero.style.background = `url('${nextImg}') center center / cover no-repeat`;
      hero.classList.remove("swipe-next");
      idx = (idx + 1) % heroBackgrounds.length;
    }, 600);
  }

  // DOM to'liq yuklangandan keyin 500ms kutib, element borligini tekshiramiz
  setTimeout(() => {
    setHeroBg();
    setInterval(setHeroBg, 3000);
  }, 500);
});
