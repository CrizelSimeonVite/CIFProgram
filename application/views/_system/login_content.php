<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 */
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=9" />
	
<title>VALENS TEST SYSTEM</title>

    <style media="all">
        #login_msg{
            width:100%;
            color:#F00;
            text-align:center;
            font-size:14px;
            font-weight:bold;
            padding: 20px;
        }
        body{ font-size:13px;}
        input{-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius: 4px;}
        .picborder{-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius: 4px;
            border:#999 dashed 1px;}
        .tableView{-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius: 4px;
            border:#999 solid 1px;
            padding: 10px;
            background:url(<?php echo base_url().'_css/_img/';?>body_bg.gif) repeat-x top;
            width:600px;
        }

        .head{
            background-color:#B9D2E6;
            top:0;
            left:0px;
            right:0px;
            height:82px;
            width:100%;
            position:absolute;
            font-weight:bold;
            color:white;
            margin:0px;
            padding:0px;
            border-bottom:#999 solid 2px;
        }
        .foot{
            background:url(<?php echo base_url().'_css/_img/';?>body_bg.gif) repeat-x top;
            height:400px;
            width:100%;
            left:0px;
            right:0px;
            padding-top:50px;
            vertical-align:top;
            padding-right:0px;
            margin-top:76px;
            position:absolute;
        }
    </style>

</head>
<body>
<div class="head">
    <div style="padding-left:150px; padding-top:10px;
font-size:56px; ">
<img  style="top:15px; left: 110px; position:absolute;" src="<?php echo base_url().'_css/_img/';?>valens_logo.gif" />
    </div>
    <div style="top:14px; position:absolute; left:66%; margin-left:-100px;">
    <table>
       <tr>
        <td align="center">
          <?php if (@$msg) :?>

                  <img src="<?php echo  base_url().'_css/_img/';?>loginwrong.png" height="60px" />

            <?php endif; ?>
        </td>
    <tr>
    </table>
    </div>
    <div style="position:absolute !important; right:110px; top:10px; font-family:'Comic Sans MS', cursive; font-size:12px;">
    <form name="login_form" action="<?php echo site_url();?>/user/login" method="post">
    	<table>
            <tr>
                <td>
                    <label>Login ID</label>
                </td>
                <td  style="padding-left:6px">        
                    <label>Password</label>
                </td>
                <td>
                </td>
            </tr>
           	<tr>
                <td>
                    <input type="text" name="username" id="username"  style="width:147px;"  value="" />
                </td>
               <td  style="padding-left:5px">
                     <input type="password" name="password" style="width:147px;" id="password" value="" />
                </td>
                <td>
                	 <button id="login" type="submit" style="background-color:#B9D2E9; font-weight:bold; color:#FBFBFF;">Log In</button>
                </td>
            </tr>
            <tr>
            	<td colspan="3">
                    <i>
                        <?php if (@$msg) :
                            echo @$msg;
                        endif; ?>
                    </i>
                </td>
             </tr>
       </table>
      </form>
    </div>
</div>
<div class="foot" align="center">
<table class="tableView" border='0' >
<tr>
<td colspan="2" align="center"  style="font-weight:18px !important;">
<p>
Valens Test Program
</p>

<img class="picborder" src="<?php echo base_url().'_css/_img/';?>aici_home-bg.png"/>

</td>
</tr>
</table>

</div>   
</body>
</html>

<?php //if (@$msg) :?>
   <!-- <div id="login_msg">
        <?php //echo @$msg?>
    </div>-->
<?php //endif; ?>
