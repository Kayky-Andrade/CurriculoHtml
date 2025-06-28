function mostrarCertificado() {
    const popup = document.getElementById("certificadoGit");
    popup.style.display = "block";
  }

  function esconderCertificado() {
    const popup = document.getElementById("certificadoGit");
    popup.style.display = "none";
  }


function mostrarCertificado() {
    const popup = document.getElementById("certificadoGit1");
    popup.style.display = "block";
  }

  function esconderCertificado() {
    const popup = document.getElementById("certificadoGit1");
    popup.style.display = "none";
  }

//----------------------------------------------------------------------------------------

   document.querySelectorAll(".lista-lateral button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const alvoId = btn.getAttribute("data-target");
        const sec = document.getElementById(alvoId);
        if (sec) {
          sec.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

//----------------------------------------------------------------------------------------

    const sections = document.querySelectorAll("main > section");
    const navButtons = document.querySelectorAll(".lista-lateral button");
    function detectCurrentSection() {
      let index = sections.length - 1;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top > window.innerHeight / 2) {
          index = i - 1;
          break;
        }
      }
      return index < 0 ? 0 : index;
    }
    function updateActiveButton() {
      const currentIndex = detectCurrentSection();
      navButtons.forEach(btn => btn.classList.remove("active"));
      const activeBtn = navButtons[currentIndex];
      if (activeBtn) activeBtn.classList.add("active");
    }
    window.addEventListener("scroll", updateActiveButton);
    window.addEventListener("DOMContentLoaded", updateActiveButton);

//Atualizações para comportamento do wow.js no código

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  
  window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
  });


  window.addEventListener("load", () => {
    setTimeout(() => {
      new WOW().init();
    }, 100); 
  });

  setTimeout(() => {
  wow.sync(); 
}, 500);