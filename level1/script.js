// ============== scroll revael ===========

ScrollReveal({

     reset: true ,
     distance : '80px' ,
     duration : 2000 ,
     delay : 200 ,

    });


    // ScrollReveal().reveal('.container h1', { origin : 'top' });
    ScrollReveal().reveal('.container h1 , .container a , .container .btn', {
         interval: 300 ,
        
         origin : 'top',

     });
    ScrollReveal().reveal('.hero h2  , .hero p ,  .hero .buttun', { origin : 'left' , interval : 300 });

    ScrollReveal().reveal('.features i  , .features h4  , .features p ', { origin : 'buttom' , interval : 300 , delay : 100 });

    ScrollReveal().reveal(' .about h3 , .about .line , .about h1 , .about p , .about a  ', { origin : 'left' , interval : 300 });
    ScrollReveal().reveal('.about .images ', { origin : 'right' });

    ScrollReveal().reveal('.services h3 ', { origin : 'top' });
    ScrollReveal().reveal('.services .card ', { origin : 'top' });
    ScrollReveal().reveal(' .services img , .services h4  , .services p ', { origin : 'top' , opacity : 0});