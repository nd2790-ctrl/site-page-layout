// Assignment 8 JavaScript - Value-Based Care Website

// DOM Queries - accessing elements on the page
const changeTextBtn = document.getElementById('changeTextBtn');
const colorBtn = document.getElementById('colorBtn');
const textTarget = document.getElementById('textTarget');
const colorBox = document.getElementById('colorBox');
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const dayMessage = document.getElementById('dayMessage');
const dayFeature = document.getElementById('dayFeature');
const body = document.body;

// Function 1: Updates page content (changes text)
function updateTextContent() {
    const healthcareFacts = [
        "Value-based care can reduce healthcare costs by up to 30% while improving outcomes.",
        "Preventive care saves $5.60 for every $1 spent on early intervention programs.",
        "Integrated care teams improve patient satisfaction by 40% compared to traditional models.",
        "Digital health technologies can reduce hospital readmissions by 25% through remote monitoring.",
        "Patient-centered care models show 15% better outcomes for chronic disease management."
    ];
    
    const randomIndex = Math.floor(Math.random() * healthcareFacts.length);
    textTarget.textContent = healthcareFacts[randomIndex];
    
    // Visual feedback
    textTarget.style.fontWeight = 'bold';
    textTarget.style.color = '#2c5aa0';
    setTimeout(() => {
        textTarget.style.fontWeight = '';
        textTarget.style.color = '';
    }, 2000);
}

// Function 2: Changes CSS properties (modifies appearance)
function changeBoxStyle() {
    const colors = ['#2c5aa0', '#4CAF50', '#FF6B6B', '#FFA726', '#26C6DA', '#AB47BC'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply multiple CSS changes
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.borderRadius = Math.floor(Math.random() * 30) + 'px';
    colorBox.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
    colorBox.style.boxShadow = `0 4px 8px ${randomColor}40`;
    
    // Add content to show the change
    colorBox.innerHTML = `<p>Style Updated!</p><p>${new Date().toLocaleTimeString()}</p>`;
    colorBox.style.color = 'white';
    colorBox.style.display = 'flex';
    colorBox.style.alignItems = 'center';
    colorBox.style.justifyContent = 'center';
    colorBox.style.flexDirection = 'column';
    colorBox.style.textAlign = 'center';
    
    // Reset after 3 seconds
    setTimeout(() => {
        colorBox.style.backgroundColor = '';
        colorBox.style.borderRadius = '';
        colorBox.style.transform = '';
        colorBox.style.boxShadow = '';
        colorBox.innerHTML = '';
        colorBox.style.display = '';
    }, 3000);
}

// Day of the Week Feature
function setDayFeature() {
    const date = new Date();
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Add day class to body for styling
    const dayClasses = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    body.classList.add(dayClasses[day]);
    
    // Day-specific content using conditional statements
    const dayContent = {
        0: { // Sunday
            message: "Sunday Reflection: Healthcare should prioritize patient well-being every day of the week.",
            theme: "Weekly planning for better health outcomes"
        },
        1: { // Monday
            message: "Monday Motivation: Start the week with preventive care strategies.",
            theme: "Prevention and early intervention focus"
        },
        2: { // Tuesday
            message: "Tuesday Insight: Coordinated care reduces medical errors by 30%.",
            theme: "Care coordination and teamwork"
        },
        3: { // Wednesday
            message: "Wednesday Wisdom: Value-based models improve chronic disease management.",
            theme: "Chronic care management strategies"
        },
        4: { // Thursday
            message: "Thursday Thought: Digital health tools enhance patient engagement.",
            theme: "Technology in healthcare innovation"
        },
        5: { // Friday
            message: "Friday Focus: Patient satisfaction drives value-based success.",
            theme: "Patient-centered care approaches"
        },
        6: { // Saturday
            message: "Saturday Summary: Community health impacts overall system costs.",
            theme: "Community and public health"
        }
    };
    
    const today = dayContent[day];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    if (dayFeature) {
        dayFeature.innerHTML = `
            <h3>${dayNames[day]} Healthcare Focus</h3>
            <p><strong>${today.theme}</strong></p>
            <p>${today.message}</p>
        `;
    }
}

// Mobile Navigation Toggle (Extra Credit)
function toggleMobileMenu() {
    siteNav.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const isExpanded = siteNav.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    siteNav.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
}

// Event Listeners
if (changeTextBtn) {
    changeTextBtn.addEventListener('click', updateTextContent);
}

if (colorBtn) {
    colorBtn.addEventListener('click', changeBoxStyle);
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on nav links
document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Initialize features when page loads
document.addEventListener('DOMContentLoaded', function() {
    setDayFeature();
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.site-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Add initial styles for interactive elements
    if (colorBox) {
        colorBox.style.height = '100px';
        colorBox.style.margin = '1rem 0';
        colorBox.style.border = '2px dashed #ccc';
        colorBox.style.transition = 'all 0.3s ease';
    }
});
