 /*************************************************************************************
 * Crizel Simeon Vite
 * Version 1.0

 * TO LOAD :
   This file will be automatically load by the website all the time.
        
 * Initialize on the form page as:
    
$(".delete_link").click( function() { // you button add the function on clicK event as shown below
	lnkID=this.id;							  
	$.alertDialog({  
	type: "", // if no type by deafault alert other option "hint", "confirm"
	yes: "Confirm", // button caption for confirmation
	no: "Cancel", // button caption for confirmation
	title: "Confirmation Required", //dialog title, defaults are assinged u can override.
	msg: "This item will be permanently deleted and cannot be recovered. <strong>Are you sure?", //define other message
	url: $("#delete_link_url").val()+lnkID, url is to be defined for a posting purpose
	img:"alert.png" // you can define a different immage defaults for all types have been applied.
	dwidth: 300, is default"Specify the dialog width";
	callback: function() {$("#tr_"+lnkID).remove()} define a function to be called back
	timerSet: 5 define seconds that you wish the timer to close after it was opened, if 0 doesn close
	newPosition: ['top','top', $('#ptitle')] read jquery positioning for better anderstanding. but in brief you position according to another elements place on the page
	});
});

 *************************************************************************************/


(function ($) {
    var Defaults = function () {};
    $.extend(Defaults.prototype, {
        yes: "Confirm",
        no: "Cancel",
		closeonescape:false,
        title: "",
        msg: "",
		type: "",
		url: "",
		dwidth:500,
		newPosition: [],
		timer: 0,
		callback: function() {}
    });
   
    $.alertDialog = function (options, callback) {
        // Pass the options and a callback to execute if affirmative user
        // response.
        
        var opts = new Defaults();
        $.extend(opts, options);
        
        var exit_status = 0;
		if(opts.type=="confirm")
			{
			var yesFunc = function () 
							{
							var isfalse=options.callback.call(this);
							if(isfalse!==false)
								{
								$(this).dialog('close');
								}
							$(".ui-dialog-titlebar-close").show();
							exit_status = 1;
							}
		 	var noFunc = function () 
							{
							exit_status = 0;
							$(this).dialog('close');
							 $(".ui-dialog-titlebar-close").show();
        					}
			}
        
        var optionsVar	= {		
							"autoOpen": false,
							"modal":true,		
							"close": function () {
											$("div.formError").each(function(i, t){	// remove validation errors boxes
												$(this).remove();
											});
											$('#DIValertDialogs').dialog('destroy').remove();	
											}
							}	
							
		if(opts.type=="confirm")
			{
			optionsVar["closeOnEscape"]=false,
			optionsVar["open"]=function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
			}
        var dlg = $('body').append("<div id='DIValertDialogs' class='alert-dialogs'></div>").find('div:last')
                .dialog(optionsVar);
       
	   if(opts.type=="hint")
				{
				opts.msg==" HINT"
				opts.img="hint2.png";
				opts.msg="<div class=\"alert-hint\">"+opts.msg+"</div>";
				if(opts.timer==0)
					{
					opts.timer=5;
					}
				}
	  else if(opts.type=="confirm")
				{
				var buttons = new Object();
				opts.msg==" CONFIRMATION"
				buttons[opts.yes] = yesFunc;
		 		buttons[opts.no] = noFunc;
				opts.msg="<div class=\"alert-confirm\">"+opts.msg+"</div>";
				opts.img="confirm3.png";
				}
	  else if(opts.type=="warning")
				{
				opts.msg="<div class=\"alert-warning\">"+opts.msg+"</div>";
				opts.img="warning.png";
                }
	 
	 else if(opts.type=="loading")
				{
				//dlg.dialog('option', 'position', ['middle',0]);
				opts.msg="<div class=\"alert-loading\">"+opts.msg+"</div>";
				opts.img="loader.gif";
                }
	else if(opts.type=="saving")
				{
				opts.msg="<div class=\"alert-loading\">"+opts.msg+"</div>";
				opts.img="saving.gif";
                }
	else if(opts.type=="uploading")
				{
				opts.msg="<div class=\"alert-loading\">"+opts.msg+"</div>";
				opts.img="saving.gif";
                }
	else if(opts.type=="info")
				{
				opts.msg="<div class=\"alert-loading\">"+opts.msg+"</div>";
				opts.img="info_alert.png";
                }
      else
				{
				opts.msg="<div class=\"alert-normal\">"+opts.msg+"</div>";
				opts.img="alert.png";
				if(opts.timer==0)
					{
					opts.timer=5;
					}
				}
	   if(opts.title=="")
	   	{
		   if(opts.type=="hint")
				{
				opts.title=" HINT";
				}
			else if(opts.type=="confirm")
				{
				opts.title=" CONFIRMATION";
				}
			else if(opts.type=="warning")
				{
				opts.title=" WARNING";
				}
			else if(opts.type=="loading")
				{
				opts.title=" LOADING DATA";
				

				}
			else if(opts.type=="saving")
				{
				opts.title=" SAVING DATA";
				}
			else if(opts.type=="info")
				{
				opts.title="INFORMATION";
				}
			else
				{
				opts.title=" ALERT";	
				}
		}

        dlg.dialog('option', 'title', opts.title);
		dlg.dialog('option', 'width', opts.dwidth);
        dlg.dialog('option', 'buttons', buttons);
		
		BPath= $(location)[0].protocol+'//'+$(location)[0].hostname+(($(location)[0].port != '')?':'+$(location)[0].port:'')+'/CIFProgram/_css/_img/';
		imgPath=BPath+opts.img;
        var dialogMsg = (typeof opts.msg == 'string')? opts.msg : '' ;
        var content = '';
		var progressbarID="alert_progressbar";
        
		if(opts.type=='loading' || opts.type=='saving') //change the display if loader or saving
			{
			content="<table><tr align=\"center\"><td><p>"+dialogMsg+"</p></td></tr><tr align=\"center\"><td  style=\"align:center;\"><p align=\"center\"><img src=\""+imgPath+"\" style=\"align:center; \"></p></td></tr></table>";	
			}
		else if(opts.type=='uploading') 
			{
			content="<table><tr align=\"center\"><td><p>"+dialogMsg+"</p></td></tr><tr align=\"center\"><td  style=\"align:center;\"><p align=\"center\"><img src=\""+imgPath+"\" style=\"align:center; \"></p></td></tr><tr align=\"center\"><td style=\"align:center;\"><div id=\""+progressbarID+"\"></div></td></tr></table>";
			}
		else
			{
			content='<table><tr valign="middle"><td  style="valign:middle"><img src="'+imgPath+'" style="valign:middle"></td><td width="10%"></td><td><p>'+dialogMsg+'</p></td></tr></table>';
			}
		
        dlg.html(opts.msg ? content : "&nbsp;").dialog('open') //define dialog contents
        .one('dialogclose', function () {
			if(opts.type!="confirm" && $.isFunction(opts.callback)) { 
				opts.callback.call(this)
			}
        });
		
		if (opts.type=="uploading"){
			// if this is uploading, we need to initialize the progress bar
			$( "#"+progressbarID ).progressbar({value: 0});
		}
			if(opts.timer!=0)// if timer defined closes down the dialog
				{
				setTimeout("destroyDialog()", opts.timer*1000);
				}
    }

})(jQuery);

(function ($) {
    $.hideAlertDialog = function (options, callback) {
		$(".alert-dialogs").dialog( "option", "hide", 'blind' );
		$(".alert-dialogs").dialog("close");
	}
})(jQuery);

function destroyDialog() {
 };

