$( document ).ready(function() {
    console.log( "test!" );

    $('#burger').on('click', () => {
        $('#nav-links').toggleClass('is-active');
        $('.navbar-end').toggleClass('is-flex');
        $('.navbar-end').toggleClass('is-flex-direction-column');
        $('.navbar-end .navbar-item').toggleClass('is-align-self-flex-end');
    });




    // tabs
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');

    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        // console.log(target);
        tabContentBoxes.forEach(box => {
        if (box.getAttribute('id') === target) {
            box.classList.remove('is-hidden');
        } else {
            box.classList.add('is-hidden');
        }
        })
    })
    
})

    // tabs = $('.tabs li');
    // tabContentBoxes = $('#tab-content > div');

    // tabs.each(function() {
    //     $(this).on('click', function() {
    //         tabs.each(function() {
    //             $(this).removeClass('is-active');
    //         })
    //         $(this).addClass('is-active');

    //     tabContentBoxes.each(function() {
    //         // this is wrong
    //         if ($(this).attr('id') === $(this).attr('data-target')) {
    //             $(this).removeClass('is-hidden');
    //         } else {
    //             $(this).addClass('is-hidden');
    //             console.log($(this))
    //             console.log($(this).attr('id'));
    //         }
    //     })
            // console.log($(this));
            // console.log($(this).dataset.target);
            // const target = $(this).dataset.target;
            // console.log(target);
//         })
//     })
// });








});