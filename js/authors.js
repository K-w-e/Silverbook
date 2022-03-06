$('span.btn-more').on('click', function (e) {
    var idElement = "more-" + e.target.parentElement.parentElement.id
    console.log(idElement)
    if (document.getElementById(idElement).style.display == "block") {
        document.getElementById(idElement).style.display = "none"
        e.target.innerHTML = "Read more..."
    }
    else {
        document.getElementById(idElement).style.display = "block"
        e.target.innerHTML = "Read less..."
    }

})