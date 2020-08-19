$('.stories-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText: ["<img src='../img/arrow-prev.png'>","<img src='../img/arrow-next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})