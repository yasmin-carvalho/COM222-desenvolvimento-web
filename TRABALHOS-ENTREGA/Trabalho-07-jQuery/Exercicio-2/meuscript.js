$(document).ready(function() {
    $('#novo').click(function(){
        const feitico = $('[feitico]').val()
        const nivel = $('[nivel]').val()
        $('#tabela').append('<tr><td>'+feitico+'</td><td>'+nivel+'</td></tr>')
    })
})