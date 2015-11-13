//计算中要用到的变量
var formulaToShow = ""; //要显示的计算式
var formulaToCalcu = ""; //要计算的计算式
var result = " "; //计算结果
var saved = "0"; //存储的数


//生成计算式的函数
function TypeFormula(com) {
    //如果是已经求过值，则清屏并重新开始计算
    if ((result != " " || result == "0") && com != "save") {
        formulaToShow = "";
        result = " ";
    }

    //得到按钮信息
    switch (com) {
        case "clear": //清空
            formulaToShow = "";
            result = " ";
            break;
        case "back": //退格（这个写的有些冗余）
            {
                var f = formulaToShow;
                if (f.substring(f.length - 5, f.length) == "asin(" || f.substring(f.length - 5, f.length) == "acos(" || f.substring(f.length - 5, f.length) == "atan(" || f.substring(f.length - 5, f.length) == "sqrt(")
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 5);
                else if (f.substring(f.length - 4, f.length) == "sin(" || f.substring(f.length - 4, f.length) == "cos(" || f.substring(f.length - 4, f.length) == "tan(" || f.substring(f.length - 4, f.length) == "exp(")
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 4);
                else if (f.substring(f.length - 3, f.length) == "ln(")
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 3);
                else
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 1);
            }
            break;

        case "sign":
            {
                if (formulaToShow == "") formulaToShow = "-";
                else if (formulaToShow[0] == "-") formulaToShow = formulaToShow.substring(1, formulaToShow.length);
                else formulaToShow = "-" + formulaToShow;
            }
            break;
        case "save":
            saved = formulaToShow;
            break;
        case "getsave":
            formulaToShow = formulaToShow + saved;
            break;
        case "result": //计算结果
            {
                if (formulaToShow == "") result = " ";
                else {
                    formulaToCalcu = formulaToShow.toString();
                    formulaToCalcu = formulaToCalcu.replace(/sin/g, "Math.sin");
                    formulaToCalcu = formulaToCalcu.replace(/cos/g, "Math.cos");
                    formulaToCalcu = formulaToCalcu.replace(/tan/g, "Math.tan");
                    formulaToCalcu = formulaToCalcu.replace(/asin/g, "Math.asin");
                    formulaToCalcu = formulaToCalcu.replace(/aMath.sin/g, "Math.asin");
                    formulaToCalcu = formulaToCalcu.replace(/acos/g, "Math.acos");
                    formulaToCalcu = formulaToCalcu.replace(/aMath.cos/g, "Math.acos");
                    formulaToCalcu = formulaToCalcu.replace(/atan/g, "Math.atan");
                    formulaToCalcu = formulaToCalcu.replace(/aMath.tan/g, "Math.atan");
                    formulaToCalcu = formulaToCalcu.replace(/exp/g, "Math.exp");
                    formulaToCalcu = formulaToCalcu.replace(/ln/g, "Math.log");
                    formulaToCalcu = formulaToCalcu.replace(/sqrt/g, "Math.sqrt");

                    try {
                        result = eval(formulaToCalcu);
                    } catch (exception) {
                        window.alert(exception);
                    }
                }
            }
            break;
        default:
            formulaToShow += com;
            break;
    }

    txtShow.innerHTML = formulaToShow + "<br/>" + result + "<br/>";
}