/**
 * Created by veronika on 04.10.16.
 */
document.addEventListener("DOMContentLoaded", loadItems);

function loadItems() {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'package.json'
    xhr.open('GET', 'package.json', false);
    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
        // responseText -- текст ответа
        var text = JSON.parse(xhr.responseText);
        showItems(text);
    }
}

function showItems(responseText) {

    var sources   = document.querySelectorAll(".entry-template");

    var templates = [];
    var html = [];

    var arrTags = document.querySelectorAll(".clothes-gallery");

    for(var i=0; i<sources.length; i++) {
        templates[i] = Handlebars.compile(sources[i].innerHTML);
        html[i]  = templates[i](responseText);
        arrTags[i].innerHTML += html[i];
    }

}

Handlebars.registerHelper('each', function(items, options) {
    var out='';

    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i]);
    }

    return out;
});

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
});