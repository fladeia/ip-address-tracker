const ipInput = document.querySelector("#ip")
const btn = document.querySelector(".btn")
const ipShow = document.querySelector(".ipAddress")
const locationShow = document.querySelector(".location")
const utcShow = document.querySelector(".utc")
const ispShow = document.querySelector(".isp")

let ip
let latitude = -25.4612667
let longitude = -49.28532

const apiUrlMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>'
const apiUrlIp = `https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`
const apiUrlIpLocal = 'https://api.ipify.org?format=json'


async function fetchLocalIp() {
    resLocal = await fetch(apiUrlIpLocal)
    dataLocal = await resLocal.json()
    ip = dataLocal.ip
    console.log(ip);
    fetchData(ip)
}
fetchLocalIp()

// AdBlock chrome extension may cause error "net::ERR_BLOCKED_BY_CLIENT" 
async function fetchData(ip) {

    res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`)
    data = await res.json()

    ipShow.innerHTML = data.ip
    locationShow.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
    utcShow.innerHTML = `UTC${data.location.timezone}`
    ispShow.innerHTML = data.isp
}

btn.addEventListener('click', () => {
    ip = ipInput.value
    fetchData(ip)
})

const mymap = L.map('mapid').setView([latitude, longitude], 14);
const marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer(apiUrlMap, { attribution }).addTo(mymap);
