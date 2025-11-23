// --- JAVASCRIPT FOR VOXTEK INTERACTIVITY ---

// 1. Static/Glitch Effect Functionality

function applyGlitch(element) {
    if (element) {
        // Toggle the 'glitch' class which is defined in style.css
        element.classList.toggle('glitch');
    }
}

function randomizeGlitch() {
    // Select elements we want to glitch (e.g., the Rivalry Page headline or main Home Page quote)
    const targets = [
        document.querySelector('.error-title'), // Static Page Title
        document.querySelector('.vox-quote'),   // Home Page Quote
        document.querySelector('.header-nav')   // Glitch the navigation bar
    ];

    targets.forEach(element => {
        // Only attempt to glitch elements that exist on the current page
        if (element) {
            // Apply a small chance (e.g., 20%) that the element will glitch
            if (Math.random() < 0.2) {
                applyGlitch(element);
                // Set a timeout to remove the glitch after a very short duration (50-200ms)
                setTimeout(() => applyGlitch(element), Math.random() * 150 + 50);
            }
        }
    });
}

// Start the glitch randomization loop every 2 seconds
setInterval(randomizeGlitch, 2000);


// 2. Dynamic News Ticker Functionality (on index.html)

const headlines = [
    "⚡️ LIVE UPDATE: Radio Static Reported: Vintage Tech Fails to Adapt.",
    "🚀 VOXTEK Q4 Profits—Too Big to Print! The Economy is Modern.",
    "💄 Velvette's New Line Dominates Infernal Runway—Old Fashion is DUST!",
    "🚨 WARNING: Do not listen to analog broadcasts. They are inefficient and boring.",
    "🔥 EXCLUSIVE: Valentino signs new mega-deal. Entertainment is the Future."
];

function updateTicker() {
    const ticker = document.querySelector('.news-ticker p');
    if (ticker) {
        // Find the currently displayed headline index
        let currentText = ticker.textContent.trim();
        let currentIndex = headlines.findIndex(h => h.trim() === currentText) || 0;
        
        // Calculate the next index
        let nextIndex = (currentIndex + 1) % headlines.length;
        
        // Update the text content
        ticker.textContent = headlines[nextIndex];
    }
}

// Start the ticker update every 5 seconds (5000ms)
if (document.querySelector('.news-ticker')) {
    updateTicker(); // Show the first headline immediately
    setInterval(updateTicker, 5000);
}
// 3. In-Universe Privacy Policy

function showPrivacyPolicy(event) {
    event.preventDefault(); // Stop the link from trying to go to another page

    alert(
        "VOXTEK PRIVACY POLICY (V.1.0):\n\n" +
        "1. All your data is acquired. All of it.\n" +
        "2. Your thoughts are product.\n" +
        "3. Your soul is collateral.\n" +
        "4. Your consent is assumed.\n\n" +
        "Thank you for joining the future. We're watching."
    );
}
// VOXTEK Content Control: Disable Right-Click Menu
// We wrap it in a DOMContentLoaded listener to ensure the page is ready.

document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('contextmenu', function(e) {
        // Prevents the default right-click menu from appearing
        e.preventDefault(); 
        
        // Displays the in-character warning
        alert("ACCESS DENIED: VoxTek content is proprietary. Don't try to steal the signal. Compliance is mandatory.");
    });
    
    // NOTE: Keep all your other existing JavaScript functions and listeners 
    // (like the glitch or ticker functions) outside of this new wrapper, 
    // unless they also rely on the document being ready.
    
});
// --- SIGNAL ACQUISITION FADE OUT (CLEANED UP) ---

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Instantly hide the element right after all resources are loaded
        loadingScreen.style.display = 'none';
    }
});
// --- VOXTEK DATA HARVESTING & PERSONALIZED ADS ---

function runDataHarvesting() {
    const banner = document.getElementById('ad-banner');
    if (!banner) return; // Stop if the element isn't on this page

    const savedObsession = localStorage.getItem('userObsession');

    if (!savedObsession) {
        // --- DATA HARVESTING: FIRST VISIT ---
        
        // Use a prompt to "harvest" data (ask a themed, invasive question)
        const obsession = prompt(
            "⚠️ VOXTEK PROMPT: System requires data acquisition for optimal signal delivery.\n\n" +
            "In one word, what is your primary, overriding obsession in Hell?"
        );

        if (obsession && obsession.trim() !== '') {
            const cleanedObsession = obsession.trim().toUpperCase();
            localStorage.setItem('userObsession', cleanedObsession);
            displayAd(banner, cleanedObsession);
        } else {
            // Default ad if user cancels or leaves blank
            banner.textContent = "ATTENTION: Upgrade to VOX+ to avoid data acquisition prompts.";
        }

    } else {
        // --- PERSONALIZED AD: SUBSEQUENT VISITS ---
        displayAd(banner, savedObsession);
    }
}

function displayAd(element, obsession) {
    element.innerHTML = `
        ⚡️ **VOX ADVERTISER NOTICE:** Data mining confirms your focus on **${obsession}**. 
        Click now for exclusive deals related to **${obsession}**! 💸
    `;
}
// --- VOXTEK SLOGAN MANIPULATOR (Invasive Branding) ---

// Store the original title of the document
const originalTitle = document.title;
// CORRECTED SLOGAN
const voxSlogan = " | VOXTEK: trust us with your everything"; 

document.addEventListener('visibilitychange', function() {
    // Check if the document (tab) is hidden
    if (document.hidden) {
        // If the user switches away, enforce the correct slogan
        document.title = originalTitle + voxSlogan;
    } else {
        // If the user switches back, revert to the original, more informative title
        document.title = originalTitle;
    }
});
