/*
 * Common scripts for most pages
 * will be loaded all the time
 */
$(function(){
//=======================================================// 
//--------------- START HERE ----------------------------//

//=======================================================// 
// function to POST the json data to the server
//=======================================================//
fnPostFormData = function(form, postdata, noredirect, callbackFn)
{
    $.alertDialog({type: 'saving', msg: 'Please wait.... saving data...'});
    return $.post(typeof form != 'string' ? form.action : form, postdata ,function(                                                                      returndata){
        $.hideAlertDialog();
        var_dump(form);
        exit();
        var data = jQuery.parseJSON(returndata);
        if (data.msg){
            var sqlMsg = data.msg.substring(0,4)
            if (sqlMsg == 'SQL:'){
                var newMsg = "There was an error when accessing the database. Please contact your System Administrator."
                newMsg += "<hr/><label id=\"alert-label-view\" class=\"label-link alert-label\">Show Technical Message</label>"
                newMsg += "<div id=\"alert-div-tech\" class=\"alert-div\">"+data.msg.substring(5)+"</div>"
                data.msg = newMsg 
            }
			$.alertDialog({type: 'warning', msg: data.msg , dwidth: 700});
            if (sqlMsg == 'SQL:'){
                $("#alert-label-view").click(function(){
                    if ($(this).html() == 'Show Technical Message'){
                        $("#alert-div-tech").show()
                        $(this).html('Hide Technical Message')
                    } else {
                        $("#alert-div-tech").hide()
                        $(this).html('Show Technical Message')
                    }
                })
            }

            return false;

		} else if ($.isFunction(callbackFn)) {
			callbackFn.call(this, data)
								
        } else {
            if (!noredirect){   // don't change page
                if (typeof data.param != 'undefined'){
                    postdata = data.param;
                } else {
                    postdata = {};
                }
                $.fnPostFormUrl(data.url, postdata);
            } else {
                return '';
            }
        };
		
    })
    .error(function(){
        $.hideAlertDialog();
        $.alertDialog({type: 'warning', msg: 'There was an error while saving your data to the server... Please contact the Web Admin...'});
    });
}


//=======================================================// 
// function to POST the href links the server
// parameters: 
//  url must be passed, postdata is optional array
//=======================================================//
$.fnPostFormUrl = function(url, postdata, callbackFn)
{
    
    if (typeof url == 'undefined' || url==''){return;}
    if (typeof postdata == 'undefined'){posdata = '';}
     
    // create a temp form with input fields and post then post the form.
    var newForm = "<form action=\""+url+"\" id=\"temp_POSTForm\" method=\"post\">";
    if (postdata){
        $.each(postdata,function(n, v){
            newForm+="<input type=\"hidden\" name=\""+n+"\" value=\""+v+"\"/>";
        });
    }
	newForm+="</form>";
	$("#temp_POSTForm").remove();
    $("body").append(newForm);  // add to dom
    $("#temp_POSTForm").submit();    // then submit the temporary form

	if ($.isFunction(callbackFn)) {
		callbackFn.call(this)
	}
	
}            


/*============================================================================ 
 BUTTONS standard
 -----------------------------------------------------------------------------
 #btn_close = every form/info page must have 1 close button that redirect to another page
 ============================================================================*/ 
$("#btn_close").click(function(){
         document.location.replace($("#btn_close").val());
    });

$(".btn-dlr").click(function(){
     document.location.replace(this.value);
});

$('.icons').addClass('ui-state-default ui-corner-all');
//hover states 
$('.icons').hover(
	function() { $(this).addClass('ui-state-hover'); }, 
	function() { $(this).removeClass('ui-state-hover'); }
);


/*=========================================================================
STRING FUNCTIONS
=========================================================================*/

// PADDING 
$.pad = function (input, pad_length, pad_string) {
  return (input).toString().length < pad_length ? $.pad(pad_string + (input).toString(), pad_length, pad_string) : (input).toString();
}

// LEFT of string 
$.Left = function(str, n){
	 if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

});
