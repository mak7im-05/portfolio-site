const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 125,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {

	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}




const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	})

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDedault();
		}
	}
}


const select = document.querySelector('.change__lang');
const AllLang = ['ru', 'en'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}
function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!AllLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}

changeLanguage();