


let splide = new Splide( '#main-carousel', {
    type   : 'loop',
    focus: 'center',
    height: 500,
    padding: '15%',
    cover: true,
    gap : 21,
    pagination: false,
    speed: 500,

    breakpoints: {
        640: {
            padding: false,
            gap: 0,
        },
    }
} );

splide.mount();




