function myFunction() {
	var result = document.getElementById('res').value;
	var grade = "";
	if ((result >= 90)&&(result <= 100)) {
		grade = "一等生";
	} else if ((result >= 80)&&(result < 90)) {
		grade = "二等生";
	} else if ((result >= 70)&&(result < 80)) {
		grade = "三等生";
	} else if ((result >= 60)&&(result < 70)) {
		grade = "四等生";
	} else if ((result >= 50)&&(result < 60)) {
		grade = "五等生";
	} else if ((result >= 40)&&(result < 50)) {
		grade = "六等生";
	} else if ((result >= 30)&&(result < 40)) {
		grade = "七等生";
	} else if ((result >= 20)&&(result < 30)) {
		grade = "八等生";
	} else if ((result >= 10)&&(result < 20)) {
		grade = "九等生";
	} else if ((result >= 0)&&(result < 10)) {
		grade = "劝退";
	} else {
		grade = "抱歉，请输入0~100的正确数字";
	};

alert(grade);

}