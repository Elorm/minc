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
   

	 $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });



});
