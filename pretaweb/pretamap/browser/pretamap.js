
            
        

jQuery(function($){
         
         jQuery(".pretamap AREA").each( function() {
                  var anchor = $(this).attr('href').substring(1);
                  var tip = 'div.popup:has(a[name="'+anchor+'"])';
                  /*$(this).tooltip({tip:tip,
                                  delay:60,
                                  offset:[-300,300],
                                  layout: '<div class="pretamap_tooltip"/>',
                                  opacity:1,
                                 // position:'center right',
                                  relative:true,
                                  tipClass: 'pretamap_tooltip'});*/
                  $(this).qtip({content:$(tip),
                               hide: {
                                    delay:500,
                                    fixed:true,
                                    effect:{type:'fade'}
                               },
                               show: {effect:{type:'slide'},
                                    solo:true
                                    },
                               style: { 
                                    name: 'green' // Inherit from preset style
                               }
                               });
         })
         


});

jQuery.pretamapGenerateHeader = function(title)
{
  return '<span class="header">' + title + ' <a onclick="javascript:jQuery(this).parents(\'li\').hide(); return false;" class="close" href="#">X</a></span>';
}