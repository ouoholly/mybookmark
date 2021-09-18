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
* Version :  v1.1 --- 2021.09.18
*
-------------- ↑↑↑ DO NOT REMOVE or EDIT THIS NOTE ↑↑↑ ------------------***/


    <script>
        // Reference: https://www.letswrite.tw/google-excel-db/

        const uri = 'https://sheets.googleapis.com/v4/spreadsheets/10nj-ELh4o3HHfG99JnxrsoONBn9LoHJc4I0doRnE354/values/itemlist?alt=json&key=AIzaSyAdTDEIslD8C8f2JzxR0gslWRP4U10lZ9Q';

        fetch(uri)
            .then(res => res.json())
            .then(res => {
                const data = res.values;
                console.log(data);

                data.shift();

                Array.prototype.forEach.call(data, d => {
                    let Card = `
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

                    document.querySelector('.grid').insertAdjacentHTML('beforeend', Card);
                })
            })

    </script>


