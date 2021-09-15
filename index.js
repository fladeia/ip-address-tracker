const latitude = -25.4233676
const longitude = -49.2633585
const urlMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>'
const mymap = L.map('mapid').setView([latitude, longitude], 14);
const marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer(urlMap, { attribution }).addTo(mymap);


