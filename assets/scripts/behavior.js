// .ready() event listener waits for DOM to load before jQuery fires
$( document ).ready(function() {

    // href needed to make links crawlable, but this prevents hyper referencing.
    $('.tab-link').on('click', (e) => {
        e.preventDefault();
    })


    // When hamburger menu is clicked, make nav items go to the right side
    $('#burger').on('click', () => {
        $('#nav-links').toggleClass('is-active');
        $('.navbar-end').toggleClass('is-flex');
        $('.navbar-end').toggleClass('is-flex-direction-column');
        $('.navbar-end .navbar-item').toggleClass('is-align-self-flex-end');
    });

    // connect the tabs list field to the content boxes corresponding below
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');
    const tabContent2Boxes = document.querySelectorAll('#tab-content-2 > div');

    // for each tab, add an event listener to listen for it being clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // when one is clicked, remove active class from each
            // then add active class to tab most recently clicked
            tabs.forEach(item => item.classList.remove('is-active'));
            tab.classList.add('is-active');

            const target = tab.dataset.target;
            // for each content box below, hide each card
            // then make target card corresponding with clicked tab not hidden
            tabContentBoxes.forEach(box => {
                if (box.getAttribute('id') === target) {
                    box.classList.remove('is-hidden');
                } else {
                    box.classList.add('is-hidden');
                }
            })

            tabContent2Boxes.forEach(box => {
                if (box.getAttribute('id') === target) {
                    box.classList.remove('is-hidden');
                } else {
                    box.classList.add('is-hidden');
                }
            })
        })
    })

    // get each nav item that has the class scroll
    var scrollLink = $('.scroll');
  
    // Smooth scrolling
    // when the link is clicked, don't hyper link it
    scrollLink.click(function(e) {
      e.preventDefault();
    // create new animation for the body and html elements  
      $('body,html').animate({
    // gets distance from #link and offset down to where you are linking to
        scrollTop: $(this.hash).offset().top
      }, 800 );
    });


    // Intersection Observer
    const fadeins = document.querySelectorAll('.topsections');
    const fadeleft = document.querySelectorAll('.from-left');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeins.forEach(fader => {
        appearOnScroll.observe(fader);
    })
    fadeleft.forEach(fader => {
        appearOnScroll.observe(fader);
    })

});