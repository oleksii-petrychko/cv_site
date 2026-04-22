(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={personal:{name:`Oleksii Petrychko`,title:`Engineering Manager / Solution Architect`,summary:`Forward-thinking Engineering Manager and Solution Architect with over 15 years of experience in FinTech, Esports, and Media. Proven track record of designing scalable, high-performance architectures, pioneering AI integration across the entire SDLC, and leading complex cloud transformations. Passionate about aligning technical strategy with business goals to deliver robust and innovative products.`,contact:{email:`oleksii.petrychko@gmail.com`,phone:`+380951058218`,linkedin:`https://www.linkedin.com/in/oleksii-petrychko-45051933`,location:`Kyiv, Ukraine`}},skills:[{name:`Solution Architecture`,icon:`ph-blueprint`},{name:`Engineering Leadership`,icon:`ph-crown`},{name:`Microservices & Cloud`,icon:`ph-cloud`},{name:`Cloud Infrastructure (AWS/GCP)`,icon:`ph-hard-drives`},{name:`Kubernetes & Docker`,icon:`ph-package`},{name:`High-Load Systems`,icon:`ph-rocket`},{name:`CI/CD Pipelines`,icon:`ph-arrows-clockwise`},{name:`Test Automation Frameworks`,icon:`ph-robot`},{name:`QA Architecture`,icon:`ph-check-square-offset`},{name:`Release Management`,icon:`ph-rocket-launch`},{name:`Technical Delivery`,icon:`ph-truck`},{name:`Agile & Scrum Methodologies`,icon:`ph-kanban`},{name:`FinOps Strategy`,icon:`ph-chart-line-up`},{name:`Budgeting & Cost Optimization`,icon:`ph-piggy-bank`},{name:`Team Building & Mentoring`,icon:`ph-users`},{name:`AI Integration in SDLC`,icon:`ph-brain`}],experience:[{company:`PrivatBank`,roles:[{title:`Domain Architect Lead – Retail Channels`,period:`April 2026 - Present`,description:`Spearheading the architectural vision for retail banking channels. Designing resilient microservices, leading the migration to modern cloud infrastructure, and driving AI integration across the entire SDLC to boost engineering productivity and code quality.`},{title:`Chief Manager in IT`,period:`December 2024 - April 2026`,description:`Directed a large engineering department. Optimized CI/CD pipelines, streamlined cross-team collaboration, and improved overall system reliability and deployment frequency across the retail banking ecosystem.`}]},{company:`Tango`,roles:[{title:`Head of QA`,period:`January 2024 - November 2024`,description:`Defined and implemented the global quality assurance strategy. Built AI-augmented automated testing frameworks and integrated continuous testing into the deployment pipeline, significantly reducing time-to-market.`}]},{company:`Self-employed`,roles:[{title:`Finance Operations (FinOps Consulting)`,period:`October 2022 - January 2024`,description:`Consulted tech companies on optimizing cloud expenditures and streamlining financial operations in IT. Conducted infrastructure audits and implemented cost-saving architectures without sacrificing performance.`}]},{company:`WePlay Holding`,roles:[{title:`Head Of Engineering`,period:`December 2021 - March 2023`,description:`Led the engineering division for a global esports media platform. Scaled the technical team and architecture to handle millions of concurrent users during major tournaments, ensuring seamless broadcasting and interactive features.`},{title:`Technical Delivery Manager`,period:`July 2019 - December 2021`,description:`Managed the end-to-to technical delivery of complex tournament platforms. Bridged the gap between product requirements and engineering execution.`},{title:`QA Manager`,period:`July 2018 - July 2019`,description:`Established comprehensive QA processes for esports products. Shifted the testing culture towards automation, improving release stability and predictability.`}]},{company:`Playtech`,roles:[{title:`QA Technical Lead`,period:`February 2016 - July 2018`,description:`Managed technical QA teams for high-load gaming platforms. Engineered complex automation frameworks and load-testing strategies to guarantee zero downtime during peak gaming events.`}]},{company:`B2B Soft`,roles:[{title:`QA Lead`,period:`October 2014 - February 2016`,description:`Led the quality assurance efforts for enterprise retail management software. Standardized testing protocols, introduced API testing, and mentored a team of QA engineers.`}]},{company:`RS Print`,roles:[{title:`Automation Engineer`,period:`July 2014 - October 2014`,description:`Developed automated test scripts for internal production tools, reducing manual testing effort by over 70% and increasing test coverage.`}]},{company:`Ciklum`,roles:[{title:`Senior Quality Engineer`,period:`October 2011 - July 2014`,description:`Collaborated with international clients to deliver high-quality software solutions. Established best practices for agile testing methodologies and continuous integration.`}]},{company:`MAXXmarketing GmbH`,roles:[{title:`Project Manager`,period:`September 2010 - October 2011`,description:`Coordinated digital projects from conception to delivery. Managed timelines, resources, and client expectations to ensure successful and on-time launches.`}]},{company:`SecurStar GmbH`,roles:[{title:`QA engineer`,period:`July 2007 - September 2010`,description:`Performed comprehensive security and functional testing for data encryption software, ensuring strict compliance with security standards.`}]},{company:`Balaccom`,roles:[{title:`System administrator`,period:`March 2006 - September 2006`,description:`Maintained IT infrastructure, network security, and hardware for the organization, ensuring high availability of internal services.`}]}],education:[{institution:`Chernivtsi Trade and Economics Institute`,degree:`Master, Economic Cybernetics`,period:`2003 - 2008`}]};window.copyText=(e,t)=>{t.preventDefault(),navigator.clipboard.writeText(e);let n=t.currentTarget,r=n.innerHTML;n.style.pointerEvents=`none`,n.innerHTML=`<i class="ph ph-check" style="font-size: 1.2rem;"></i> Copied!`,setTimeout(()=>{n.innerHTML=r,n.style.pointerEvents=`auto`},2e3)},document.addEventListener(`DOMContentLoaded`,()=>{let t=document.querySelector(`#site-header`),n=document.querySelector(`#router-view`);if(t){t.innerHTML=`
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
    `;let e=document.getElementById(`theme-toggle`),n=document.getElementById(`theme-icon`),r=document.getElementById(`mobile-toggle`),i=document.getElementById(`nav-list`);localStorage.getItem(`theme`)===`light`&&(document.body.classList.add(`light-theme`),n&&(n.className=`ph ph-moon`)),e&&n&&e.addEventListener(`click`,()=>{document.body.classList.toggle(`light-theme`),document.body.classList.contains(`light-theme`)?(localStorage.setItem(`theme`,`light`),n.className=`ph ph-moon`):(localStorage.setItem(`theme`,`dark`),n.className=`ph ph-sun`)}),r&&i&&(r.addEventListener(`click`,()=>{i.classList.toggle(`active`);let e=r.querySelector(`i`);e&&(e.className=i.classList.contains(`active`)?`ph ph-x`:`ph ph-list`)}),i.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{i.classList.remove(`active`);let e=r.querySelector(`i`);e&&(e.className=`ph ph-list`)})}))}let r=()=>{if(!n)return;let t=window.location.hash||`#/`;t===`#/`?n.innerHTML=`
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              ${e.personal.title.split(` / `)[0]} <br>
              <span>& Solution Architect</span>
            </h1>
            <p class="hero-description">
              ${e.personal.summary}
            </p>
            <div class="hero-actions">
              <a href="#/experience" class="btn-primary">Explore Experience</a>
              <a href="#/contact" class="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image-container">
            <div class="hero-image-wrapper">
              <img src="/profile.png" alt="${e.personal.name}" class="hero-image">
            </div>
          </div>
        </div>
      `:t===`#/experience`?n.innerHTML=`
        <div style="margin-bottom: 40px; padding-top: 40px;">
          <h2 style="display: inline-block;">Professional Experience</h2>
        </div>
        <div style="display: flex; flex-direction: column;">
          ${e.experience.map(e=>`
        <div class="glass-panel experience-card">
          <h3 style="font-size: 1.8rem; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            ${e.company}
          </h3>
          <div style="display: flex; flex-direction: column; gap: 15px;">
            ${e.roles.map(e=>`
              <div>
                <p style="color: var(--text-primary); font-size: 1.1rem; font-weight: 600;">${e.title}</p>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${e.period}</p>
                ${e.description?`<p style="color: var(--text-secondary); margin-top: 8px;">${e.description}</p>`:``}
              </div>
            `).join(``)}
          </div>
        </div>
      `).join(``)}
        </div>
      `:t===`#/skills`?n.innerHTML=`
        <div style="margin-bottom: 50px; padding-top: 40px; text-align: center;">
          <h2 style="display: inline-block;">Core Skills & Expertise</h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 15px auto 0; font-size: 1.1rem; line-height: 1.6;">
            A comprehensive overview of my technical stack, architectural knowledge, and leadership capabilities.
          </p>
        </div>
        <div class="skills-grid">
          ${e.skills.map(e=>`
        <div class="glass-panel skill-card" style="padding: 30px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; text-align: center; cursor: default;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 210, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
            <i class="ph ${e.icon}" style="font-size: 2rem; color: var(--accent-color);"></i>
          </div>
          <span style="font-weight: 600; font-size: 1.1rem;">${e.name}</span>
        </div>
      `).join(``)}
        </div>
      `:t===`#/contact`?n.innerHTML=`
        <div style="padding-top: 60px; padding-bottom: 60px;">
          <div class="glass-panel" style="text-align: center; padding: 60px 20px;">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Let's Connect</h2>
            <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 30px auto;">Open to new opportunities and interesting projects.</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <a href="#" onclick="copyText('${e.personal.contact.email}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-envelope-simple" style="font-size: 1.2rem;"></i>
                ${e.personal.contact.email}
              </a>
              <a href="#" onclick="copyText('${e.personal.contact.phone}', event)" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; cursor: pointer; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-phone" style="font-size: 1.2rem;"></i>
                ${e.personal.contact.phone}
              </a>
              <a href="${e.personal.contact.linkedin}" target="_blank" style="display: flex; align-items: center; gap: 8px; padding: 12px 24px; border: 1px solid var(--border-color); border-radius: 30px; background: var(--bg-secondary); transition: all 0.3s ease; color: var(--text-primary); text-decoration: none;">
                <i class="ph ph-linkedin-logo" style="font-size: 1.2rem;"></i>
                LinkedIn
              </a>
            </div>
            <p style="color: var(--text-secondary); margin-top: 40px; font-size: 0.9rem;">© ${new Date().getFullYear()} ${e.personal.name}. All rights reserved.</p>
          </div>
        </div>
      `:n.innerHTML=`
        <div style="padding-top: 100px; text-align: center;">
          <h2>404 - Page Not Found</h2>
          <br>
          <a href="#/" style="color: var(--accent-color);">Go back Home</a>
        </div>
      `};window.addEventListener(`hashchange`,r),r()});