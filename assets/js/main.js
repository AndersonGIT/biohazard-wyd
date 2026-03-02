  // Inicializa AOS
  AOS.init({
    once: true,
    duration: 800,
    offset: 80
  });

  // Animação GSAP no logo
  gsap.from("#logo-biohazard", {
    duration: 2,
    scale: 0.4,
    rotation: -45,
    opacity: 0,
    ease: "power3.out"
  });

  // Tema alternativo (Neo / WYD Clássico)
  const themeToggle = document.getElementById('themeToggle');
  let isClassic = false;

  themeToggle.addEventListener('click', () => {
    isClassic = !isClassic;
    document.body.classList.toggle('theme-classic', isClassic);
    themeToggle.textContent = 'Tema: ' + (isClassic ? 'WYD Clássico' : 'Neo');
  });

  async function loadLeadership() {
    try {
      console.log('Carregando leadership.json...');
      let leadersLoaded = [];
      let leaders = [];
      let viceLeaders = [];

    const res = await fetch('assets/data/leadership.json');
      leadersLoaded = await res.json();

      leaders = leadersLoaded.filter(l => l.role.toLowerCase() === 'lider');
      viceLeaders = leadersLoaded.filter(l => l.role.toLowerCase() === 'vice-lider'); 

      console.log('Líderes carregados:', leaders);
      console.log('Vice-Líderes carregados:', viceLeaders);

  const leadersGrid = document.getElementById('leader-grid');
  leadersGrid.innerHTML = '';

  const viceLeadersGrid = document.getElementById('vice-leader-grid');
  viceLeadersGrid.innerHTML = '';

  leaders.forEach((leader, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
      <div class="card-bio" data-aos="fade-up" data-aos-delay="${index * 80}"
           style="background-image: url('${leader.image}');">

        <div class="card-overlay">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h4 class="mb-0">${leader.nick}</h4>
            <span class="badge-role">${leader.role}</span>
          </div>

          <p class="mb-1"><strong>Classe:</strong> ${leader.classCelestial} / ${leader.classSubCelestial}</p>
          <p class="mb-1"><strong>Level:</strong> ${leader.levelCelestial} / ${leader.levelSubCelestial}</p>
          <!--<p class="mb-3 text-muted"><strong>Poder: ${leader.power.toLocaleString('pt-BR')}</strong></p>-->

          ${leader.showWhatsApp ? 
          `<a href="https://wa.me/${leader.whatsapp}" target="_blank" class="btn-whatsapp">
            Falar no WhatsApp
          </a>` 
          : 
          ''
          }
        </div>
      </div>
    `;

    leadersGrid.appendChild(col);
  });

  viceLeaders.forEach((viceLeader, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
      <div class="card-bio" data-aos="fade-up" data-aos-delay="${index * 80}"
           style="background-image: url('${viceLeader.image}');">

        <div class="card-overlay">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h4 class="mb-0">${viceLeader.nick}</h4>
            <span class="badge-role">${viceLeader.role}</span>
          </div>

          <p class="mb-1"><strong>Classe:</strong> ${viceLeader.classCelestial} / ${viceLeader.classSubCelestial}</p>
          <p class="mb-1"><strong>Level:</strong> ${viceLeader.levelCelestial} / ${viceLeader.levelSubCelestial}</p>
          <!--<p class="mb-3 text-muted"><strong>Poder: ${viceLeader.power.toLocaleString('pt-BR')}</strong></p>-->

          ${viceLeader.showWhatsApp ? 
          `<a href="https://wa.me/${viceLeader.whatsapp}" target="_blank" class="btn-whatsapp">
            Falar no WhatsApp
          </a>` 
          : 
          ''
          }
        </div>
      </div>
    `;

    viceLeadersGrid.appendChild(col);
  });

  AOS.refresh();
    } catch (e) {
      console.error('Erro ao carregar leadership.json', e);
    }
  }
    
  async function loadRanking(){
    try{
    await renderRanking();
    }catch(e){
        console.error('Erro ao carregar ranking JSON', e);
    }
  }


  async function renderRanking() {
    await renderRankingPowerRating('power');
    await renderRankingWorkingEngine('engagement');
  }

  // Botões de ordenação
//   document.querySelectorAll('[data-sort]').forEach(btn => {
//     btn.addEventListener('click', () => {
//       //const sortBy = btn.getAttribute('data-sort');
//       renderRanking();
//     });
//   });


document.addEventListener("DOMContentLoaded", () => {
    
  loadLeadership();
  loadRanking();

  const audio = document.getElementById("bg-music");
  audio.volume = 0;

  const startMusic = () => {
    audio.play().then(() => {
      fadeIn(audio, 0.1, 60000);
    }).catch(() => {});
    
  document.removeEventListener("click", startMusic);
  document.removeEventListener("scroll", startMusic);
  document.removeEventListener("keydown", startMusic);
  document.removeEventListener("dblclick", startMusic);
  document.removeEventListener("mousedown", startMusic);
  document.removeEventListener("mousemove", startMusic);
  document.removeEventListener("mouseenter", startMusic);
  document.removeEventListener("mouseleave", startMusic);
  document.removeEventListener("touchstart", startMusic);
  document.removeEventListener("touchmove", startMusic);
  document.removeEventListener("touchend", startMusic);
  document.removeEventListener("touchcancel", startMusic);
  document.removeEventListener("wheel", startMusic);
  };

  document.addEventListener("wheel", startMusic);
  document.addEventListener("click", startMusic);
  document.addEventListener("scroll", startMusic);
  document.addEventListener("keydown", startMusic);
  document.addEventListener("dblclick", startMusic);
  document.addEventListener("mousedown", startMusic);
  document.addEventListener("mousemove", startMusic);
  document.addEventListener("mouseenter", startMusic);
  document.addEventListener("mouseleave", startMusic);
  document.addEventListener("touchstart", startMusic);
  document.addEventListener("touchmove", startMusic);
  document.addEventListener("touchend", startMusic);
  document.addEventListener("touchcancel", startMusic);
});

function fadeIn(audio, finalVolume, duration) {
  let volume = 0;
  const step = finalVolume / (duration / 50);

  const interval = setInterval(() => {
    volume += step;
    if (volume >= finalVolume) {
      audio.volume = finalVolume;
      clearInterval(interval);
    } else {
      audio.volume = volume;
    }
  }, 50);
}

    document.addEventListener("visibilitychange", () => {
    const audio = document.getElementById("bg-music");

    if (document.hidden) {
        // Saiu da aba / minimizou / trocou de app
        audio.pause();
    } else {
        // Voltou para a aba
        audio.play().catch(() => {});
    }
    });
