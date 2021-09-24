// Get back data from config.json (development environment)
async function loadConfig() {
    let result = await fetch("../../config.json");
    return result.json();
}

let apiUrl = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "http://localhost:8000":"https://orinoco-dev-api.herokuapp.com/";

// let apiUrl = "https://orinoco-dev-api.herokuapp.com/";
