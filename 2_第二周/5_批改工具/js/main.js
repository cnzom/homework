/**/

var about={"jieguo_1":"结果完全符合预期（包括数据、输出格式、界面效果、成功避开了常见的陷阱）<br/>按照要求完成了全部功能<br/>对要求的功能有改进（易用、效率等有优化和提升）",
			"jieguo_2":"结果部分达到正确<br/>存在一些瑕疵<br/>不影响整体功能<br/>基本完成全部功能",
			"jieguo_3":"结果勉强可以接受<br/>需对代码或思路进行调整或修改<br/>完成60%以上功能<br/>擅自添加没有要求的功能",
			"jieguo_4":"结果完全不符合作业要求<br/>只实现少量功能（60%以下）",
			"wending_1":"非常稳定<br/>能够兼容个版本浏览器<br/>能够兼容各种分辨率",
			"wending_2":"页面20%以内不兼容<br/>但不影响整体表达",
			"wending_3":"页面大部分不兼容<br/>影响整体表达<br/>代码可以运行但存在错误",
			"wending_4":"页面基本不兼容<br/>存在大面积遮挡错位<br/>代码无法执行",
			"silu_1":"思路清晰<br/>能够举一反三<br/>在老师讲授的方法上有优化",
			"silu_2":"能按教授思路或方法编写",
			"silu_3":"使用了低效的思路或方法<br/>思路不清晰",
			"silu_4":"毫无章法<br/>思路与目标不一致",
			"jiegou_1":"逻辑清晰<br/>层次清楚<br/>结构优雅",
			"jiegou_2":"少量逻辑不明确<br/>结构较为清晰",
			"jiegou_3":"逻辑与问题的复杂度成反⽐比<br/>层次不清<br/>结构混乱",
			"jiegou_4":"逻辑混乱<br/>结构很差<br/>一个函数内实现所有功能<br/>接口调用混乱",
			"guifan_1":"命名合理<br/>大小写与缩进规范<br/>关键代码有注释<br/>自定义头文件或类库符合规范",
			"guifan_2":"大部分命名和格式要求合理<br/>存在少数不符合规范的情况",
			"guifan_3":"存在较多代码文件或代码段不规范的情形",
			"guifan_4":"变量命名随意<br/>大小写混乱<br/>没有注释或注释无意义<br/>自定义的头文件或类库命名随意",
};
var scoreBtn=[];
var xpos,ypos;
var finalscore=0;
window.onload=function(){
	scoreBtn=$(".tools div span")
	$.each(scoreBtn,function(i,k){
		if((i+1)%5!=0&&i<24){
			$(k).click(function(e){
				getPosition(e);
				dispChooseScoreBox(i);
				});
			}
	});
	$(".bgBox").click(function(e){closeChooseScoreBox();});
	$(".reset").click(function(e){resetAll();});
};

function resetAll(){		//重置所有参数和页面内元素
	location.reload();
	for(i=1;i<6;i++){
		$(scoreBtn[i*5-1]).html(0);
	}
	finalscore=0;
	$("#finalscore").html("0");
	
}
function getPosition(e){		//获取显示位置
	 clickevent = e || window.e;
	 xpos=clickevent.clientX;
	 ypos=clickevent.clientY;
}

function closeChooseScoreBox(){  //关闭分数框
	$(".bgBox").hide();
	$(".chooseScore").hide();
	}
function dispChooseScoreBox(i){	//显示分数框
	var aboutPre="";
	var aboutPreid;
	if(i<5){
		aboutPre="jieguo_";	
		aboutPreid=1;
	}
	else if(i>4&&i<10){
		aboutPre="wending_";
		aboutPreid=2;
	}
	else if(i>9&&i<15){
		aboutPre="silu_";
		aboutPreid=3;
	}
	else if(i>14&&i<20){
		aboutPre="jiegou_";		
		aboutPreid=4;
	}
	else if(i>19&&i<24){
		aboutPre="guifan_";
		aboutPreid=5;
	}
	xpos=xpos-(314/2);
	ypos=ypos+10;
	getchooseScoreInnerHTML(aboutPre,(i+1)%5+1,aboutPreid);
	
	$(".chooseScore").css("top",ypos+"px");
	$(".chooseScore").css("left",xpos+"px");
	$(".bgBox").show();
	$(".chooseScore").show();
}
function getchooseScoreInnerHTML(aboutPre,level,aboutPreid){		//给评分窗口填写分数和要求信息
	var htmlcode="";
	var startscore=20-(level-2)*3;
	for(i=1;i<4;i++){
		htmlcode+="<span onclick='changeScore(\""+aboutPre+"\","+aboutPreid+","+level+","+startscore+")'>"+startscore+"</span>";
		startscore--;
		}
	htmlcode=htmlcode+'<div id="about">'+about[aboutPre+((i+1)%5+1)]+'</div>';
	$(".chooseScore").html(htmlcode);
}
function changeScore(preName,aboutPreid,Level,score){
	finalscore=finalscore-$("#"+preName+"resultBox").html()+score;
	$("#"+preName+"resultBox").html(score+"");
	for(i=0;i<4;i++){
		$(scoreBtn[(aboutPreid-1)*5+i]).attr("className","");
	}
	$(scoreBtn[(aboutPreid-1)*5+Level-2]).attr("className","active");
	closeChooseScoreBox();
	$("#finalscoreBox").html(finalscore);
}