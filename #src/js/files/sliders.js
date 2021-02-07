//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

//! slider home page
let sliderSlider = new Swiper('.home-top__slider', {
	navigation: {
		nextEl: '.control-arrow__right',
		prevEl: '.control-arrow__left',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	grabCursor: true,
	loop: true,
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	// observer: true,
	// observeParents: true,
	slidesPerView: 1,
	// spaceBetween: 0,
	// autoHeight: true,
	speed: 1000,

	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

//! slider Project page

let sliderProject = new Swiper('.project-page__slider', {
	navigation: {
		nextEl: '.control-arrow__right',
		prevEl: '.control-arrow__left',
	},
	slidesPerView: 1,
	speed: 800,
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

//! slider Certificates page

let sliderCertificates = new Swiper('.certificates-page__slider', {
	effect: 'coverflow',


	coverflowEffect: {

		rotate: 30,

		stretch: 50,

		slideShadows: true,
	},
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.control-arrow__right',
		prevEl: '.control-arrow__left',
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,
	speed: 800,

	breakpoints: {
		600: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	},

		
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});