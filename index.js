const ipInput = document.querySelector("#ip")
const btn = document.querySelector(".btn")
const ipShow = document.querySelector(".ipAddress")
const locationShow = document.querySelector(".location")
const utcShow = document.querySelector(".utc")
const ispShow = document.querySelector(".isp")

let ip
let latitude = -25.4612667
let longitude = -49.28532

// ----------- map 
const apiUrlMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>'
const markerIcon = L.icon({
    iconUrl: "./images/icon-location.svg"
})
const mymap = L.map('mapid', {zoomControl: false}).setView([latitude, longitude], 14);
const marker = L.marker([latitude, longitude], {icon: markerIcon}).addTo(mymap);

L.tileLayer(apiUrlMap, { attribution }).addTo(mymap);
// ----------- map 

const apiUrlIp = `https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`
const apiUrlIpLocal = 'https://api.ipify.org?format=json'

async function fetchLocalIp() {
    resLocal = await fetch(apiUrlIpLocal)
    dataLocal = await resLocal.json()
    ip = dataLocal.ip
    fetchData(ip)
}
fetchLocalIp()

// AdBlock chrome extension may cause error "net::ERR_BLOCKED_BY_CLIENT" 
async function fetchData(ip) {
    res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`)
    data = await res.json()

    const { city, country, postalCode, timezone, lat, lng} = data.location

    ipShow.innerHTML = data.ip
    locationShow.innerHTML = `${city}, ${country} ${postalCode}`
    utcShow.innerHTML = `UTC${timezone}`
    ispShow.innerHTML = data.isp
    latitude = lat
    longitude = lng
    mymap.setView([latitude, longitude])
    marker.setLatLng([latitude, longitude])
}

btn.addEventListener('click', () => {
    ip = ipInput.value
    fetchData(ip)
})
