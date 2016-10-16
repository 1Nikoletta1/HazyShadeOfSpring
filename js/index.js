
/*-----------------------
 ------search-area------
 ----------------------*/

var searchArea = document.getElementById("search-area");

searchArea.addEventListener('click',  function(event) {

    var target = event.target;

    while (target != this) {
        if (target.nodeName == 'FORM') {

            changeButtons(target);

            return false;
        }
        target = target.parentNode;
    }


});


var hiddenSearch = document.createElement('form');

hiddenSearch.setAttribute('isHidden', 'false'); //display: block;

hiddenSearch.innerHTML = '\
            <input id="search-input" type="text" name="q" placeholder="Search something..."> \
            <button type="submit" id="hover-button-search">\
                <img src="img/search-white.png">\
            </button>\
        ';


function changeButtons(target) {

    if ( target.getAttribute('isHidden') === 'false' ) { //display: block;

        searchArea.appendChild(hiddenSearch);
        target.setAttribute('isHidden', 'true'); //display: none;

    } else if ( target.getAttribute('isHidden') === 'true' ) { //display: none;

        searchArea.removeChild(hiddenSearch);
        target.setAttribute('isHidden', 'false'); //display: block;

    }
}


/*-----------------------
------carousel-area------
 ----------------------*/

var position = 0; // текущий сдвиг влево
var carousel = document.getElementById('carousel');

carousel.onclick = function(event) {

    var target = event.target;

    while (target != this) {
        if (target.nodeName == 'BUTTON') {
            scrollCarousel(target);
            return false;
        }
        target = target.parentNode;
    }
};

function scrollCarousel(target) {

    var width = 130; // ширина изображения
    var count = 3; // количество изображений


    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    if ( target.classList.contains('prev') ) {

        position = Math.min(position + width * count, 0);
        list.style.marginLeft = position + 'px';


    } else if ( target.classList.contains('next') ) {

        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';

    }
}


/*--------------------------
 ---product-details-area----
 ---------------------------*/

var largeImg = document.getElementById('img-to-change');
var thumbs = document.getElementById('product-mini-gallery');

thumbs.addEventListener('click',  function(event) {

    var target = event.target;

    while (target != this) {
        if (target.nodeName == 'IMG') {
            showThumbnail(target.src);
            return false;
        }

        target = target.parentNode;
    }

});

function showThumbnail(href) {
    largeImg.src = href;
}




 