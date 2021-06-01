$(document).ready(function () { 
    $(':button').on("click", function() {
        const elementos = $(':text')
        for(let element of elementos){
            $('ol').append('<li>'+element.value+'</li>')
            element.value = ''
        }
    })
})
