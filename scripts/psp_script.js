
function limitText(inp)
{
	/*limitField = document.getElementsByName("password");*/
	limitNum = 12;
	if(inp.value.length > limitNum)
	{
		inp.value = inp.value.substring(0,limitNum);
		alert("Допустимая длина пароля: " + limitNum + " символов!");
	}
}

/*
function limitText()
{
	limitField = document.getElementsByName("password");
	limitNum = 12;
	console.log("run1");
	if(limitField[0].value.length > limitNum)
	{
		limitField[0].value = limitField[0].value.substring(0,limitNum);
		console.log("run2");
		alert("Допустимая длина пароля: " + limitNum + " символов!");
	}
	
	if(limitField[1].value.length > limitNum)
	{
		limitField[1].value = limitField[1].value.substring(0,limitNum);
		console.log("run2");
		alert("Допустимая длина пароля: " + limitNum + " символов!");
	}
}
*/