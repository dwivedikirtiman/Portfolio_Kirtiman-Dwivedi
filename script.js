// Smooth scrolling for navigation links
document.querySelectorAll('nav a, footer a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Theme Switcher Functionality
const themeButtons = document.querySelectorAll('.theme-btn');
const root = document.documentElement;

console.log('Script loaded successfully.');

if (!themeButtons.length) console.error('No theme buttons found.');
else console.log(`Found ${themeButtons.length} theme buttons.`);

function applyTheme(theme) {
    if (!root) return console.error('Root element not found.');
    console.log(`Applying theme: ${theme}`);
    switch (theme) {
        case 'light':
            root.style.setProperty('--bg-color', '#f4f4f4');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--section-bg-dark', '#1a1a1a');
            root.style.setProperty('--section-text-dark', '#fff');
            break;
        case 'dark':
            root.style.setProperty('--bg-color', '#1a1a1a');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--section-bg-dark', '#333');
            root.style.setProperty('--section-text-dark', '#fff');
            break;
        case 'blue':
            root.style.setProperty('--bg-color', '#e6f0fa');
            root.style.setProperty('--text-color', '#003087');
            root.style.setProperty('--section-bg-dark', '#003087');
            root.style.setProperty('--section-text-dark', '#fff');
            break;
        case 'green':
            root.style.setProperty('--bg-color', '#e6f4ea');
            root.style.setProperty('--text-color', '#1a3c34');
            root.style.setProperty('--section-bg-dark', '#1a3c34');
            root.style.setProperty('--section-text-dark', '#fff');
            break;
        case 'purple':
            root.style.setProperty('--bg-color', '#f3e5f5');
            root.style.setProperty('--text-color', '#4a0072');
            root.style.setProperty('--section-bg-dark', '#4a0072');
            root.style.setProperty('--section-text-dark', '#fff');
            break;
        default: console.warn(`Unknown theme: ${theme}`);
    }
}

applyTheme('light');
console.log('Default theme (light) applied on page load.');

themeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        if (theme) {
            applyTheme(theme);
            //alert(`Theme changed to: ${theme}`);
        } else console.error('No data-theme attribute found.');
    });
});

// Resume options functionality
document.querySelectorAll('.resume-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.getAttribute('data-action');
        const resumeUrl = './Assets/Projects/KirtimanDwivedi_Resume.pdf'; // Replace with your resume path

        if (action === 'view') window.open(resumeUrl, '_blank');
        else if (action === 'download') {
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Kirtiman_Dwivedi_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
});

// Back to Top button functionality
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

// Preloader functionality
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Contact form submission feedback
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Your message has been submitted. Thank you! I'll get back to you soon.");
            form.reset(); 
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Error submitting the form. Please check your internet connection and try again.");
    }
});


// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const themeSwitcher = document.querySelector('.theme-switcher');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    themeSwitcher.classList.toggle('active');
    hamburger.textContent = navUl.classList.contains('active') ? '✕' : '☰';
});