/*
 * functions to use with dataTable plugin
 * will be loaded if the plugin is loaded also
 */
 
 jQuery.fn.dataTableExt.oApi.fnSetFilteringPressEnter = function (oSettings) {
    /*
    * Type:        Plugin for DataTables (www.datatables.net) JQuery plugin.
    * Name:        dataTableExt.oApi.fnSetFilteringPressEnter
    * Version:     2.2.1
    * Description: Enables filtration to be triggered by pressing the enter key instead of keyup or delay.
    * Inputs:      object:oSettings - dataTables settings object
    *              
    * Returns:     JQuery
    * Usage:       $('#example').dataTable().fnSetFilteringPressEnter();
    * Requires:	  DataTables 1.6.0+
    *
    * Author:      Jon Ranes (www.mvccms.com) 
    * Created:     4/17/2011
    * Language:    Javascript
    * License:     GPL v2 or BSD 3 point style
    * Contact:     jranes /AT\ mvccms.com
    */
    var _that = this;

    this.each(function (i) {
        $.fn.dataTableExt.iApiIndex = i;
        var $this = this;
        var anControl = $('input', _that.fnSettings().aanFeatures.f);
        anControl.unbind('keyup').bind('keypress', function (e) {
            if (e.which == 13) {
                $.fn.dataTableExt.iApiIndex = i;
                _that.fnFilter(anControl.val());
            }
        });
        return this;
    });
    return this;
}
$(function(){
//=======================================================// 
//--------------- START HERE ----------------------------//


/*************************************************************************************/
// bind the window resize to all tables to fix the fnDraw
$(window).resize(function() {
    if (typeof oTable != 'undefined'){
        oTable.fnAdjustColumnSizing();
    }
});


/*************************************************************************************/
fnShowHide = function( groupCols, bVis, oTable, lResize ) // hide datatable columns
{
    if (bVis == null){bVis = false;}
    // loop to the columns that we're hiding/showing
	$.each(groupCols,function(i, iCol){
							  
    	oTable.fnSetColumnVis( iCol, bVis, false );
		oTable.fnSettings()['aoColumns'][iCol]['bSearchable'] = bVis;
		
	});
    
    if (lResize == null){
	  oTable.fnAdjustColumnSizing();
    }
}
    

});     // end common functions

/*************************************************************************************
 * Kostantinos Kafouros
 * Oct. 5, 2011
 * Version 2.0
 *
 * Scripts for setting jquery datatable with various settings.

 EXAMPLE:
 <script>
 $('#tableID').initDatatable(
				 "TableTitle": (optional) This is for setting a differennt title, if you dont set										the page title will be shown
				 "cleanHeaderFooter": "true, false" default is false, Cleaning up the header and footer from filters pagination etc.. only tittle stays, 	                         this can be set only to true, if any other value doesnt apply.
				 "tableDef": (optional) you  can pass the array for setting csss to column ex(array[
																	{ "bSortable": false, "aTargets": [ 0, 1, 2, 3 ] }
																	,{ "sClass": 'center', "aTargets": [ 3 ] }]
				 
				 "columnHeaders":(optional) You can pass dynamically the columds []
				 "tableData": aaData[], (optional) You can pass dynamically the data
				 "xscroll": 	true, (optional) This if only set to true adds x scroll																	  				 "innerScrolValue": '120%', (optional)	 this is to define the inner scroller % is required and must be set bigger than the table 
				 "autoWidth":false  (optional) this is to define if you need auto width
				 );
 </script>
 if you dont require inbetweeen values just pass ''
 *************************************************************************************/
 
