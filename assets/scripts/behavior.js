$( document ).ready(function() {
    console.log( "test!" );

    $('#burger').on('click', () => {
        $('#nav-links').toggleClass('is-active');
        $('.navbar-end').toggleClass('is-flex');
        $('.navbar-end').toggleClass('is-flex-direction-column');
        $('.navbar-end .navbar-item').toggleClass('is-align-self-flex-end');
    });
});