import './style.css';
import { resumeData } from './data/resume';

(window as any).copyText = (text: string, event: Event) => {
  event.preventDefault();
  navigator.clipboard.writeText(text);
  const el = event.currentTarget as HTMLElement;
  const originalHTML = el.innerHTML;
  el.style.pointerEvents = 'none';
  el.innerHTML = '<i class="ph ph-check" style="font-size: 1.2rem;"></i> Copied!';
  setTimeout(() => {
    el.innerHTML = originalHTML;
    el.style.pointerEvents = 'auto';
  }, 2000);
};

const initApp = () => {
  const header = document.querySelector<HTMLElement>('#site-header');
  const routerView = document.querySelector<HTMLElement>('#router-view');

  if (header) {
    header.innerHTML = `
      <div class="glass-panel header-main">
        <h3 class="logo">
          <a href="#/">OP<span>S</span></a>
        </h3>
        <div class="nav-container">
          <nav>
            <ul class="nav-list" id="nav-list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/experience">Experience</a></li>
              <li><a href="#/skills">Skills</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </nav>
          <div class="nav-divider"></div>
          <button id="theme-toggle" class="theme-btn">
            <i class="ph ph-sun" id="theme-icon" style="font-size: 1.5rem;"></i>
          </button>
          <button class="mobile-toggle" id="mobile-toggle">
            <i class="ph ph-list"></i>
          </button>
        </div>
      </div>
    `;

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navList = document.getElementById('nav-list');
    
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
      if (themeIcon) themeIcon.className = 'ph ph-moon';
    }

    if (themeToggle && themeIcon) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
          localStorage.setItem('theme', 'light');
          themeIcon.className = 'ph ph-moon';
        } else {
          localStorage.setItem('theme', 'dark');
          themeIcon.className = 'ph ph-sun';
        }
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

      // Close menu when clicking a link
      navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          if (icon) icon.className = 'ph ph-list';
        });
      });
    }
  }

  const renderRoute = () => {
    if (!routerView) return;
    const hash = window.location.hash || '#/';

    if (hash === '#/') {
      routerView.innerHTML = `
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              ${resumeData.personal.title.split(' / ')[0]} <br>
              <span>& Solution Architect</span>
            </h1>
            <p class="hero-description">
              ${resumeData.personal.summary}
            </p>
            <div class="hero-actions">
              <a href="#/experience" class="btn-primary">Explore Experience</a>
              <a href="#/contact" class="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image-container">
            <div class="hero-image-wrapper">
              <img src="/profile.png" alt="${resumeData.personal.name}" class="hero-image">
            </div>
          </div>
        </div>
      `;
    } else if (hash === '#/experience') {
      const experienceHTML = resumeData.experience.map(exp => `
        <div class="glass-panel experience-card">
          <h3 style="font-size: 1.8rem; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            ${exp.company}
          </h3>
          <div style="display: flex; flex-direction: column; gap: 15px;">
            ${exp.roles.map(role => `
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
          <h2 style="display: inline-block;">Professional Experience</h2>
        </div>
        <div style="display: flex; flex-direction: column;">
          ${experienceHTML}
        </div>
      `;
    } else if (hash === '#/skills') {
      const skillsHTML = resumeData.skills.map(skill => `
        <div class="glass-panel skill-card" style="padding: 30px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; text-align: center; cursor: default;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 210, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
            <i class="ph ${skill.icon}" style="font-size: 2rem; color: var(--accent-color);"></i>
          </div>
          <span style="font-weight: 600; font-size: 1.1rem;">${skill.name}</span>
        </div>
      `).join('');

      routerView.innerHTML = `
        <div style="margin-bottom: 50px; padding-top: 40px; text-align: center;">
          <h2 style="display: inline-block;">Core Skills & Expertise</h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 15px auto 0; font-size: 1.1rem; line-height: 1.6;">
            A comprehensive overview of my technical stack, architectural knowledge, and leadership capabilities.
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
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Let's Connect</h2>
            <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 30px auto;">Open to new opportunities and interesting projects.</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <a href="#" onclick="copyText('${resumeData.personal.contact.email}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-envelope-simple" style="font-size: 1.2rem;"></i>
                ${resumeData.personal.contact.email}
              </a>
              <a href="#" onclick="copyText('${resumeData.personal.contact.phone}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-phone" style="font-size: 1.2rem;"></i>
                ${resumeData.personal.contact.phone}
              </a>
              <a href="${resumeData.personal.contact.linkedin}" target="_blank" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-linkedin-logo" style="font-size: 1.2rem;"></i>
                LinkedIn
              </a>
            </div>
            <p style="color: var(--text-secondary); margin-top: 40px; font-size: 0.9rem;">© ${new Date().getFullYear()} ${resumeData.personal.name}. All rights reserved.</p>
          </div>
        </div>
      `;
    } else {
      routerView.innerHTML = `
        <div style="padding-top: 100px; text-align: center;">
          <h2>404 - Page Not Found</h2>
          <br>
          <a href="#/" style="color: var(--accent-color);">Go back Home</a>
        </div>
      `;
    }
  };

  window.addEventListener('hashchange', renderRoute);
  renderRoute();
};

document.addEventListener('DOMContentLoaded', initApp);