(function ($) {
 var Defaults = function () {};
    $.extend(Defaults.prototype, {
        cleanHeaderFooter:false,
		TableTitle: '',
		tableDef: [],
		columnHeaders:[],
		tableData:[],
		xscroll:false,
		innerScrolValue: '',
		autoWidth:false,
		loading:''
    });

$.fn.initDatatable = function(options){ 

var TableID="#"+$(this).attr('id');
var resetHeader=false;
var opts = new Defaults();
$.extend(opts, options);

// defaults
var optionsVar	= {		
"bJQueryUI": true,		
"bInfo": true,
"bDeferRender": true,
"bProcessing": false,
"bAutoWidth": false,
"iDisplayLength":200,
//"bPaginate":false,
// "sScrollY": "200px",
// "bScrollCollapse": true
"sPaginationType": "full_numbers"
}				

var binfo="i";
var vsDom = 0;
$.each(opts,function(i, o){
    
if (i=='cleanHeaderFooter'){
    if(opts.cleanHeaderFooter==true)
    	{
    	binfo="";
    	optionsVar["bFilter"]=false;
    	optionsVar["bSort"]=false;
    	optionsVar["bPaginate"]=false;
    	} 

} else if (i=='tableDef') {    
    if(opts.tableDef!=undefined && opts.tableDef!="")
    	{
    	optionsVar["aoColumnDefs"]=opts.tableDef;	
    	}


} else if (i=='columnHeaders') {	
    if((opts.columnHeaders!=undefined) && opts.columnHeaders!="")
    	{
    	optionsVar["aoColumns"]=opts.columnHeaders;		
    	}	
	
} else if (i=='tableData') {
    if(opts.tableData!=undefined && opts.tableData!="")
    	{
    	optionsVar["aaData"]=opts.tableData;		
    	}
	
} else if (i=='xscroll') {
    if(opts.xscroll==true)
    	{
    	optionsVar["sScrollX"]="100%";
        optionsVar["bScrollCollapse"]=true;
    	//optionsVar["sScrollXInner"]=(innerScrolValue != undefined)?innerScrolValue:'110%';
    	}
	
} else if (i=='sScrollY') {
    	optionsVar["sScrollY"]=opts.sScrollY;
        optionsVar["bScrollCollapse"]=true;

} else if (i=='innerScrolValue') {
    if(opts.innerScrolValue!="")
    	{
    	optionsVar["sScrollXInner"]=opts.innerScrolValue;
    	}
	
} else if (i=='autoWidth') {
    if(opts.autoWidth==true)
    	{
    	optionsVar["bAutoWidth"]=true;
    	}

} else if (i=='iDisplayLength') {
    if(opts.iDisplayLength!="")
    	{
    	optionsVar["iDisplayLength"]=opts.iDisplayLength;
    	}

}else if (i=='TableTitle') {
    // just needed to pass here so tableTitle will not go on the else 
} 
else if (i=='bSort') {
	if(o==false)
  		{ resetHeader=true;}
   optionsVar[i]=o;
} 
else if (i=='loading') {
	if(o!='') {
		optionsVar["fnPreDrawCallback"]=function() {
            $.alertDialog({type: 'loading', msg: o});
        }
		optionsVar["fnDrawCallback"]=function () {
			$.hideAlertDialog();
		}
	}
} 
else if (i=='sDom') {
	if(opts.sDom!="") { vsDom = 1; }
} 
else {
    // any options of dataTables not defined here as defaults
    optionsVar[i]=o;

}
    
}); // end of option loop

// last option: sDom
if(vsDom) {
	optionsVar["sDom"]='<"H"f<"'+TableID+'">>t<"F"'+binfo+'S>';	
} else {	
	optionsVar["sDom"]='<"H"f<"'+TableID+'">>t<"F"'+binfo+'p>';	
}

			
// Finally, initialize the dataTable
var newDataTable = $(TableID).dataTable(optionsVar);

// search on enter
newDataTable.fnSetFilteringPressEnter();
   
//set header
if(opts.TableTitle=='')
	{
	opts.TableTitle=$("#ptitle").html();	
	}

$("div."+TableID).html("<span class='table-title'>"+opts.TableTitle+"</span>");	
$(this).show();
if(resetHeader==true)
	{
		// header adjustments - removed sort class
	var oSettings = newDataTable.fnSettings();
	if ( oSettings.bJUI )
	{
		for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
		{
			nTh = oSettings.aoColumns[i].nTh;
			$(nTh).children().removeAttr('class');
			//if(i == 4 || i == 5) { $(nTh).css("width","10px"); }
		}
	}
	}
	
	
	
return newDataTable;

		
}
})(jQuery);