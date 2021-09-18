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
*            v2.0 --- 2021.09.18 （GData was shut down and was replaced by Google Sheets API v4)
*
-------------- ↑↑↑ DO NOT REMOVE or EDIT THIS NOTE ↑↑↑ ------------------***/


const sheetid = '10nj-ELh4o3HHfG99JnxrsoONBn9LoHJc4I0doRnE354', // enter your spreadsheet url
    sheetname = 'itemlist', // enter your sheet name
    apikey = 'AIzaSyAdTDEIslD8C8f2JzxR0gslWRP4U10lZ9Q', // enter your Google API key
    dataurl = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetid + '/values/' + sheetname + '?alt=json&key=' + apikey;

fetch(dataurl)
    .then(result => result.json())
    .then(result => {
        const data = result.values;
        console.log(data);

        data.shift();

        Array.prototype.forEach.call(data, d => {
            let item = `
                <a href="${d[3]}" target="_blank">
                     <div class="item ${d[5]}">
                         <div class="itemimg"><img src="img/loading.svg" data-src="${d[0]}" class="lazyload" onerror="imgError(this);"/></div>
                         <div class="itemtitle">${d[2]}</div>
                         <div class="iteminfo">${d[4]}</div>
                         <div class="itemtype">${d[1]}</div>
                         <div class="itemtag">${d[5]}</div>
                         <div class="itemurl">${d[3]}</div>
                        <div class="hiddenkeywords">${d[6]}</div>
                     </div>
                 </a>`;

            let $items = $(item);
            $grid.append($items).isotope('appended', $items);
            $grid.isotope('layout');

        })

        $(".loadicon").hide();

    })
