// scroll top
var btn = $("#scroll_top");

$(window).scroll(() => {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// search
var icon_search = document.querySelector('.icon-search')
var modalElement = document.querySelector('.modal')
var iconClose = document.querySelector('.icon-close')

icon_search.addEventListener('click', (e) => {
    e.preventDefault()
    modalElement.classList.toggle('hide')
})
iconClose.addEventListener('click', () => {
    modalElement.classList.toggle('hide')
})

// your card
var icon_card = document.querySelector('.card-icon')
var modalE = document.querySelector('.modal-card')
var iconClose = document.querySelector('.close-icon')

icon_card.addEventListener('click', e => {
    e.preventDefault()
    modalE.classList.toggle('hide');
})
iconClose.addEventListener('click', e => {
    e.preventDefault()
    modalE.classList.toggle('hide');
})

/*------------------
        Preloader
    --------------------*/
$(window).on('load', function () {
    $('.loader').fadeOut();
    $('#preloader').delay(900).fadeOut('slow');
});