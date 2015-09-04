/*
 * functions to use with dataTable plugin
 * will be loaded if the plugin is loaded also
 */
 

//=======================================================// 
//--------------- START HERE ----------------------------//
// truncating text function extension for jquery added by kostas
 (function($){
	$.fn.jTruncate = function(options) {
	   
		var defaults = {
			length: 300,
			minTrail: 20,
			moreText: "more",
			lessText: "less",
			ellipsisText: "...",
			moreAni: "",
			lessAni: ""
		};
		
		var options = $.extend(defaults, options);
	   
		return this.each(function() {
			obj = $(this);
			var body = obj.html();
			
			if(body.length > options.length + options.minTrail) {
				var splitLocation = body.indexOf(' ', options.length);
				if(splitLocation != -1) {
					// truncate tip
					var splitLocation = body.indexOf(' ', options.length);
					var str1 = body.substring(0, splitLocation);
					var str2 = body.substring(splitLocation, body.length);
					obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
						'</span>' + '<span class="truncate_more displayNone">' + str2 + '</span>');
					//obj.find('.truncate_more').css("display", "none");
					
					// insert more link
					obj.append(
						'<span class="clearboth">' +
							'<span class="truncate_more_link item-info-link">' + options.moreText + '</span>' +
						'</span>'
					);

					// set onclick event for more/less link
					var moreLink = $('.truncate_more_link', obj);
					var moreContent = $('.truncate_more', obj);
					var ellipsis = $('.truncate_ellipsis', obj);
					moreLink.click(function() {
						if(moreLink.text() == options.moreText) {
							moreContent.show(options.moreAni);
							//moreContent.removeClass('displayNone');
							//moreContent.addClass('displayAll');
							moreLink.text(options.lessText);
							//ellipsis.css("display", "none");
						} else {
							moreContent.hide(options.lessAni);
							//moreContent.removeClass('displayAll');
							//moreContent.addClass('displayNone');
							moreLink.text(options.moreText);
							//ellipsis.css("display", "inline");
						}
						return false;
				  	});
				}
			} // end if
			
		});
	};
})(jQuery);