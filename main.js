document.addEventListener('DOMContentLoaded', () => {
    // Populate Profile Data
    document.getElementById('hero-name').textContent = portfolioData.profile.name;
    document.getElementById('hero-title').textContent = portfolioData.profile.title;
    document.getElementById('hero-summary').textContent = portfolioData.profile.summary;
    document.getElementById('contact-email').textContent = `Email: ${portfolioData.profile.email}`;
    document.getElementById('contact-phone').textContent = `Phone: ${portfolioData.profile.phone}`;
    document.getElementById('contact-location').textContent = `Location: ${portfolioData.profile.location}`;
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    portfolioData.profile.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag fade-in';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });

    // Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        const projectHtml = `
            <div class="glass-card project-card fade-in">
                <div class="project-img-container">
                    <img src="${project.screenshots[0]}" alt="${project.title}" class="project-img">
                </div>
                <div class="project-content">
                    <div class="project-role-date">
                        <span>${project.role}</span>
                        <span>${project.date}</span>
                    </div>
                    <h4 class="project-title">${project.title}</h4>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.insertAdjacentHTML('beforeend', projectHtml);
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Animate hero section elements immediately
    document.querySelector('.hero-content').classList.add('fade-in');
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible');
    }, 100);
});
