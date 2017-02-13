var globe = document.querySelector('.globe');
//console.log(globe);
globe.addEventListener('click', openSocial);

function openSocial() {
	var icons = document.querySelector('.icons'),
		computedStyle = window.getComputedStyle(icons);
	if (computedStyle.display == 'none'){
		globe.style.cssText = 'color: red;';
		icons.style.cssText = 'display: block;';
	}else if(computedStyle.display == 'block'){
		globe.style.cssText = 'color: #888;';
		icons.style.cssText = 'display: none;';
	}
}