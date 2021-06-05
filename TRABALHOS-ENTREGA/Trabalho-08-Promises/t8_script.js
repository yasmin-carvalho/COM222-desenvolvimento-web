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
                $('#tempAtual').html(parseFloat(`${resultadoPesquisa.main.temp - 273.15}`) + "°C")
                $('#tempMax').html(parseFloat(`${resultadoPesquisa.main.temp_max - 273.15}`) + "°C")
                $('#tempMin').html(parseFloat(`${resultadoPesquisa.main.temp_min - 273.15}`) + "°C")
            })
            .catch(error => {
                alert('Erro na requisição!')
            })
    })
})