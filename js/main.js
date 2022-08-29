AOS.init();

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,

    responsive: {
        // breakpoint from 0 up
        0 : {
            items: 1,
        },

        // breakpoint from 576 up
        577 : {
            items: 2,
        },

        // breakpoint from 768 up
        769 : {
            items: 3,
            margin: 20,
        },

         // breakpoint from 992 up
         993 : {
            items: 4,
        }
    },
    
});
$('.slider-btn-prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})

// accordion 

const accordions = document.querySelectorAll('.faq-accordion');

	accordions.forEach(function(item) { 
		item.addEventListener('click', function(item){
			const self = item.currentTarget;
			const content = self.querySelector('.faq-accordion-content');
			const accordionIcon = self.querySelector('.faq-accordion-icon');
			content.classList.toggle('hidden');
			if (content.classList.contains('hidden')) {
				accordionIcon.style.transform = 'rotate(0deg)';
				content.style.maxHeight = null;
			} else {
				accordionIcon.style.transform = 'rotate(45deg)';
				content.style.maxHeight = content.scrollHeight + 'px';
				content.style.opacity = "1";
			}
		});
	});

    // burger

    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav');

    burger.addEventListener('click', function(){
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
  