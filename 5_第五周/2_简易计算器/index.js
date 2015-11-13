//var c = "计算出错，请重新计算"; //用来储存计算结果

function calculate(symbol) {
	var a = document.getElementById('input_a').value; //获取第一个数的值
	var b = document.getElementById('input_b').value; //获取第一个数的值


	if ((isNaN(parseInt(a)) == true) || (isNaN(parseInt(b)) == true)) { //判断输入的值是否为数字
		alert("请输入正确的数字~");
	} else {
		if (symbol == 1) {
			alert(parseFloat(a) + parseFloat(b));
		} else if (symbol == 2) {
			alert(parseFloat(a) - parseFloat(b));
		} else if (symbol == 3) {
			alert(parseFloat(a) * parseFloat(b));
		} else if (symbol == 4) {
			alert(parseFloat(a) / parseFloat(b));
		} else {
			alert("计算出错，请重新计算");
		};

	}



}