var carousel = document.getElementById('carousel');
var boxes = ['One', 'Two', 'Three', 'Four', 'Five'];

var current = 1;



for (let i = 0; i < boxes.length; i++) {
    var div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = boxes[i];
    div.id = `box${i + 1}`;
    carousel.appendChild(div);
}
update()

// Added this function
function mod(val, mod) {
    return ((val % mod) + mod) % mod;
}

function previous() {
    current--;
    update();
}
function next() {
    current++;
    update();
}
function update() {
    var boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('previous', 'next', 'current');

    }
    boxes[mod(current - 1, boxes.length)].classList.add('previous');
    boxes[mod(current, boxes.length)].classList.add('current');
    boxes[mod(current + 1, boxes.length)].classList.add('next');
}
