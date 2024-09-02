let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

function loadShow() {
    let stt = 0;
    // Обновляем активный элемент
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Обрабатываем элементы после активного
    for(let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    // Обрабатываем элементы перед активным
    for(let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

next.onclick = function() {
    active = (active + 1) % items.length;
    loadShow();
}

prev.onclick = function() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}


document.addEventListener('DOMContentLoaded', () => {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    function loadShow() {
        let stt = 0;

        // Обновляем активный элемент
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Обрабатываем элементы после активного
        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0;
        // Обрабатываем элементы перед активным
        for (let i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    function showNext() {
        active = (active + 1) % items.length;
        loadShow();
    }

    function showPrev() {
        active = (active - 1 + items.length) % items.length;
        loadShow();
    }

    // Обработчики нажатий на кнопки
    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);

    // Обработка касаний для свайпов
    slider.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    slider.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            showNext();
        } else if (touchEndX > touchStartX) {
            // Swipe right
            showPrev();
        }
    }

    // Инициализация отображения первого слайда
    loadShow();
});
