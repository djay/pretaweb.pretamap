
            
        

jQuery(function($){


            jQuery("#map-container AREA").mouseover(function(){
                var regionMap = '.'+$(this).attr('id')+'-map';
                var regionList = '.'+$(this).attr('id')+'-list';
                jQuery(regionMap).css('display', 'inline');

                // Check if a click event has occured and only change the Region hover state accodringly
                if (! jQuery('#practice-container ul').hasClass('selected')) {
                    jQuery(regionList).css('display', 'inline');
                }
            }).mouseout(function(){
                var regionMap = '.'+$(this).attr('id')+'-map';
                var regionList = '.'+$(this).attr('id')+'-list';

                // Check if a click event has occured and only change the Region hover state accodringly
                if (! jQuery(regionMap).hasClass('selected')) {
                    jQuery(regionMap).css('display', 'none');
                }

                // Check if a click event has occured and only change the Region hover state accodringly
                if (! jQuery('#practice-container ul').hasClass('selected')) {
                    jQuery(regionList).css('display', 'none');
                }
            });

            jQuery("#map-container AREA").click(function(){
                jQuery('#map-container img.region').removeClass('selected').css('display', 'none');
                jQuery('#practice-container ul').removeClass('selected').css('display', 'none');
                
                var regionMap = '.'+$(this).attr('id')+'-map';
                var regionList = '.'+$(this).attr('id')+'-list';
                jQuery(regionMap).addClass('selected').css('display', 'inline');
                jQuery(regionList).addClass('selected').css('display', 'inline');
            });

	 
	 $('div.pretamap ul.pretamap-nodes li')
	 	.addClass('mapped')
	 	.each(function(){
	 		
	 		var li = this;
	 		var timeout = this;
	 		var classnames = $(this).attr('class');
	 		
	 		// set postion of window
	 		var l = classnames.match(/l(\d+)/)[1];
	 		var t = classnames.match(/t(\d+)/)[1];
	 		$(this).css({
	 			left: l + 'px',
	 			top: t + 'px',
	 			display: 'none',
	 			zIndex: 10
	 		});
	 		
	 		// customise header text then append to box
	 		$(this).prepend($.pretamapGenerateHeader($(this).attr('title')));
	 		
	 		// if a background colour has been specified, change it now
	 		var b = classnames.match(/b(\w+)/);
	 		if(b != null)
	 		{
		 		$('.header', this).css('background', '#' + b[1]);
	 		}
	 		
	 		// create the link which will show this window when hovered and add hover behaviors
	 		var x = classnames.match(/x(\d+)/)[1];
	 		var y = classnames.match(/y(\d+)/)[1];	 	
	 		var w = classnames.match(/w(\d+)/);
	 		w = (w != null) ? w[1] : 270;
	 		var h = classnames.match(/h(\d+)/);
	 		h = (h != null) ? h[1] : 30;
	 		//var link = $('<a href="#"><img style="width: ' + w + 'px; height: ' + h + 'px; position: absolute; left: ' + x + 'px; top: ' + y + 'px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" /></a>')
                        var link = $('area');
                        link = link.hover(function(){
	 			$('div.pretamap ul.pretamap-nodes li').not(li).hide();
	 			$(li).fadeIn('fast');
	 			clearTimeout(timeout);
	 		},function(){
	 			clearTimeout(timeout);
	 			timeout = setTimeout(function(){ $(li).fadeOut('fast'); }, 2500);
	 		}).click(function(){
	 			return false;
	 		});
	 		$(li).hover(function(){
	 			clearTimeout(timeout);
	 		},function(){
	 			timeout = setTimeout(function(){ $(li).fadeOut('fast'); }, 2500);
	 		});
	 		$(this).parents('div.pretamap').append(link);

	 	});
});

jQuery.pretamapGenerateHeader = function(title)
{
  return '<span class="header">' + title + ' <a onclick="javascript:jQuery(this).parents(\'li\').hide(); return false;" class="close" href="#">X</a></span>';
}