function highlight (ele, color) {
    $(ele).css('border','4px solid ' + color);
}

$('.button p').mouseleave(function(){
    console.log('マウスはなれた');
    highlight( '.main-container p', '#ebe9e9');
}
)

$('.local').mouseover(function(){
    console.log('マウスオーバー');
    highlight( '.1, .2, .3, .4, .5', '#af26a1');
}
)

$('.rapid').mouseover(function(){
    console.log('マウスオーバー');
    highlight( '.2, .3, .4, .5', '#2a1ffd');
}
)

$('.semiExpress').mouseover(function(){
    console.log('マウスオーバー');
    highlight( '.3, .4, .5', 'orange');
}
)

$('.express').mouseover(function(){
    console.log('マウスオーバー');
    highlight( '.4, .5', 'rgb(0, 186, 0)');
}
)

$('.specialExpress').mouseover(function(){
    console.log('マウスオーバー');
    highlight( '.5', '#ff0000');
}
)
