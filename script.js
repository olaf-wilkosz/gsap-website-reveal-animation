let textWrapper = document.querySelector('.loader-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

gsap.timeline().from('.loader-text .letter', 12, {
	x: 40,
	opacity: 0,
	ease: Expo.easeOut,
	stagger: 0.1,
	delay: 2.4,
});

gsap.from('.loader-wrapper', 2, {
	scale: 0.8,
	ease: Power1.inOut,
});

gsap.from('.loader', 2, {
	top: '100%',
	ease: Power3.inOut,
});

gsap.to(
	'.loader-wrapper, .pre-loader',
	1,
	{
		scale: 1.5,
		opacity: 0,
		display: 'none',
		ease: Power3.inOut,
		delay: 2,
	},
	'-=1'
);

gsap.from('.revealer', 1, {
	width: 0,
	ease: Power3.inOut,
	delay: 5,
});

gsap.to('.revealer', 0.8, {
	left: '100%',
	ease: Power3.inOut,
	delay: 6,
});

gsap.to('.loader-text-wrapper', 0.2, {
	opacity: 0,
	display: 'none',
	ease: Power3.inOut,
	delay: 6,
});

gsap.from('.col-left', 1, {
	left: '-100%',
	ease: Power3.inOut,
	delay: 6.5,
});

gsap.from('.col-left .copy > div', 1.5, {
	x: -40,
	opacity: 0,
	ease: Power3.inOut,
	delay: 7,
	stagger: 0.3,
});

gsap.from('.col-right .header', 1, {
	x: -20,
	opacity: 0,
	ease: Power3.inOut,
	delay: 7.5,
});
