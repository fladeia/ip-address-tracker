const latitude = -25.4233676
const longitude = -49.2633585
const apiUrlMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const apiUrlIp = 'https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=200.17.192.72'
const ip = '200.17.192.72'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>'
const mymap = L.map('mapid').setView([latitude, longitude], 14);
const marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer(apiUrlMap, { attribution }).addTo(mymap);


// fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => { console.log(data); })

// AdBlock extension may cause error "net::ERR_BLOCKED_BY_CLIENT" 
// fetch('https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=200.17.192.72')
// .then((res) => res.json())
// .then((data) => { 
//     console.log(data)
// })

// async function fetchData() {
//     res = await fetch('https://jsonplaceholder.typicode.com/users')
//     data = await res.json()
// }
// fetchData()

// async function fetchData() {
//     res = await fetch(apiUrlIp)
//     data = await res.json()
//     console.log(data);
// }
// fetchData()