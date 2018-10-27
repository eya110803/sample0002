//下記のサイトを参考にさせていただきました。
//jQuery templatesを利用して元のHTMLにテンプレート用のタグをできるだけ入れないようにしてみた
//http://qwerty1qaz.blogspot.com/2011/10/jquery-templateshtml.html

// テーブルを追加する
function addTable() {
	// データ
	var data = [ {
		r1c1 : "データr1c1",
		r1c2 : "データr1c2",
		r1c3 : "データr1c3",
		r1c4 : "データr1c4",
		r2c1 : "データr2c1",
		r2c2 : "データr2c2",
		r2c3 : "データr2c3",
		r2c4 : "データr2c4",
		r3c1 : "データr3c1",
		r3c2 : "データr3c2",
		r3c3 : "データr3c3",
		r3c4 : "データr3c4",
		rowspan1 : 3,
		rowspan2 : 1
	}, ];
	var data2 = [ {
		c2 : "データc2-1　長い文字列でも大丈夫？",
		c4 : "データc4-1",
	}, {
		c2 : "データc2-2　長い文字列でも大丈夫？",
		c4 : "データc4-2"
	}, {
		c2 : "データc2-3　長い文字列でも大丈夫？",
		c4 : "データc4-3"
	}, {
		c2 : "データc2-4　長い文字列でも大丈夫？",
		c4 : "データc4-4",
	}, ];

	// rowspanを調整する
	data[0].rowspan1 = 3 + data2.length; 	// 必須の３行の１行目から結合する
	data[0].rowspan2 = 3 + data2.length - 2 // 必須の３行の３行目から結合する

	// keyがresult-table1のテンプレートにdataを設定したテンプレートを作成する
	var template = $.tmpl("result-table1", data);

	// keyがresult-table2のテンプレートにdata2を設定したテンプレートを作成する。
	// さらに、テンプレートtemplateに追加する。
	$.tmpl("result-table2", data2).appendTo(template);

	// 作成したテンプレートをidがresult-divの
	template.appendTo("#result-div");
}
