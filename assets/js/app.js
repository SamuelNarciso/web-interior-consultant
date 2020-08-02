const menu = document.querySelector('.menu');
const menu_links = document.querySelector('.links');
const center = document.querySelector('.center');
const menu_individual_link = document.querySelectorAll('.link');
const menu_lines = document.querySelectorAll('.line');

const openMenu = () => {
	center.classList.toggle('Newcenter');
	menu_links.classList.toggle('Newlinks');
	menu_lines[0].classList.toggle('line1');
	menu_lines[1].classList.toggle('line2');
	menu_lines[2].classList.toggle('line3');
	menu_individual_link.forEach((link) => {
		link.classList.toggle('Newlink');
	});
	console.log(menu_links);
};
menu.addEventListener('click', openMenu);
