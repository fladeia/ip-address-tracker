const ipInput = document.querySelector("#ip")
const btn = document.querySelector(".btn")
const ipShow = document.querySelector(".ipAddress")
const locationShow = document.querySelector(".location")
const utcShow = document.querySelector(".utc")
const ispShow = document.querySelector(".isp")

// let latitude = -25.4134646
// let longitude = -49.2263565
const apiUrlMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const apiUrlIp = `https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`
// const apiUrlTest = 'https://jsonplaceholder.typicode.com/users'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>'

// AdBlock chrome extension may cause error "net::ERR_BLOCKED_BY_CLIENT" 
async function fetchData(ip) {
    res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_nl22wkvVRmAYq4wTQ6VoJOGx3es1p&ipAddress=${ip}`)
    data = await res.json()
    console.log(data.location.lat);
    console.log(data.location.lng);
    console.log(data.ip);
    console.log(data.location.city);
    console.log(data.location.country);
    console.log(data.location.postalCode);  
    console.log(data.location.timezone);  
    console.log(data.isp);  

    ipShow.innerHTML = data.ip
    locationShow.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
    utcShow.innerHTML = `UTC${data.location.timezone}`
    ispShow.innerHTML = data.isp
    // let latitude = data.location.lat
    // let longitude = data.location.lng
}

console.log(latitude);
console.log(longitude);

btn.addEventListener('click', () => {
    const ip = ipInput.value
    fetchData(ip)
})

const mymap = L.map('mapid').setView([latitude, longitude], 14);
const marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer(apiUrlMap, { attribution }).addTo(mymap);
