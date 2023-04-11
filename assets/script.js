$(document).ready(function(){
	$('.carousel').slick({
	slidesToShow: 1,
	dots:true,
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows:false
	});
  });
  const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const textEl = document.querySelector('.testtext');

const testimonials = [{
  testtext: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.'
},{
	testtext: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.'
},{
	testtext: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.'
},{
	testtext: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.'
},{
	testtext: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.'
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
	author.addEventListener('click', (e) => {
		addTestimonial(idx);
		author.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = testimonials[idx];
	
	textEl.innerHTML = testimonial.testtext;
	authorsEl.forEach(author => {
		author.classList.remove('selected');
	});
}
$('.counter').addClass('animated fadeInDownBig');

    $('.counter').counterUp({
      delay: 10,
      time: 2000 
    });
