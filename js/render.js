async function loadConfig() {
    const response = await fetch("./js/config.json");
    const config = await response.json();

    document.getElementById("hero-eyebrow").textContent = config.hero.eyebrow;
}

loadConfig();