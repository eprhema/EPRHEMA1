var button= document.querySelector("button");

// button.addEventListener("click",function(){
// 	if(ispurple)
// 	{
// 	  document.body.style.background="white";
// 	}
// 	else
// 	{
// 	  document.body.style.background="purple";
// 	}
// 	ispurple=!ispurple;
// });

	
	button.addEventListener("click",function()
	{
	document.body.classList.toggle("purple");
});
