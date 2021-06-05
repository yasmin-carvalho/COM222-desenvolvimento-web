function pesquisaClima(cidade){
    return new Promise((resolve, reject) => {
        try {
            resolve($.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=d5a409b9a1b2eadfbf4525a057334903`))
        }
        catch (e){
            reject(e)
        }
    })
}

$(document).ready(() => {
    $('#buttonClick').click(() => {
        const encontrarCidade = $('#encontrar').val()
        console.log(encontrarCidade)
        pesquisaClima(encontrarCidade)
            .then(resultadoPesquisa => {
                console.log(resultadoPesquisa)
                $('#cidade').html(`${resultadoPesquisa.name}`)
                $('#condicaoAtual').html(`${resultadoPesquisa.weather[0].description}`)
                $('#tempAtual').html(`${converteTemp(resultadoPesquisa.main.temp)}` + "°C")
                $('#tempMax').html(`${converteTemp(resultadoPesquisa.main.temp_max)}` + "°C")
                $('#tempMin').html(`${converteTemp(resultadoPesquisa.main.temp_min)}` + "°C")
            })
            .catch(error => {
                alert('Erro, cidade inválida!')
            })
    })
})

function converteTemp(kelvin) {
    const celcius = kelvin - 273.15
    return parseFloat(celcius.toFixed(2))
}


