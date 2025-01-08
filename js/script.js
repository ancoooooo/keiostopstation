function highlight (ele, color) {
    $(ele).css('border','4px solid ' + color);
}

$('.button p').mouseleave(function(){
    highlight( '.main-container p', '#ebe9e9');
}
)

$('.local').mouseover(function(){
    highlight( '.1, .2, .3, .4, .5', '#af26a1');
}
)

$('.rapid').mouseover(function(){
    highlight( '.2, .3, .4, .5', '#2a1ffd');
}
)

$('.semiExpress').mouseover(function(){
    highlight( '.3, .4, .5', 'orange');
}
)

$('.express').mouseover(function(){
    highlight( '.4, .5', 'rgb(0, 186, 0)');
}
)

$('.specialExpress').mouseover(function(){
    highlight( '.5', '#ff0000');
}
)
