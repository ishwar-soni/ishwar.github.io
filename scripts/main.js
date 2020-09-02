let myImg = document.querySelector('img');

myImg.onclick = () => {
    let imgSrc = myImg.getAttribute('src');
    if (imgSrc !== 'images/nature1.jpg') {
        myImg.setAttribute('src', 'images/nature1.jpg');
    } else {
        myImg.setAttribute('src', 'images/nature2.jpg');
    }
};

document.querySelector('h1').onclick = () => {
    let name = prompt('Please enter your name');
    localStorage.setItem('mozilla_test_name', name);
    document.querySelector('h1').textContent = 'Welcome ' + name;
};