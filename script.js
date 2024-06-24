// Fetch route data from a remote API (replace with your actual API endpoint)
fetch('https://api.transmetrodeli.com/routes')
.then(response => response.json())
.then(data => {
    const routeDetails = document.getElementById('route-details');

    // Dynamically populate route details using the fetched data
    data.forEach(route => {
        const routeElement = document.createElement('div');
        routeElement.innerHTML = `