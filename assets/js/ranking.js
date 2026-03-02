  async function renderRankingPowerRating(sortBy = 'power') {
      let rankingData = [];
      const res = await fetch('assets/data/ranking-power-hating.json');
      rankingData = await res.json();

    const tbody = document.getElementById('ranking-power-hating-body');
    tbody.innerHTML = '';

    const sorted = [...rankingData].sort((a, b) => {
      if (sortBy === 'role') return a.role.localeCompare(b.role);
      if (sortBy === 'level') return b.level - a.level;
      return b.power - a.power;
    });

    sorted.forEach((r, idx) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${idx + 1}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.nick}</span></td>        
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.classCelestial} / ${r.classSubCelestial}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.levelCelestial} / ${r.levelSubCelestial}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.power.toLocaleString('pt-BR')}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}><img width="22" src="${r.kingdom}" alt="Kingdom Badge" class="badge-img"></span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}><img width='28' src="${r.guildBadge}" alt="Guild Badge" class="badge-img"></span></td>
      `;

      if (idx === 0) tr.classList.add("rank-1");
      if (idx === 1) tr.classList.add("rank-2"); 
      if (idx === 2) tr.classList.add("rank-3");

      tbody.appendChild(tr);
    });
  }

    async function renderRankingWorkingEngine(sortBy = 'engagement') {
      let rankingData = [];
      const res = await fetch('assets/data/ranking-working-engine.json');
      rankingData = await res.json();

    const tbody = document.getElementById('ranking-working-engine-body');
    tbody.innerHTML = '';

    const sorted = [...rankingData].sort((a, b) => {
      //if (sortBy === 'role') return a.role.localeCompare(b.role);
      if (sortBy === 'level') return b.level - a.level;
      return b.power - a.power;
    });

    sorted.forEach((r, idx) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${idx + 1}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.nick}</span></td>        
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}>${r.power.toLocaleString('pt-BR')}</span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}><img width="22" src="${r.kingdom}" alt="Kingdom Badge" class="badge-img"></span></td>
        <td><span ${idx === 0 ? 'class="logo-pulse"' : ''}><img width='28' src="${r.guildBadge}" alt="Guild Badge" class="badge-img"></span></td>
      `;

      if (idx === 0) tr.classList.add("rank-1");
      if (idx === 1) tr.classList.add("rank-2"); 
      if (idx === 2) tr.classList.add("rank-3");

      tbody.appendChild(tr);
    });
  }
