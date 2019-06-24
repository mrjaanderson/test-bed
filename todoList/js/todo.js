function applyStyle(){
    if($('li > div.icon').length === 0){
        $('ul').children().prepend('<div class="icon"><i class="fa fa-trash-alt"></i><div>');
    } else if(!$('li:last > div').hasClass("icon")) {
        $('ul').children(":last-child").prepend('<div class="icon"><i class="fa fa-trash-alt"></i><div>');
    }
    $('.entry:odd').addClass('gray-bg');
}

applyStyle();

$("#plus").on("click", function(){
    $("input").parent().slideToggle();
    if($("#plus").html() == '<i class="fas fa-plus" aria-hidden="true"></i>'){
        $("#plus").html('<i class="fas fa-minus"></i>');
    } else {
        $("#plus").html('<i class="fas fa-plus"></i>')
    }
});

$('input').on("keypress", function(e){
    if(e.which === 13){
    $('ul').append('<li class="entry"><div>'+$(this).val()+'</div></li>');
    applyStyle();
    $('input').val("");
    }
});

$('ul').delegate("li","mouseenter", function(){
    $(this).children(".icon").animate({width:"toggle",opacity:"1"}, 300, "linear");
});

$('ul').on("mouseleave", "li", function(){
    $(this).children(".icon").animate({width:"toggle",opacity:"0"}, 300, "linear");
});

$('ul').on("click", "li > div:last-of-type", function(){
    $(this).toggleClass("done");
});

$('ul').on("click", ".icon", function(){
    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    });
});



