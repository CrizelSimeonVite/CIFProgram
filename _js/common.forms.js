/*
 * Inline Form Validation
 * for all forms !
 */
 
$(function(){
//=======================================================// 
//--------------- START HERE ----------------------------//

/*============================================================================ 
 COMMON standard
 -----------------------------------------------------------------------------
 all common script should be put here
 ============================================================================*/ 


/* set the cursor to first input text box */ 
// $("input:text:visible:first").focus();

//=======================================================// 

//=======================================================// 
// function to serialize the form inputs and return the JSON format
//=======================================================//
fnSerialize2JSON = function(form, arrName, postdata)
{
    if (typeof arrName != 'string' || arrName == ''){
        arrName = 'data';
    } 
    
    var query = $(form).serializeArray();
    if (typeof postdata == 'undefined'){
	    var jsondata = {};
		for (i in query) {
			jsondata[arrName+'[0]['+query[i].name+']'] = query[i].value
		} ;
	    return jsondata;
    } else {
		for (i in query) {
			postdata[arrName+'[0]['+query[i].name+']'] = query[i].value
		} ;
	}
}
//=======================================================//

//=======================================================// 
// function to retrieve the data from the table and create POST array
//=======================================================//
fnGetTablePostData = function(arrName, arrData, oTable, itemFields)
{

    if (typeof itemFields == 'undefined') {
        /* loop first to all the updated rows */
        if (arrData != 'undefined'){
            
            $.each(arrData, function(i, row){
                /* then loop to all columns from the passed array */
				if (typeof row != 'undefined'){
					$.each(row, function(f, v){
						postdata[arrName+'['+i+']['+f+']'] = v;
					});
				}
            });
        }
    } else {
        // get only newly added rows
        var itemData =  oTable.$("tbody>tr");    //.filter(":not([id])");
        var cellValue = '';
        if (itemData){
            $.each(itemData, function(o, r){
                rIndex = $(r).index();
                $.each(itemFields,function(i, c){
                    if (c.element){
                        // get the value in the actual html table
                        cellValue = $(r).children().eq(c.col).children(c.element)[0].value;
                    }else{
                        cellValue =  oTable.fnGetData(rIndex, c.col);
                    }
                    postdata[arrName+'['+rIndex+']['+i+']'] = cellValue;  
                });
            });
        }
    }
    return;
} 


//=======================================================//

/*============================================================================ 
 DIALOGS standard classes
 -----------------------------------------------------------------------------
 .dialog = class for the dialog div
 .dialog-openbutton = class for the button that shows the dialog. 
                      button value must be the dialog id
 .dialog-form = class for the forms of the dialogs                      
 ============================================================================*/ 
$(".dialog").dialog({"autoOpen":false
        ,"modal":true
        ,"title":this.title.html
        ,"width":"700px"
        ,"maxWidth":"700px"
        ,"show":"blind"
        ,"buttons": {
            "Ok": function(){
                $(".dialog-form").submit();
                $(this).dialog("close");
            }
        }    
});

$(".dialog-openbutton").click(function() {
	$("#"+this.value).dialog('open');		
});

});