// // Short Method
// const [current , imgs] = [document.querySelector('#heroImg'),
// 						  document.querySelectorAll('.smallImg img')
// 						]

// imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

const current = document.querySelector('#heroImg');
const imgs = document.querySelectorAll('.smallImg img');

const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(function(img){
	img.addEventListener('click', function(e){

		imgs.forEach(img => (img.style.opacity= 1));

		current.src = e.target.src;
		e.target.style.opacity = opacity;

		current.classList.add('fade-in');

		setTimeout(function(){
			current.classList.remove('fade-in') 
		},500);
	})
})