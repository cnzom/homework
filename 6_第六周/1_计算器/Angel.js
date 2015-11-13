 /*将按钮转到P标签成为字符串*/

   function myFun(zz) {
   	document.getElementById('equations').innerHTML = document.getElementById('equations').innerHTML + zz;
   }
 /*将字符串转换成式子，并计算结果*/
   function myFFF() {
   	var i = document.getElementById('equations').innerHTML;
   	var z = eval(i);
   	document.getElementById('answerid').innerHTML = z;
   }

   /*清屏*/
   function Eli () {
   	document.getElementById('equations').innerHTML ='';
   	document.getElementById('answerid').innerHTML = 0;
   }

   /*退格*/

   function del () {
   	var s =document.getElementById('equations').innerHTML;
   	s=s.substring(0,s.length-1)
   	document.getElementById('equations').innerHTML = s;

   }

   /*cos sin  tan*/

   function cos () {
   	var c = document.getElementById('equations').innerHTML;
   	var cc=Math.cos(c);
   	document.getElementById('answerid').innerHTML = cc;
   }

   function sin () {
   	var c = document.getElementById('equations').innerHTML;
   	var cc=Math.sin(c);
   	document.getElementById('answerid').innerHTML = cc;
   }

   function tan () {
   	var c = document.getElementById('equations').innerHTML;
   	var cc=Math.tan(c);
   	document.getElementById('answerid').innerHTML = cc;
   }