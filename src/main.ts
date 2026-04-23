import './style.css';
import { resumeData } from './data/resume';

let currentLang = localStorage.getItem('lang') || 'en';

(window as any).copyText = (text: string, event: Event) => {
  event.preventDefault();
  const data = (resumeData as any)[currentLang];
  navigator.clipboard.writeText(text);
  const el = event.currentTarget as HTMLElement;
  const originalHTML = el.innerHTML;
  el.style.pointerEvents = 'none';
  el.innerHTML = `<i class="ph ph-check" style="font-size: 1.2rem;"></i> ${data.ui.common.copied}`;
  setTimeout(() => {
    el.innerHTML = originalHTML;
    el.style.pointerEvents = 'auto';
  }, 2000);
};

const renderHeader = () => {
  const header = document.querySelector<HTMLElement>('#site-header');
  if (!header) return;

  const data = (resumeData as any)[currentLang];
  
  header.innerHTML = `
    <div class="glass-panel header-main">
      <h3 class="logo">
        <a href="#/">OP<span>S</span></a>
      </h3>
      <div class="nav-container">
        <nav>
          <ul class="nav-list" id="nav-list">
            <li><a href="#/">${data.ui.nav.home}</a></li>
            <li><a href="#/experience">${data.ui.nav.experience}</a></li>
            <li><a href="#/skills">${data.ui.nav.skills}</a></li>
            <li><a href="#/contact">${data.ui.nav.contact}</a></li>
          </ul>
        </nav>
        <div class="nav-divider"></div>
        <div class="controls-group">
          <button id="lang-toggle" class="lang-btn">
            ${currentLang.toUpperCase()}
          </button>
          <button id="theme-toggle" class="theme-btn">
            <i class="ph ${document.body.classList.contains('light-theme') ? 'ph-moon' : 'ph-sun'}" id="theme-icon" style="font-size: 1.5rem;"></i>
          </button>
        </div>
        <button class="mobile-toggle" id="mobile-toggle">
          <i class="ph ph-list"></i>
        </button>
      </div>
    </div>
  `;

  // Attach listeners
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const langToggle = document.getElementById('lang-toggle');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-list');

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeIcon.className = isLight ? 'ph ph-moon' : 'ph ph-sun';
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'uk' : 'en';
      localStorage.setItem('lang', currentLang);
      renderApp();
    });
  }

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navList.classList.contains('active') ? 'ph ph-x' : 'ph ph-list';
      }
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'ph ph-list';
      });
    });
  }
};

const renderRoute = () => {
  const routerView = document.querySelector<HTMLElement>('#router-view');
  if (!routerView) return;

  const data = (resumeData as any)[currentLang];
  const hash = window.location.hash || '#/';

  if (hash === '#/') {
    routerView.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            ${data.personal.title.split(' / ')[0]} <br>
            <span>${data.ui.hero.subtitle}</span>
          </h1>
          <p class="hero-description">
            ${data.personal.summary}
          </p>
          <div class="hero-actions">
            <a href="#/experience" class="btn-primary">${data.ui.hero.explore}</a>
            <a href="#/contact" class="btn-secondary">${data.ui.hero.getInTouch}</a>
          </div>
        </div>
        <div class="hero-image-container">
          <div class="hero-image-wrapper">
            <img src="/profile.png" alt="${data.personal.name}" class="hero-image">
          </div>
        </div>
      </div>
    `;
  } else if (hash === '#/experience') {
    const experienceHTML = data.experience.map((exp: any) => `
      <div class="glass-panel experience-card">
        <h3 style="font-size: 1.8rem; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          ${exp.company}
        </h3>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          ${exp.roles.map((role: any) => `
            <div>
              <p style="color: var(--text-primary); font-size: 1.1rem; font-weight: 600;">${role.title}</p>
              <p style="color: var(--text-secondary); font-size: 0.9rem;">${role.period}</p>
              ${role.description ? `<p style="color: var(--text-secondary); margin-top: 8px;">${role.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    routerView.innerHTML = `
      <div style="margin-bottom: 40px; padding-top: 40px;">
        <h2 style="display: inline-block;">${data.ui.sections.experience}</h2>
      </div>
      <div style="display: flex; flex-direction: column;">
        ${experienceHTML}
      </div>
    `;
  } else if (hash === '#/skills') {
    const skillsHTML = data.skills.map((skill: any) => `
      <div class="glass-panel skill-card" style="padding: 30px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; text-align: center; cursor: default;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 210, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <i class="ph ${skill.icon}" style="font-size: 2rem; color: var(--accent-color);"></i>
        </div>
        <span style="font-weight: 600; font-size: 1.1rem;">${skill.name}</span>
      </div>
    `).join('');

    routerView.innerHTML = `
      <div style="margin-bottom: 50px; padding-top: 40px; text-align: center;">
        <h2 style="display: inline-block;">${data.ui.sections.skills}</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 15px auto 0; font-size: 1.1rem; line-height: 1.6;">
          ${data.ui.sections.skillsSubtitle}
        </p>
      </div>
      <div class="skills-grid">
        ${skillsHTML}
      </div>
    `;
  } else if (hash === '#/contact') {
    routerView.innerHTML = `
      <div style="padding-top: 60px; padding-bottom: 60px;">
        <div class="glass-panel" style="text-align: center; padding: 60px 20px;">
          <h2 style="font-size: 2.5rem; margin-bottom: 20px;">${data.ui.sections.contact}</h2>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 30px auto;">${data.ui.sections.contactSubtitle}</p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="#" onclick="copyText('${data.personal.contact.email}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
              <i class="ph ph-envelope-simple" style="font-size: 1.2rem;"></i>
              ${data.personal.contact.email}
            </a>
            <a href="#" onclick="copyText('${data.personal.contact.phone}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
              <i class="ph ph-phone" style="font-size: 1.2rem;"></i>
              ${data.personal.contact.phone}
            </a>
            <a href="${data.personal.contact.linkedin}" target="_blank" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; color: var(--text-primary); text-decoration: none;">
              <i class="ph ph-linkedin-logo" style="font-size: 1.2rem;"></i>
              LinkedIn
            </a>
          </div>
          <p style="color: var(--text-secondary); margin-top: 40px; font-size: 0.9rem;">© ${new Date().getFullYear()} ${data.personal.name}. ${data.ui.common.rights}</p>
        </div>
      </div>
    `;
  } else {
    routerView.innerHTML = `
      <div style="padding-top: 100px; text-align: center;">
        <h2>${data.ui.common.notFound}</h2>
        <br>
        <a href="#/" style="color: var(--accent-color);">${data.ui.common.goHome}</a>
      </div>
    `;
  }
};

const renderApp = () => {
  renderHeader();
  renderRoute();
};

const initApp = () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }

  window.addEventListener('hashchange', renderRoute);
  renderApp();
};

document.addEventListener('DOMContentLoaded', initApp);
