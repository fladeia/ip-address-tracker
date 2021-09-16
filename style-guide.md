Preparing your page
Before writing any code for the map, you need to do the following preparation steps on your page:

Include Leaflet CSS file in the head section of your document:

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
Include Leaflet JavaScript file after Leaflet’s CSS:

 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
Put a div element with a certain id where you want your map to be:

 <div id="mapid"></div>
Make sure the map container has a defined height, for example by setting it in CSS:

#mapid { height: 180px; }


Setting up the map

First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => { 
//     console.log(data)
// })


// const apiUrlTest = 'https://jsonplaceholder.typicode.com/users'

  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> -->

