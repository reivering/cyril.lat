// smooth scroll helper
function smoothScrollTo(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  // spawn flower rain
  function triggerFlowerRain() {
    const container = document.getElementById("flowerContainer");
    if (!container) return;
  
    const count = 40;
  
    for (let i = 0; i < count; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent = "✿";
  
      const startLeft = Math.random() * 100; // vw
      const duration = 3 + Math.random() * 2; // seconds
      const delay = Math.random() * 0.8;
  
      flower.style.left = startLeft + "vw";
      flower.style.animationDuration = duration + "s";
      flower.style.animationDelay = delay + "s";
  
      container.appendChild(flower);
  
      // remove after animation
      setTimeout(() => {
        flower.remove();
      }, (duration + delay) * 1000 + 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const openCardBtn = document.getElementById("openCardBtn");
    const scrollToPhotosBtn = document.getElementById("scrollToPhotosBtn");
  
    if (openCardBtn) {
      openCardBtn.addEventListener("click", () => {
        // animate envelope a bit
        const envelope = document.querySelector(".envelope");
        if (envelope) {
          envelope.classList.add("envelope-opening");
          setTimeout(() => {
            envelope.classList.remove("envelope-opening");
          }, 900);
        }
  
        // flowers + scroll to message
        triggerFlowerRain();
        setTimeout(() => {
          smoothScrollTo("#messageSection");
        }, 400);
      });
    }
  
    if (scrollToPhotosBtn) {
      scrollToPhotosBtn.addEventListener("click", () => {
        smoothScrollTo("#photosSection");
      });
    }
  });
  