let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '5b1eac2f314147a5b62ac3f242e25d34'
let difKelvin = 273.15

let ciudad = "Rome"


document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})


function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
    
}

function mostrarDatosClima(response){
    // console.log(response)
    
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML=''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const humedad = response.main.humidity
    const description = response.weather[0].description
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre + ', ' + paisNombre    

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.ceil(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorológica es: ${description}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descriptionInfo)
}

    