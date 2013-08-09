jQuery(document).ready(function(){
								
 //download script
	  jQuery('.s_download').click(function(){
			var semail = jQuery("#itzurkarthi_email").val();
			if(semail == '')
			{
				alert('Enter Email');
				return false;
			}
			var str = "sub_email="+semail
			jQuery.ajax({
				type: "POST",
				url: "download.php",
				data: str,
				cache: false,
				success: function(htmld){
						jQuery('#down_update').html(htmld);
				}
			});
	  });								
								
								
// check all checkboxes in table
	if(jQuery('.checkall').length > 0) {
		jQuery('.checkall').click(function(){
			var parentTable = jQuery(this).parents('table');										   
			var ch = parentTable.find('.checkbox');										 
			if(jQuery(this).is(':checked')) {
			
				//check all rows in table
				ch.each(function(){ 
					jQuery(this).attr('checked',true);
					jQuery(this).parent().addClass('checked');	//used for the custom checkbox style
					jQuery(this).parents('tr').addClass('selected'); // to highlight row as selected
				});

			} else {
				
				//uncheck all rows in table
				ch.each(function(){ 
					jQuery(this).attr('checked',false); 
					jQuery(this).parent().removeClass('checked');	//used for the custom checkbox style
					jQuery(this).parents('tr').removeClass('selected');
				});	
				
			}
		});
	}
	
		
	if(jQuery('.mailinbox').length > 0) {
		
		// star
		jQuery('.msgstar').click(function(){
			if(jQuery(this).hasClass('starred'))
				jQuery(this).removeClass('starred');
			else
				jQuery(this).addClass('starred');
		});
		
		//add class selected to table row when checked
		jQuery('.mailinbox tbody input:checkbox').click(function(){
			if(jQuery(this).is(':checked'))
				jQuery(this).parents('tr').addClass('selected');
			else
				jQuery(this).parents('tr').removeClass('selected');
		});
		
		// trash
  if(jQuery('.delete').length > 0) {
  jQuery('.delete').click(function(){
	  var c = false;
	  var cn = 0;
	  var o = new Array();
	  jQuery('.mailinbox input:checkbox').each(function(){
		  if(jQuery(this).is(':checked')) {
			  c = true;
			  o[cn] = jQuery(this);
			  cn++;
		  }
	  });
	  if(!c) {
		  alert('No selected message');	
	  } else {
		  var msg = (o.length > 1)? 'messages' : 'message';
		  if(confirm('Delete '+o.length+' '+msg+'?')) {
			  for(var a=0;a<cn;a++) {
				  jQuery(o[a]).parents('tr').remove();	
			  }
		  }
	  }
  });
  }
		
		
		// mark as read
jQuery('.mark_read').click(function(){
	var c = false;
	var cn = 0;
	var o = new Array();
	jQuery('.mailinbox input:checkbox').each(function(){
		if(jQuery(this).is(':checked')) {
			c = true;
			o[cn] = jQuery(this);
			cn++;
		}
	});
	if(!c) {
		alert('No selected message');	
	} else {
		var msg = (o.length > 1)? 'messages' : 'message';
		if(confirm('Mark '+o.length+' '+msg+' to read')) {
			for(var a=0;a<cn;a++) {
				jQuery(o[a]).parents('tr').removeClass('unread');
			}
		}
	}
});
			
	   // make messages to unread
jQuery('.mark_unread').click(function(){
	  var c = false;
	  var cn = 0;
	  var o = new Array();
	  jQuery('.mailinbox input:checkbox').each(function(){
		  if(jQuery(this).is(':checked')) {
			  c = true;
			  o[cn] = jQuery(this);
			  cn++;
		  }
	  });
	  if(!c) {
		  alert('No selected message');	
	  } else {
		  var msg = (o.length > 1)? 'messages' : 'message';
		  if(confirm('Mark '+o.length+' '+msg+' to unread')) {
			  for(var a=0;a<cn;a++) {
				  jQuery(o[a]).parents('tr').addClass('unread');
			  }
		  }
	  }
});
		
		
	}


function woopraReady(tracker) {
    tracker.setDomain('itzurkarthi.com');
    tracker.setIdleTimeout(300000);
    tracker.trackPageview({type:'pageview',url:window.location.pathname+window.location.search,title:document.title});
    return false;
}
(function() {
    var wsc = document.createElement('script');
    wsc.src = document.location.protocol+'//static.woopra.com/js/woopra.js';
    wsc.type = 'text/javascript';
    wsc.async = true;
    var ssc = document.getElementsByTagName('script')[0];
    ssc.parentNode.insertBefore(wsc, ssc);
})();
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27820211-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


	
});
