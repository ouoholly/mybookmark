/***--------- ↓↓↓ DO NOT REMOVE or EDIT THIS NOTE ↓↓↓ --------------------
*
* Feel free to fork this as template and make edits to fit your needs 
* as long as (1) credit is given, (2) link back to here: https://github.com/ouoholly/mybookmark
*
* Star the repo if you like it (σﾟ∀ﾟ)σ..:*☆
* Welcome to contact me for suggestions or recommendations.(●´∀`●)ノ*
*
* -------------------------------------------------------------------
*
* Author  :  ouoholly
* Version :  v1.0 --- 2020.05.01
*
-------------- ↑↑↑ DO NOT REMOVE or EDIT THIS NOTE ↑↑↑ ------------------***/

// cbox
$(document).ready(function() {
    $('#comment').click(function() {
        $('#cbox').toggle();

        // don't load cbox until comment btn is being clicked
        $("#cbox").attr("src", "https://www6.cbox.ws/box/?boxid=838333&boxtag=TNPqkP");
    });
});


// hide and show tags under each category
$(".tagcat").click(function() {
    $(this).next(".tagdetails").slideToggle();
});


// hide and show all tags through one click
$(".showalltags").click(function() {
    $(".tagdetails").slideDown();
});

$(".hidealltags").click(function() {
    $(".tagdetails").slideUp();
});


// mobile: menubtn
$('.menubtn').click(function() {
    $('.tagarea').slideToggle();
});

$('.menubtn').click(function() {
    $(this).toggleClass("change");
});


// mobile: close tagarea once tag is clicked
$(window).resize(function() {
    if ($(window).width() < 681) {
        $('.tag').click(function() {
            $('.tagarea').hide();
            $('*').removeClass("change");
        });

        $('.shuffle-button').click(function() {
            $('.tagarea').hide();
            $('*').removeClass("change");
        });

        $('.tagarea').hide();

    } else {
        $('.tagarea').show();

        $('.tag').click(function() {
            $('.tagarea').show();
        });

        $('.shuffle-button').click(function() {
            $('.tagarea').show();
        });
    }
});

// If no image or img src error, automatically show "no-thumbnail.png"
function imgError(image) {
    image.onerror = "";
    image.src = "img/no-thumbnail.png";
    return true;
}