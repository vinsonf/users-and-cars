const p = document.querySelector('.myPTag'); // gather html elements

p.innerText = '<h1>hello</h1>'; // write text inside of html elements
p.innerHTML = '<h1>hello</h1>'; // write html inside of html elements


const li = document.createElement('li'); // create
document.body.appendChild(li); // place in document

li.innerText = 'Hello';

li.addEventListener('click', function() {
    myTest( 9, 'you clicked')
}); // listen for events


function myAlert() { // actions
    p.classList.add('active');

    p.style.position = 'absolute';

    p.style.left = '200px';
}



console.log('html', myTest)
