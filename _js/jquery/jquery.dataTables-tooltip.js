/*
 * functions to use with dataTable plugin
 * will be loaded if the plugin is loaded also
 */
 
$(function(){
/*************************************************************************************
 * Kostantinos Kafouros
 * Sept. 21, 2011
 * Version 1.0
 *
 * Scripts for setting tooltips

 EXAMPLE:
 <script>
fnSetTableToolTips = function(
							  tableID,  define table id ex(list-grid)
							  aColumns, pass an array with number [] for the tool tip to be applied, note that the array numbers must be defined as the visible columns, it doesnt apply to hidden.
							  picCol, define the picture col that you wish to display.
							  IMGSource, define the source for the image
							  ErrorType,(options 'text' or 'image') if picCol specified, what should replace the broken image, text or another image
							  imgReplaceError, the image you want to replace the broken images with
							  txtReplaceError  the text you want to replace the broken images with
							  trunChk characters you want to truncate
							  lineToChange if not the whole table specify the line you want
							  )
 </script>

 *************************************************************************************/
fnSetTableToolTips = function(dataTableObject, aColumns, picCol, IMGSource, ErrorType, imgReplaceError, txtReplaceError, trunChc, lineToChange)
{
var tableID=$(dataTableObject).attr("id");
var TableLength=0;
var startFrom=0;
if(IMGSource=="")
	{
	bURL = $(location)[0].protocol+'//'+$(location)[0].hostname+(($(location)[0].port != '')?':'+$(location)[0].port:'')+'/';
var IMGSource= bURL+'apics/repository/itemphoto/';	
	}
if(lineToChange)
	{
	
	TableLength=lineToChange;
	startFrom=lineToChange;
	}
else
	{
	TableLength=$('#'+tableID+' tr').length;	
	}

for (i=startFrom;i<=TableLength; i++)
{
	
	$('#'+tableID+' tbody tr').eq(i).children('td').each( function() {
		
		   var tdToChange=this;
		   var tdindex=$(this).index();
		   var isValid = false;  // default to valid
	
	$.each(aColumns, function(k, field){
		if(field == tdindex) {
		   isValid = true;
		}
	});
	
	if(isValid==true)
			{
			var sTitle;
			var nTds = $('td', this);
			var sCode = $(this).text();
			sTitle =  sCode;
			var validColumn;
			if(jQuery.trim(sTitle)!='')
				{
				validColumn=false;
				if(tdindex==picCol[0])
					{	
					
					$.each($(this).children(), function(j,v){
					if($(v).hasClass("item-info-link"))
						{
							validColumn=true;
						}
					});
					if(validColumn==true)
						{
						var imgName=jQuery.trim(dataTableObject.fnGetData(i, picCol[1]));
						var stockCode= sTitle.replace( "-", "" );
						sTitle="<img  src='"+IMGSource+imgName+".jpg' onError=\"fnHideBrokenImage(this, '"+ErrorType+"','"+imgReplaceError+"', '"+txtReplaceError+"' )\" />";
						}
					
					}
					if(validColumn==true || aColumns.length>1)
						{
							this.setAttribute( 'title', sTitle );
							
							//console.log(this);
							 /* Truncate */
							
							 $(this).jTruncate({  
										length: trunChc,  
										minTrail: 0,
										pFileRowCol: [i, picCol[1]],
										tableObject: dataTableObject
									});  
								 /* Apply the tooltips */
								$(this).tooltip( {
									"delay": 50,
									"fade": true,
									"track": true,
									"fade": 450
								});
						}
					}
				
			}
	} );
}

}

/* --------------- version 2 by max
	obj is required
*/
fnSetToolTip = function(obj, photofile, text, h, filename) {
	bURL = $(location)[0].protocol+'//'+$(location)[0].hostname+(($(location)[0].port != '')?':'+$(location)[0].port:'')+'/';
	var IMGSource = bURL+'apics/repository/itemphoto/';

	var hght = (h != "" || h) ? 'height="'+h+'"' : '';
	if(text) {
		var sTitle = photofile;	
		if(h != "") {
			obj.jTruncate({ length: h, minTrail: 0, ellipsisText: sTitle, pfile: filename, tableObject: obj });  
		} else {
			obj.attr('title',sTitle);
			obj.tooltip( {"delay": 50, "fade": true, "track": true, "fade": 450});		
		}
	} else {		
		var sTitle = ($.trim(photofile) == 'null' || photofile == null || $.trim(photofile) == '') ? 'No Image' : '<img src="'+IMGSource+''+$.trim(photofile)+'.jpg" '+hght+' />';	
		obj.attr('title',sTitle);
		obj.tooltip( {"delay": 50, "fade": true, "track": true, "fade": 450});			
	}								
}
// ----------------

$.fnColumnToolTips = function(oTableTL, aColumns)
{
var tableID=oTableTL[0].id;
$.each(aColumns, function(ir, field){
	$('#'+tableID+' tbody tr').each( function(i, v) {
		$(v).children('td').eq(field[0]).attr( 'title',  oTableTL.fnGetData(i, field[1]) );
			 $(v).children('td').eq(field[0]).tooltip({
					"delay": 50,
					"fade": true,
					"track": true,
					"fade": 450
				});
	});
});
	
}



});
