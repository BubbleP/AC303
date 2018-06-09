$(document).ready(function(){
	$("#confirm").on("click", function(){
		chrome.tabs.create({"url": "https://www.readriordan.com/"});
		
		
	});

	$("#bubble").on("click", function(){
			chrome.tabs.create({"url": "https://www.pottermore.com/features"});
		})

});