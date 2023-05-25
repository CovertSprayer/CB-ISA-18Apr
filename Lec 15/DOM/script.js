
// ----------------------------- selectors
// const heading = document.getElementsByTagName('h1');
// console.log(heading);

const favMovies = document.getElementsByClassName('fav-movies')
// console.log(favMovies);

// const para = document.getElementById('special');

const heading = document.querySelector('h1');
const fav_Movies = document.querySelector('.fav-movies'); // will select only first element
const specialPara = document.querySelector('#special')
const allFavMovies = document.querySelectorAll('.fav-movies')

heading.style.color = 'red';
heading.style.backgroundColor = 'teal';

//------------------------ innerText vs innerHTML
heading.innerText = 'Changed the content'
heading.innerText = '<em> this is heading </em>'
heading.innerHTML = '<em> this is heading </em>'

// ----------------------- get,set,remove attribute
// specialPara.getAttribute('class');
// specialPara.setAttribute('class', 'one');
// specialPara.setAttribute('class', 'one two');

// ------------------------ classList.add(), .remove(), .toggle(), .contains()
// fav_Movies.classList.add('three');
// fav_Movies.classList.remove('three');
// fav_Movies.classList.contains('three');
// fav_Movies.classList.toggle('one');







