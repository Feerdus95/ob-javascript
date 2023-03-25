let marker, map;
function initMap(){
    console.log("Inicializando mapa...")

    const position1 = {
        lat: -25.363,
        lng: 131.044
    }
    const position2 = {
        lat: 35.82089949285784,
        lng:  139.78007487324618
    }
    const position3 = {
        lat: 55.76478670708106,
        lng:  37.64782205609591
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: position1
    })

    const marker1 = new google.maps.Marker({
        position: position1,
        map,
        title: "Posición inicial"
    })
    const marker2 = new google.maps.Marker({
        position: position2,
        map,
        title: "Marcador 2"
    })
    const marker3 = new google.maps.Marker({
        position: position3,
        map,
        title: "Marcador 3"
    })
    
    geoPosition()
}

function geoPosition(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 5000}
        const watchPos = geoLoc.watchPosition(centerMap, onError, options)
    }else{
        alert("Este navegador no admite geolocalización!")
    }
}

function centerMap(position){
    const newPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(newPos)
    marker.setPosition(newPos)
    map.setCenter(newPos)
}

function onError(error){
    console.error(error)
}