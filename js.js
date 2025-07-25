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

//========================================================================

//botão de som

const audio = document.getElementById("aurora");
const toggleBtn = document.getElementById("audioBotao");
const barras = document.getElementById("barras");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if(isPlaying) {
    audio.pause();
    barras.classList.remove("animando");
    barras.classList.add("parando");
    setTimeout(() => {
      barras.classList.remove("parando");
    }, 800);
  }else{
    audio.play();
    barras.classList.remove("parando");
    barras.classList.add("animando");
    toggleBtn.style.backgroundColor = "rgb(255, 255, 255)";
    audio.volume = 0.5;
  }
  isPlaying = !isPlaying;
})


//===================================================================

// SideBar para celular

document.addEventListener("DOMContentLoaded", function () {
  const btnToggleSidebar = document.getElementById("btnToggleSidebar");
  const navLateral = document.getElementById("navegacaolateral");
  const botoesMenu = document.querySelectorAll(".navegacao-lateral button");

  btnToggleSidebar.addEventListener("click", (e) => {
    navLateral.classList.add("open");
    btnToggleSidebar.classList.add("hidden");
    e.stopPropagation(); 
  });

  document.addEventListener("click", function (e) {
    const clicouFora =
      !navLateral.contains(e.target) &&
      !btnToggleSidebar.contains(e.target);

    if (clicouFora && navLateral.classList.contains("open")) {
      navLateral.classList.remove("open");
      btnToggleSidebar.classList.remove("hidden");
    }
  });

  botoesMenu.forEach((btn) => {
    btn.addEventListener("click", () => {
      navLateral.classList.remove("open");
      btnToggleSidebar.classList.remove("hidden");
    });
  });
});