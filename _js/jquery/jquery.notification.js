                                       /*
 *  Facebook notifications with jQuery [v1.0]
 *  Distributed under the Do-wathever-the-hell-you-want-with-it License
 *
 *  Web site:   http://claudiobonifazi.com
 *  Blog:       http://claudiobonifazi.com/singlepost.php?id=107602
 *  Email:      claudio.bonifazi@gmail.com
 *  Twitter:    @ClaudioBonifazi
 */
(function($){
        $.fn.setPopup = function( time, timeout ){
                var el = $(this)
                time = (time===undefined) ? 5000 : time;
				timeout = (timeout===undefined) ? false : true;
				el.data('hover',false)
				if(timeout==true){el.data('time',time);}
				else { clearTimeout( $(this).data('timeout') );}
                el.find('div')
                        .live('mouseover',function(){
							if(timeout==false){
                                el.data('hover',true);
                                $(this).show();
                                clearTimeout( $(this).data('timeout') );
							}
                        }).live('mouseout', function(){
                                el.data('hover',false)
								if(timeout==true){
									var a = setTimeout(function(){
											$(this).animate({'opacity':'hide','height':'hide'},'fast',
													function(){
															el.find('div:hidden').remove()
													})
									} 
									,el.data('time'))
								}
						else
							{
                        	$(this).data('timeout',a)
							}
                        })
                el.find('div').find('a:first').live('click',function(e){
                        $(e.target).parent('div').remove();
                })
                return el
        }
        $.fn.callPopup = function callPopup(msg, timeout){
                var el = $(this)
				timeout = (timeout===undefined) ? false : true;
                msg = (typeof msg != 'object') ? new Array(msg) : msg;
                $.each(msg,function(i,m){
					   	el.empty(); // for only one message, otherwise comment
						el.append('<div><a href="#" title="close">X</a>'+m+'</div>')
                        .find('div:first').css({'position':'relative','display':'none'})
                        .animate({'opacity':'show','height':'show'},'slow')
                        .effect( "shake", {times:5}, 100 )
						if(timeout==true){
							var a = setTimeout(function(){
									if(!el.data('hover'))
											el.find('div:first').animate({'opacity':'hide','height':'hide'},'fast',
													function(){
															el.find('div:hidden').remove();
													})
							},el.data('time'))
							$(this).data('timeout',a)
						}
                        	
                })
                return el
        }       
})(jQuery)
/*
*  EXAMPLE:
*  jQuery(document).ready(function($){
*               popup = $('#tips')
*               popup.setPopup()
*               $('a').click(function(){
*                       popup.callPopup('You\'ve got a new <a href="#" title="notifications  panel">notification</a>.')
*               return false
*       })
* })
*/                              