$(document).ready(function(){

	$("#sectors").find('input').each(function(){
	var self = $(this),
	  label = self.next(),
	  label_text = label.text();

	label.remove();
	self.iCheck({
	  checkboxClass: 'icheckbox_line-purple',
	  radioClass: 'iradio_line-purple',
	  insert: '<div class="icheck_line-icon"></div>' + label_text
	});

	});

	$("#topics").find('input').each(function(){
	var self = $(this),
	  label = self.next(),
	  label_text = label.text();

	label.remove();
	self.iCheck({
	  checkboxClass: 'icheckbox_line-red',
	  radioClass: 'iradio_line-red',
	  insert: '<div class="icheck_line-icon"></div>' + label_text
	});
	});

	$("#search-results-tags").find('input').each(function(){
	var self = $(this),
	  label = self.next(),
	  label_text = label.text();

	label.remove();
	self.iCheck({
	  checkboxClass: 'icheckbox_line-green',
	  radioClass: 'iradio_line-green',
	  insert: '<div class="icheck_line-icon"></div>' + label_text
	});
	});
//////////////////////////////////////////////////////////

	$(".accordion-toggle").click(function(){
		var $icon = $(this).find("#icon");
		if ($icon.hasClass("icon-chevron-up")){
			$icon.removeClass("icon-chevron-up");	
			$icon.addClass("icon-chevron-down");
		}
		else if ($icon.hasClass("icon-chevron-down")){
			$icon.removeClass("icon-chevron-down");	
			$icon.addClass("icon-chevron-up");
		}		
	});
   /////////////////////////////////////////////////////////////////////////

	$('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });

     ///////////////////////////////////////////////////////////////
    //hiding and showing search options 
    $('#topic-nav a').click(function (e) {
    	if($("#topic-nav").hasClass("active")){

    		$("#sector-nav").removeClass("active");
    		$("#sectors").removeClass("active");
    		$("#sectors").hide();

    		$("#topic-nav").removeClass("active");
    		$("#topics").removeClass("active");
    		$("#topics").hide();
    	}
    	else if($("#topic-nav").not("active") && $("#sector-nav").not("active")){

    		$("#sector-nav").removeClass("active");
    		$("#sectors").removeClass("active");
    		$("#sectors").hide();

    		$("#topic-nav").addClass("active");
    		$("#topics").addClass("active");
    		$("#topics").show();
    	}
    	else if ($("#topic-nav").not("active")){

    		$("#sector-nav").removeClass("active");
    		$("#sectors").removeClass("active");
    		$("#sectors").hide();

    		$("#topic-nav").addClass("active");
    		$("#topics").addClass("active");
    		$("#topics").show();
    	}
	});

    $('#sector-nav a').click(function (e) {
		if($("#sector-nav").hasClass("active")){

			$("#sector-nav").removeClass("active");
    		$("#sectors").removeClass("active");
    		$("#sectors").hide();

    		$("#topic-nav").removeClass("active");
    		$("#topics").removeClass("active");
    		$("#topics").hide();
		}
		else if($("#topic-nav").not("active") && $("#sector-nav").not("active")){

			$("#topic-nav").removeClass("active");
    		$("#topics").removeClass("active");
    		$("#topics").hide();

			$("#sector-nav").addClass("active")
			$("#sectors").addClass("active");
			$("#sectors").show();
		}
		else if ($("#sector-nav").not("active")){
			
			$("#topic-nav").removeClass("active");
    		$("#topics").removeClass("active");
    		$("#topics").hide();

			$("#sector-nav").addClass("active")
			$("#sectors").addClass("active");
			$("#sectors").show();
		}
	});



	var sectors= [];
   	$("#sectors .iCheck-helper").click( function(){

   		if($(this).hasClass("sector")){
   			var firstParent = $(this).parent();
  			var secondParent = firstParent.parent();
  			sectors.forEach(function(item) {
		  		if(item.value == secondParent.text()){
					var item_index = sectors.indexOf(item); // Find the index
					if(item_index!=-1) sectors.splice(item_index, 1);
		  			console.log(sectors.indexOf(item));
		  			console.log(sectors);
		  		}
			});
  			$(this).removeClass("sector");
   	        $(this).removeClass("search-results-tags");
   	        $("#sectors ul").append(secondParent[0]);
   		}
   		else {

   		var sector= {};

   		var list_div = $(this).parent();
   		var list_item = list_div.parent();
   		var search_results_tags = $("#search-results-tags ul span");
   		$(this).addClass("sector");
   	    $(this).addClass("search-results-tags");
   		search_results_tags.append(list_item);

   		sector["value"] = list_item.text();
   		sectors.push(sector);
   		console.log(sectors);
   		}


   	});

   	var criterias=[ "business-development",
   					"customer-development",
   					"design",
   					"human-resources",
   					"legal",
   					"technology",
   					"operations",
   					"strategy-marketing" 
   					];
   	var special_criterias=[ "business development",
					"customer development",
					"human resources",
					"strategy/marketing" 
					];


	var topics = [];
  	$("#topics .iCheck-helper").click( function(){

	   	if($(this).hasClass("topic")){
	   		for (var i = criterias.length - 1; i >= 0; i--) {
	   			if($(this).hasClass(criterias[i])){
	   				console.log(criterias[i]);
	   				var criteria =criterias[i];
	   				var firstParent = $(this).parent();
		  			var secondParent = firstParent.parent();
		  			topics.forEach(function(item) {
				  		if(item.value == secondParent.text()){
							var item_index = topics.indexOf(item); // Find the index
							if(item_index!=-1) topics.splice(item_index, 1);
				  			console.log(topics.indexOf(item));
				  			console.log(topics);
				  		}
					});
		  			$(this).removeClass("topic");
		  			$(this).removeClass(criteria);
		   	        $(this).removeClass("search-results-tags");
		   	        var tag = "#"+criteria+" ul span";
	   				// console.log(tag);	
		   	        $(tag).append(secondParent[0]);
   	        	 //    console.log(secondParent[0]);
	   			}
	   		};



   		}
   		else{
	  	    var topic                  = {};
	  	    var search_results_tags    = $("#search-results-tags ul span");
			var list_firstParent       = $(this).parent();
			var list_secondParent      = list_firstParent.parent();///what i'm actually looking for
			var list_thirdParent       = list_secondParent.parent();
			var list_fourthParent      = list_thirdParent.parent();
			var list_fifthParent       = list_fourthParent.parent();
			var criteria               = list_fifthParent[0].firstElementChild.innerText.toLowerCase();
			var value                  = list_secondParent.text();
			$(this).addClass("topic");
	   	    $(this).addClass("search-results-tags");
			search_results_tags.append(list_secondParent);
			if ((criteria == special_criterias[0])|| (criteria == special_criterias[1]) || (criteria == special_criterias[2])){
				newCriteria = criteria.split(" ");
				criteria = newCriteria[0]+"-"+newCriteria[1];
	   	    	$(this).addClass(criteria);
				topic["criteria"] = criteria;
			}
			else if (criteria == special_criterias[3]){
				newCriteria = criteria.split("/");
				criteria = newCriteria[0]+"-"+newCriteria[1];			
	   	   		$(this).addClass(criteria);
				topic["criteria"] = criteria;
			}
			else {
				$(this).addClass(criteria);
				topic["criteria"] = criteria;

			}
			
			topic["value"]    = value;
			topics.push(topic);
			console.log(topics);
   		}

   	});





});
