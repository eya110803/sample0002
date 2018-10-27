$(function(){
	// 必須の３行のテンプレートをkey="result-table1"として作る。
    $.template(
            "result-table1",
        	"<table>\
    			<tbody id=\"result-table1\">\
    				<tr>\
    					<td rowspan=${rowspan1}>${r1c1}</td>\
    					<td>${r1c2}</td>\
    					<td>${r1c3}</td>\
    				</tr>\
    				<tr>\
    					<td>${r2c2}</td>\
    					<td>${r2c3}</td>\
    				</tr>\
    				<tr>\
    					<td rowspan=${rowspan2}>${r3c2}</td>\
    					<td>${r3c3}</td>\
    				</tr>\
    			</tbody>\
    		</table>"
    );

    // ４行目以降がある場合のテンプレートをkey="result-table2"として作る。
    $.template(
            "result-table2",
            "<tr>\
            <td>${c3}</td>\
            </tr>"
    );
});


