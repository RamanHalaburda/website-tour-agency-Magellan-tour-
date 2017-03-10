function datetime() 
{
    var s;
    var now = new Date();
    var y = now.getFullYear();
    var d = now.getDate();
    var mon = now.getMonth();
    switch (mon)
    {
		case 0: s="января"; break;
		case 1: s="февраля"; break;
		case 2: s="марта"; break;
		case 3: s="апреля"; break;
		case 4: s="мае"; break;
		case 5: s="июня"; break;
		case 6: s="июля"; break;
		case 7: s="августа"; break;
		case 8: s="сентября"; break;
		case 9: s="октября"; break;
		case 10: s="ноября"; break;
		case 11: s="декабря"; break;
    }
    var date_result = d + " " + s + " " + y;
    document.getElementById("inputdate").value = date_result;

    var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	var time_result = "" + hours + ((minutes < 10) ? ":0" : ":") + minutes + ((seconds < 10) ? ":0" : ":") + seconds;
	document.getElementById("inputtime").value = time_result;
	setTimeout("datetime()",1000);
}

function foo_aut() 
{ 
    alert("Вы вошли!"); 
    window.open("main.html"); 
}

function foo_reg()
{
	alert('Вы зарегестрированы!');
	window.open("main.html");
}

function calculate()
{	
	var cost_a = document.getElementById("cost_avia").value;
	var cost_h = document.getElementById("cost_hotel").value;
	var cost_v = document.getElementById("cost_viza").value;	
	var count_p = document.getElementById("count_person").value;
	
	var sum = (parseInt(cost_a) + parseInt(cost_h) + parseInt(cost_v)) * parseInt(count_p);
	document.getElementById("result_sum").value = sum.toString();
}