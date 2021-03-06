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


// Google spreadsheet info
var GoogleSheetJson = {};

GoogleSheetJson.getsheeturl = function() {
    
        var sheetid = '10nj-ELh4o3HHfG99JnxrsoONBn9LoHJc4I0doRnE354', // enter your spreadsheet url
            sheetno = 1,                                              // enter your sheet no.
            
            dataurl = 'https://spreadsheets.google.com/feeds/list/' + sheetid + '/' + sheetno + '/public/values?alt=json-in-script&callback=?';
    
        return dataurl;
};


// fetch google spreadsheet data to html
$(function mydata() {

    $.getJSON(GoogleSheetJson.getsheeturl(),

        function(data) {

            $.each(data.feed.entry, function(i, entry) {

                var item = '<a href="' + entry.gsx$url.$t + '" target="_blank"><div class="item ' + ' ' + entry.gsx$itemtag.$t + '">';

                item += '<div class="itemimg"><img src="img/loading.svg" data-src="' + entry.gsx$imgurl.$t + '" class="lazyload" onerror="imgError(this);"/></div>';

                item += '<div class="itemtitle">' + entry.gsx$itemtitle.$t + '</div>';

                item += '<div class="iteminfo">' + entry.gsx$iteminfo.$t + '</div>';

                item += '<div class="itemtype">' + entry.gsx$itemtype.$t + ' </div>';

                item += '<div class="itemtag">' + entry.gsx$itemtag.$t + '</div>';

                item += '<div class="itemurl">' + entry.gsx$url.$t + ' </div>';

                item += '<div class="hiddenkeywords">' + entry.gsx$hiddenkeywords.$t + ' </div>';

                item += '</div></a>';

                var $items = $(item);
                $grid.append($items).isotope('appended', $items);
                $grid.isotope('layout');

            });
        
            //hide loading icon after complete loading
            $(".loadicon").hide();

        });

});