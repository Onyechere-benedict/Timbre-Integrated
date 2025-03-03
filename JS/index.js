$(function () {
	// SHOW SEARCH BAR
	$(".search-button").click(function () {
		$(".search-bar").addClass("active");
	});
	// HIDE SEARCH BAR
	$(".search-bar .close-btn").click(function () {
		$(".search-bar").removeClass("active");
	});

	// HIDE/SHOW MOBILE MENU
	$(".mobile-navbar .menu-open").click(function () {
		$("body").addClass("menu-showing");
	});
	$(".mobile-navbar .menu-close").click(function () {
		$("body").removeClass("menu-showing");
	});

	// HIDE/SHOW MOBILE MENU ITEMS
	toggleMobileNav();
	window.onresize = toggleMobileNav;

	function toggleMobileNav() {
		const mediaQuery = window.matchMedia("(max-width: 1199px)");

		if (mediaQuery.matches) {
			$("nav .submenu, nav .submenu-category").slideUp();
			$("nav .menu-item .toggle-menu").click(function () {
				$(this).siblings(".submenu").slideToggle();
				$(this).toggleClass("rotate");
			});
			$("nav .submenu-item .toggle-menu").click(function () {
				$(this).siblings(".submenu-category").slideToggle();
				$(this).toggleClass("rotate");
			});
		} else $("nav .submenu, nav .submenu-category").slideDown("fast");
	}

	// TOGGLE TESTIMONIAL CLIENT REVIEWS ON HOME 3

	let currentReview = 0;

	let reviewSlide = setInterval(() => {
		nextReview2();
	}, 3000);

	$(".client-reviews").hover(
		() => {
			// pause on mouse over
			clearInterval(reviewSlide);
		},
		() => {
			// resume on mouse out
			reviewSlide = setInterval(() => {
				nextReview2();
			}, 3000);
		}
	);

	$(".nav-dots .dot-outer").click(function () {
		nextReview1(parseInt($(this).attr("data-index")));
	});

	function nextReview1(index) {
		$(".client-review").removeClass("active");
		$(`.client-review:eq(${index})`).addClass("active");

		$(".nav-dots .dot-outer").removeClass("active");
		$(`.nav-dots .dot-outer:eq(${index})`).addClass("active");

		currentReview = index + 1;
		if (currentReview === 3) currentReview = 0;
	}

	function nextReview2() {
		nextReview1(currentReview);
	}
});


// observeServiceElements.forEach((el) => observer.observe(el));

const observeElements = (selectors, threshold = 0, rootMargin = "0px 0px 0px 0px") => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				entry.target?.classList.toggle("observed", entry.isIntersecting);
			});
		},
		{ threshold, rootMargin }
	);
	selectors.forEach((selector) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach((element) => observer.observe(element));
		// document.querySelectorAll(selector).forEach(observer.observe.bind(observer));
	});
};

observeElements(
	[".col1", ".col2 .col", ".inner.centered header", ".process-card", ".call-to-action .inner .text", ".blog-card", ".blog-card-alt", ".team-member-card"],
	0,
	"0px 0px 0px 3000px"
);

const popupToggler = document.querySelector(".toggle-popup");
const popupDialog = document.querySelector(".popup-overlay");
const removePopupDialog = document.querySelector("#closePopup");

const togglePopup = () => {
	popupDialog.classList.toggle("active");
	document.body.classList.toggle("no-scroll");
};

popupToggler.onclick = togglePopup;
removePopupDialog.onclick = togglePopup;

const signupButton = document.querySelector(".sign-up-btn");

const loader = document.querySelector(".loader");

const preloaderContainer = document.querySelector("#preloader");

const bodyContainer = document.querySelector(".body-container");

window.addEventListener("load", () => {
	setTimeout(() => {
		bodyContainer.classList.add("active");
		preloaderContainer.style.display = "none";
	}, 4000);
});
