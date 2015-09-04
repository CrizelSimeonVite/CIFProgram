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
			ellipsisText: "",
			pFileRowCol: "",
			tableObject: null 
		};
		
		// fixed for now
		//options.length=200;
		
		bURL = $(location)[0].protocol+'//'+$(location)[0].hostname+(($(location)[0].port != '')?':'+$(location)[0].port:'')+'/';
		var IMGSource = bURL+'apics/repository/itemphoto/';
		if(options.tableObject !== null &&$.trim(options.pFileRowCol) !== '')
			{
			var imgName=jQuery.trim(options.tableObject.fnGetData(options.pFileRowCol[0], options.pFileRowCol[1]));
			}
		else
			{
			var imgName="";
			}
		var options = $.extend(defaults, options);
		return this.each(function() {
			obj = $(this);
			var fullText = obj.html();
			if(fullText.length > options.length + options.minTrail) {
				var splitLocation = fullText.indexOf(' ', options.length);
				if(splitLocation != -1) {
					// truncate tip
					var splitLocation = fullText.indexOf(' ', options.length);
					var str1 = fullText.substring(0, options.length);//splitLocation					
					obj.html(str1+ "<span class='truncate_more_link item-info-link link' title='Click to view full descritpion.'> (<span style='font-size:14px; font-weight:bold;'>+</span>)</span>");
					//obj.html(str1+'<span class="icons ui-state-default ui-corner-all" style="float:right;" title="Click to view full descritpion."><span class="ui-icon ui-icon-newwin truncate_more_link">&nbsp;</span></span>');
					// set onclick event for more/less link
					var moreLink = $('.truncate_more_link', obj);
					moreLink.click(function() {
						
						$.alertDialog({  
									type: "info",
									msg:'<b>Full Column Text:</b></br>'+(options.ellipsisText != "" ? options.ellipsisText : fullText)});
						
						var imgfile = ($.trim(imgName) == 'null' || options.tableObject == null || $.trim(options.pFileRowCol) == '') ? '<img src="'+IMGSource+'itemblank.jpg" width="130" height="110" />' : '<img src="'+IMGSource+''+$.trim(imgName)+'.jpg" height="140" width="130"/>';
						
						$("#DIValertDialogs tbody tr td:eq(0)").html(imgfile);
						
						return false;
				  	});
				}
			} // end if
			
		});
	};
})(jQuery);