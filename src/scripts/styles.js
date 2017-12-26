$(document).ready(function()
{	
	console.log("hello")

	$("#theme1").click(function()
	{
		console.log("helloooo")
	$(".al-main").css({
		'background-color':"rgb(255, 212, 0)"
	})	
	})

	
	$(".card").hover(function(){
		console.log("in")
		$(this).addClass("card-hover");

	},function(){
		console.log("out")

		$(this).removeClass("card-hover");

	})



// 	setTimeout(function()
// 		{
		
// 			$('#form-popin').avgrund({
//     template: '<p>This is popin content!</p>'
// });

// 		},3000)

})