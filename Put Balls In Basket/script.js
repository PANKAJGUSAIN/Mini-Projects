var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

var box = $("#box");

function add_color(){
    box.append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
}

$("button").on('click',add_color);
