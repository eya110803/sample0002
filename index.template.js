$(function(){
	// 必須の３行のテンプレートをkey="result-table1"として作る。
    $.template(
            "result-table1",
        	'<table>\
    			<tbody id="result-table1">\
    				<tr>\
    					<td class="c1" rowspan=${rowspan1}>${r1c1}</td>\
    					<td class="c2" >${r1c2}</td>\
    					<td class="c3" >${r1c3}</td>\
            			<td class="c4" >${r1c4}</td>\
    				</tr>\
    				<tr>\
    					<td>${r2c2}</td>\
    					<td>${r2c3}</td>\
            			<td>${r2c4}</td>\
    				</tr>\
    				<tr>\
    					<td>${r3c2}</td>\
    					<td rowspan=${rowspan2}>${r3c3}</td>\
            			<td>${r3c4}</td>\
    				</tr>\
    			</tbody>\
    		</table>'
    );

    // ４行目以降がある場合のテンプレートをkey="result-table2"として作る。
    $.template(
            "result-table2",
            "<tr>\
            <td>${c2}</td>\
            <td>${c4}</td>\
            </tr>"
    );
});


