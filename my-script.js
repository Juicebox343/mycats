const 	miloFrame = document.querySelector('#milo-photo'),
		chloeFrame = document.querySelector('#chloe-photo'),
		duoFrame = document.querySelector('#duo-photo'),
		moreButton = document.querySelector('.show-me');

moreButton.addEventListener('click', morePhotos);

function morePhotos(){
	miloFrame.setAttribute('src', "images/photos/milo" + (Math.floor(Math.random() * 10) + 1 )+ ".jpg");
	chloeFrame.setAttribute('src', "images/photos/chloe" + (Math.floor(Math.random() * 10) + 1 )+ ".jpg");
	duoFrame.setAttribute('src', "images/photos/chloe and milo" + (Math.floor(Math.random() * 6) + 1 )+ ".jpg");
	document.documentElement.scrollTop = 0;
}
