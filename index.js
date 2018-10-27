//jQuery templatesを利用して元のHTMLにテンプレート用のタグをできるだけ入れないようにしてみた
//http://qwerty1qaz.blogspot.com/2011/10/jquery-templateshtml.html

// テーブルを追加する
function addTable() {
	// データ
	var data = [ {
		r1c1 : "データr1c1",
		r1c2 : 10,
		r1c3 : "データr1c3",
		r2c1 : "データr2c1",
		r2c2 : 20,
		r2c3 : "データr2c3",
		r3c1 : "データr3c1",
		r3c2 : 30,
		r3c3 : "データr3c3",
		rowspan1 : 3,
		rowspan2 : 1
	}, ];
	var data2 = [ {
		c2 : "データc2-1",
		c3 : 10,
	}, {
		c2 : "データc2-2",
		c3 : 20,
	}, {
		c2 : "データc2-3",
		c3 : 30,
	}, ];

	// rowspanを調整する
	data[0].rowspan1 = 3 + data2.length; 	// 必須の３行の１行目から結合する
	data[0].rowspan2 = 3 + data2.length - 2 // 必須の３行の３行目から結合する

	// idがresult-divの要素に、データdataを設定したテンプレートresult-table1を追加する
	$.tmpl("result-table1", data).appendTo("#result-div");

	// idがresult-table1の要素に、データdata2を設定したテンプレートresult-table2を追加する
	$.tmpl("result-table2", data2).appendTo("#result-table1");
}
