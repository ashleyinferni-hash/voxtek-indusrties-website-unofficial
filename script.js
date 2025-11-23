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
