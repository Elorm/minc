$(document).ready(function(){	
	$("#search-button").click(fetchSearchResults);
	$("#search-fields .iCheck-helper").click(
		fetchSearchResults
	);
});

function fetchSearchResults(){
	var topics = $("#search-button-data-topics").val();
	var sectors = $("#search-button-data-sectors").val();
	$.ajax('/search', {
		type: "POST",
		data:{topics: topics, sectors: sectors},
		success: handleResponse
		});
}

function handleResponse(data){
	// var user = JSON.stringify(data);
	// var userObject = JSON.parse(data);
	var user = $.parseJSON(data);
	user.forEach(function(item){
		var solu =[
					'<li class="span3 found-result-mentor"><figure><div>',
					'<img src="scripts/img/brooke.jpg" alt="img04"></div>',
					'<figcaption><div><h3 class="name-mentor">',
					item.name,'</h3><span>',item.summary,
					'</span></div><a href="#">Take a look</a></figcaption></figure></li>',
					'<label id="user_id" style="display:none;" value="',
					item.id,'"</label>'
				  ].join("\n");
		$(".search-result-mentor ul").append(solu)

	});

	// console.log(user);

}	